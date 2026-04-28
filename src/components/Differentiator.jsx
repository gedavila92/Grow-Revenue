import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { comparison } from "../data/site.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Differentiator() {
  return (
    <section className="relative overflow-hidden bg-obsidian py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,53,255,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(245,184,75,0.10),transparent_34%)]" />
      <div className="section-shell">
        <SectionHeader
          centered
          eyebrow="Diferenciador"
          title="Somos más que una agencia de diseño"
          text="La mayoría de agencias entregan páginas bonitas. En Grow Revenue construimos sistemas digitales pensados para generar oportunidades reales de negocio."
        />
        <div className="relative mt-14 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[10px] border border-white/10 bg-white/[0.035] p-8 shadow-2xl shadow-black/25">
            <h3 className="font-display text-2xl font-black text-white/[0.78]">Agencia común</h3>
            <ul className="mt-7 space-y-4">
              {comparison.common.map((item) => (
                <li key={item} className="flex gap-3 text-white/[0.55]">
                  <XCircle className="mt-0.5 shrink-0 text-ember" size={20} />
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="relative overflow-hidden rounded-[10px] border border-amber/40 bg-radial-premium p-8 shadow-premium">
            <div className="absolute inset-0 bg-obsidian/72" />
            <div className="relative">
              <h3 className="font-display text-2xl font-black text-white">Grow Revenue</h3>
              <ul className="mt-7 space-y-4">
                {comparison.grow.map((item) => (
                  <li key={item} className="flex gap-3 text-white/[0.82]">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-amber" size={20} />
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
