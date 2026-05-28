"use client";

import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "Hi! I'm Saanvi's AI assistant. Ask me anything about her experience, projects, skills, or background!",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: input,
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";
      const res = await fetch(`${backendUrl}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { id: Date.now(), role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          role: "assistant",
          content: "Sorry, I'm having trouble connecting right now. Please try again later!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-8 px-6">
      <div className="container max-w-3xl mx-auto h-[calc(100vh-8rem)] flex flex-col">
        {/* Header */}
        <div className="mb-6 animate-fade-in-up text-center">
          <h1 className="text-4xl font-bold text-[hsl(var(--accent-blue-light))]">
            My chatbot
          </h1>
        </div>

        {/* Chat Container */}
        <div className="flex-1 glass-card flex flex-col overflow-hidden animate-fade-in-up delay-100">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            {messages.map((message) => {
              const isUser = message.role === "user";

              return (
                <div
                  key={message.id}
                  className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={[
                        "max-w-[78%] px-4 py-3 text-sm leading-relaxed",
                        "rounded-2xl shadow-sm border",
                        isUser
                        ? "bg-[hsl(var(--accent-blue-light))] text-white border-white/10 rounded-br-md"
                        : "bg-secondary text-foreground border-border/60 rounded-bl-md",
                    ].join(" ")}
                    >
                    {message.content}
                    </div>
                </div>
              );
            })}

            {/* Loading bubble */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-secondary text-foreground px-4 py-3 rounded-2xl rounded-bl-md border border-border/60 shadow-sm">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                    <span
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "0.12s" }}
                    />
                    <span
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "0.24s" }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-[hsl(var(--card))]/30">
            <div className="flex gap-3 items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything about Saanvi..."
                className="
                  flex-1 bg-secondary/70 border border-border/60
                  rounded-xl px-4 py-3 text-foreground
                  placeholder:text-muted-foreground
                  focus:outline-none focus:ring-2 focus:ring-primary/50
                  transition-all duration-300
                "
              />

              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="
                  px-4 py-3 rounded-xl text-white
                  bg-[hsl(var(--accent))]
                  hover:bg-[hsl(var(--accent-blue-light))]
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-all duration-300 hover:scale-105
                "
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
