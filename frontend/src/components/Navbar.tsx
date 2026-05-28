"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Resume", path: "/resume" },
  { name: "Blogs", path: "/blogs" },
  { name: "AI Chatbot", path: "/chat" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 backdrop-blur-md border-b border-white/10 bg-[hsl(var(--accent-blue-dark))]">
      <div className="max-w-6xl mx-auto h-full px-6 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-lg font-semibold text-white"
        >
          SA
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`nav-link ${
                pathname === item.path ? "active" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[hsl(var(--accent-blue-dark))] border-t border-white/10 px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setOpen(false)}
              className={`block text-sm ${
                pathname === item.path
                  ? "text-white"
                  : "text-white/70"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
