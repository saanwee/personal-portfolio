"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export function TypingText({
  text,
  delay = 100,
  className,
  onComplete,
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
      onComplete?.();
    }
  }, [displayedText, text, delay, onComplete]);

  return (
    <span className={`font-mono ${className || ""}`}>
      {displayedText}
      {!isComplete && <span className="typing-cursor" />}
      {isComplete && <span className="typing-cursor" />}
    </span>
  );
}
