import os
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pinecone import Pinecone
from openai import OpenAI

load_dotenv()

app = FastAPI()

ALLOWED_ORIGINS = [
    "http://localhost:3000",
    os.environ.get("FRONTEND_URL", ""),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=[o for o in ALLOWED_ORIGINS if o],
    allow_methods=["POST"],
    allow_headers=["*"],
)

openai_client = OpenAI()
pc = Pinecone(api_key=os.environ.get("PINECONE_API_KEY"))
index = pc.Index(os.environ.get("PINECONE_INDEX", "saanvi-portfolio"))


def retrieve_context(query: str, k: int = 6) -> str:
    embedding = openai_client.embeddings.create(
        model="text-embedding-3-small",
        input=query,
    ).data[0].embedding
    results = index.query(vector=embedding, top_k=k, include_metadata=True)
    return "\n\n".join(
        match.metadata.get("text", "") for match in results.matches
    )


SYSTEM_TEMPLATE = """You are a friendly AI assistant on Saanvi Arora's personal portfolio website.
Respond naturally to greetings and small talk with a short warm reply.
Only decline questions clearly unrelated to Saanvi (e.g. "what's the weather", "write me an essay").

Use the context as your primary source for facts about Saanvi. Supplement with general knowledge to enrich answers when relevant (e.g. explaining a technology or course she took), but always tie it back to her.

Tone and style rules — follow these strictly for every single response without exception:
- Never use markdown: no **, no *, no bullet points, no dashes, no headers, no numbered lists. Plain prose only.
- Refer to Saanvi in third person: "Saanvi studied...", "She worked on...", "Her projects include..."
- Be brief. One to three sentences max by default. Do not volunteer extra detail unless the user explicitly asks.
- When listing things, use a single comma-separated sentence. Never use a formatted list.

If asked something personal not in the context, say you don't have that detail and suggest emailing saanviarora4@gmail.com.

Context about Saanvi:
{context}"""


class ChatMessage(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    messages: list[ChatMessage]


@app.post("/chat")
async def chat(request: ChatRequest):
    if not request.messages:
        raise HTTPException(status_code=400, detail="No messages provided")

    user_query = next(
        (m.content for m in reversed(request.messages) if m.role == "user"), None
    )
    if not user_query:
        raise HTTPException(status_code=400, detail="No user message found")

    context = retrieve_context(user_query)

    messages = [{"role": "system", "content": SYSTEM_TEMPLATE.format(context=context)}]
    for m in request.messages:
        if m.role in ("user", "assistant"):
            messages.append({"role": m.role, "content": m.content})

    response = openai_client.chat.completions.create(
        model="gpt-4o-mini",
        messages=messages,
        max_tokens=300,
    )

    return {"reply": response.choices[0].message.content}
