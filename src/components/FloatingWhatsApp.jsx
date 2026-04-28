import React from "react";
import { MessageCircle } from "lucide-react";
import { whatsappHref } from "../data/site.js";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-mint text-obsidian shadow-glow transition duration-300 hover:-translate-y-1 hover:bg-amber"
      aria-label="Escríbenos por WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
