import React from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingPlans, whatsappHref } from "../data/site.js";
import SectionHeader from "./SectionHeader.jsx";

const themeClasses = {
  basic: "border-violet/25 bg-[radial-gradient(circle_at_top_left,rgba(139,53,255,0.13),transparent_34%),linear-gradient(145deg,#ffffff,#f7f3ff)] text-obsidian",
  pro: "border-mint/40 bg-[radial-gradient(circle_at_top,rgba(49,208,166,0.22),transparent_34%),linear-gradient(145deg,#061827,#0a1f3a_45%,#05261d)] text-white shadow-glow",
  premium: "border-amber/45 bg-[radial-gradient(circle_at_top_right,rgba(245,184,75,0.24),transparent_34%),linear-gradient(145deg,#030303,#120907_50%,#1b0b05)] text-white"
};

export default function Pricing() {
  return (
    <section id="planes" className="bg-[linear-gradient(180deg,#ffffff,#f7f6fb)] py-24 text-obsidian">
      <div className="section-shell">
        <SectionHeader
          tone="light"
          centered
          eyebrow="Planes de websites"
          title="Elige el plan ideal para llevar tu negocio online"
          text="Opciones claras para salir al mercado con velocidad, autoridad y una base digital lista para crecer."
        />
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article key={plan.name} className={`relative flex overflow-hidden rounded-[10px] border p-7 shadow-[0_24px_75px_rgba(10,10,18,0.13)] transition duration-300 hover:-translate-y-2 ${themeClasses[plan.theme]}`}>
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              <div className="flex w-full flex-col">
                <div className="mb-5 min-h-9">
                  {plan.featured && (
                    <span className="inline-flex rounded-full bg-mint px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-obsidian shadow-[0_10px_28px_rgba(49,208,166,0.28)]">
                      Más popular
                    </span>
                  )}
                  {plan.badge && (
                    <span className="inline-flex rounded-full bg-amber px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-obsidian shadow-[0_10px_28px_rgba(245,184,75,0.24)]">
                      {plan.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm font-black uppercase tracking-[0.16em] opacity-70">{plan.name}</p>
                <h3 className="mt-2 font-display text-2xl font-black">{plan.label}</h3>
                <div className="mt-6 flex items-end gap-1">
                  <span className="font-display text-4xl font-black">{plan.price}</span>
                  {plan.cadence && <span className="pb-1 text-sm font-bold opacity-[0.65]">{plan.cadence}</span>}
                </div>
                <p className="mt-5 min-h-24 leading-7 opacity-[0.72]">{plan.description}</p>
                <div className="mt-7">
                  <p className="text-xs font-black uppercase tracking-[0.16em] opacity-[0.65]">Incluye</p>
                  <ul className="mt-4 space-y-3">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex gap-3 text-sm font-semibold">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-amber" size={18} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-7">
                  <p className="text-xs font-black uppercase tracking-[0.16em] opacity-[0.65]">Ideal para</p>
                  <p className="mt-3 text-sm font-semibold leading-7 opacity-[0.72]">{plan.ideal.join(" • ")}</p>
                </div>
                <a href={whatsappHref} className={plan.theme === "basic" ? "primary-btn mt-8" : "secondary-btn mt-8 border-white/25 bg-white text-obsidian hover:bg-amber hover:text-obsidian"}>
                  {plan.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
