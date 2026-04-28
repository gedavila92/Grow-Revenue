import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, whatsappHref } from "../data/site.js";
import Logo from "./Logo.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-obsidian/[0.82] shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
      <nav className="section-shell flex h-20 items-center justify-between">
        <Logo />
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-semibold text-white/[0.68] transition hover:text-white">
              {label}
            </a>
          ))}
        </div>
        <a href={whatsappHref} className="primary-btn hidden lg:inline-flex">
          Agenda una consulta
        </a>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-[8px] border border-white/10 bg-white/[0.04] lg:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-obsidian/[0.96] px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-[8px] px-3 py-3 text-sm font-bold text-white/[0.78] hover:bg-white/[0.06]"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <a href={whatsappHref} className="primary-btn mt-3">
              Agenda una consulta
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
