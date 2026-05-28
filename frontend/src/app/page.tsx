"use client";

import { useState } from "react";
import { TypingText } from "@/components/TypingText";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="min-h-screen pt-24 px-6 flex items-center">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-14 text-center lg:text-left">
          
          {/* LEFT */}
          <div className="flex-1">
            <div className="mb-6 flex items-baseline justify-center lg:justify-start gap-3">
              <span className="font-mono text-2xl sm:text-3xl lg:text-5xl leading-none">
                &gt;&gt;&gt;
              </span>

              <TypingText
                text="Saanvi Arora"
                delay={120}
                className="font-mono font-bold text-3xl sm:text-4xl lg:text-5xl"
                onComplete={() => setTimeout(() => setShowContent(true), 300)}
              />
            </div>

            <div
              className={`space-y-6 transition-all duration-700 ${
                showContent
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-base sm:text-lg text-white/70 font-light">
                95% coffee consumer | 5% coder
              </p>

              <p className="max-w-xl mx-auto lg:mx-0 text-sm sm:text-base text-white/50 leading-relaxed">
                I’m passionate about building technology that’s accessible and impactful. Welcome to my page!
              </p>

              {/* Icons */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="https://github.com/saanwee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/15 transition"
                >
                  <Github className="h-5 w-5 text-white/80" />
                </a>

                <a
                  href="https://www.linkedin.com/in/saanvi-arora-16664022b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/15 transition"
                >
                  <Linkedin className="h-5 w-5 text-white/80" />
                </a>

                <a
                  href="mailto:saanviarora4@gmail.com"
                  className="h-12 w-12 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/15 transition"
                >
                  <Mail className="h-5 w-5 text-white/80" />
                </a>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm hover:opacity-90 transition"
                style={{ color: "hsl(var(--accent-blue-light))" }}
              >
                Learn more about me <ArrowDown className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* RIGHT — AVATAR */}
          <div
            className={`transition-all duration-700 delay-150 ${
              showContent ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div
              className="h-[220px] w-[220px] sm:h-[260px] sm:w-[260px] lg:h-[320px] lg:w-[320px]
                         rounded-full flex items-center justify-center border overflow-hidden"
              style={{
                borderColor: "hsl(var(--accent-blue) / 0.45)",
                background:
                  "radial-gradient(circle at top, rgba(255,255,255,0.09), rgba(255,255,255,0.02))",
              }}
            >
              <img
                src="/avatar.png"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
