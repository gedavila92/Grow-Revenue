import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { navItems, whatsappHref } from "../data/site.js";
import Logo from "./Logo.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-obsidian py-12">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/[0.58]">
              Agencia de marketing digital en Miami para negocios que quieren páginas web profesionales, SEO, campañas y sistemas de crecimiento.
            </p>
          </div>
          <div>
            <h3 className="font-display text-sm font-black uppercase tracking-[0.16em] text-white">Servicios</h3>
            <div className="mt-4 space-y-3 text-sm text-white/[0.58]">
              <p>Diseño web</p>
              <p>SEO local</p>
              <p>Automatización</p>
              <p>CRM</p>
            </div>
          </div>
          <div>
            <h3 className="font-display text-sm font-black uppercase tracking-[0.16em] text-white">Planes</h3>
            <div className="mt-4 space-y-3 text-sm text-white/[0.58]">
              <p>Web Express</p>
              <p>Plan PRO</p>
              <p>Sistema Premium</p>
            </div>
          </div>
          <div>
            <h3 className="font-display text-sm font-black uppercase tracking-[0.16em] text-white">Contacto</h3>
            <div className="mt-4 space-y-3 text-sm text-white/[0.58]">
              <p>Miami, FL</p>
              <a href={whatsappHref} className="block transition hover:text-amber">WhatsApp</a>
              <div className="flex gap-3 pt-2">
                {[Instagram, Facebook, Linkedin].map((Icon, index) => (
                  <a key={index} href={whatsappHref} className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-white/10 text-white/70 transition hover:border-amber hover:text-amber" aria-label="Red social">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/[0.45] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Grow Revenue Marketing Agency. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {navItems.slice(0, 4).map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-amber">{label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
