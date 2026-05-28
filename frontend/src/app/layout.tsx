import "./globals.css";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { MessageCircle } from "lucide-react";

export const metadata = {
  title: "Saanvi's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
        <Link
          href="/chat"
          aria-label="Open chatbot"
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
          style={{ background: "hsl(var(--accent))" }}
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Link>
      </body>
    </html>
  );
}
