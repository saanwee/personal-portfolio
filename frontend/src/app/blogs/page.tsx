import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const blogs = [];

export default function Blogs() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-in-up text-center">
          <h1 className="text-4xl font-bold mb-4 text-[hsl(var(--accent-blue-light))]">
            Blog Posts
          </h1>
          <p className="text-muted-foreground">
            Thoughts on machine learning, cybersecurity, and building cool things with code.
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="glass-card p-12 text-center animate-fade-in-up delay-100">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Sparkles className="w-16 h-16 text-[hsl(var(--accent-blue-light))] animate-pulse" />
              <Sparkles className="w-8 h-8 text-[hsl(var(--accent))] absolute -top-2 -right-2 animate-pulse delay-150" />
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4 text-[hsl(var(--accent-blue-light))]">
            Blog Posts Coming Soon! 
          </h2>
        
          
          </div>
        </div>
      </div>
  );
}