import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { seoBlocks, whatsappHref } from "../data/site.js";
import SectionHeader from "./SectionHeader.jsx";

export default function SEOSection() {
  return (
    <section id="seo" className="relative overflow-hidden bg-ink py-24">
      <div className="absolute inset-0 bg-radial-premium opacity-70" />
      <div className="section-shell relative">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="SEO en Miami"
              title="SEO para que tus clientes te encuentren cuando están listos para comprar"
              text="El SEO no es solo aparecer en Google. Es posicionar tu negocio frente a personas que ya están buscando tus servicios."
            />
            <a href={whatsappHref} className="primary-btn mt-8">
              Quiero mejorar mi SEO
              <ArrowRight size={18} />
            </a>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {seoBlocks.map(({ icon: Icon, title, points }) => (
              <article key={title} className="premium-card p-6">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-[8px] bg-amber text-obsidian">
                  <Icon size={23} />
                </div>
                <h3 className="font-display text-2xl font-black">{title}</h3>
                <ul className="mt-5 space-y-3">
                  {points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm font-semibold text-white/[0.68]">
                      <Check className="mt-0.5 shrink-0 text-mint" size={17} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
