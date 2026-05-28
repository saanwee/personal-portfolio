"""
Run once to embed all portfolio documents and store them in Pinecone.
Usage: python ingest.py
"""

import os
from dotenv import load_dotenv
from pinecone import Pinecone, ServerlessSpec
from langchain_openai import OpenAIEmbeddings
from langchain_pinecone import PineconeVectorStore
from data import docs

load_dotenv()

PINECONE_API_KEY = os.environ["PINECONE_API_KEY"]
PINECONE_INDEX = os.environ.get("PINECONE_INDEX", "saanvi-portfolio")
EMBED_MODEL = "text-embedding-3-small"
EMBED_DIM = 1536

pc = Pinecone(api_key=PINECONE_API_KEY)

existing = [idx.name for idx in pc.list_indexes()]
if PINECONE_INDEX not in existing:
    print(f"Creating Pinecone index '{PINECONE_INDEX}'...")
    pc.create_index(
        name=PINECONE_INDEX,
        dimension=EMBED_DIM,
        metric="cosine",
        spec=ServerlessSpec(cloud="aws", region="us-east-1"),
    )
    print("Index created.")
else:
    print(f"Index '{PINECONE_INDEX}' already exists.")

embeddings = OpenAIEmbeddings(model=EMBED_MODEL)

print(f"Embedding and uploading {len(docs)} documents...")
PineconeVectorStore.from_documents(
    documents=docs,
    embedding=embeddings,
    index_name=PINECONE_INDEX,
)
print("Done! All documents uploaded to Pinecone.")
