import os
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from langchain_openai import OpenAIEmbeddings
from langchain_pinecone import PineconeVectorStore
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

embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
vectorstore = PineconeVectorStore(
    index_name=os.environ.get("PINECONE_INDEX", "saanvi-portfolio"),
    embedding=embeddings,
)
retriever = vectorstore.as_retriever(search_kwargs={"k": 6})

openai_client = OpenAI()

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

    relevant_docs = retriever.invoke(user_query)
    context = "\n\n".join(doc.page_content for doc in relevant_docs)

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
