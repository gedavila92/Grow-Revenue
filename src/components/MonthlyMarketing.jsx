import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { monthlyMarketingPlans, whatsappHref } from "../data/site.js";
import SectionHeader from "./SectionHeader.jsx";

const monthlyThemes = {
  starter:
    "border-emerald-400/30 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.28),transparent_34%),linear-gradient(145deg,#06120f,#07100f_48%,#020504)]",
  growth:
    "scale-[1.01] border-cyan-300/45 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.36),transparent_38%),linear-gradient(145deg,#061827,#071329_48%,#020617)] shadow-[0_30px_100px_rgba(34,211,238,0.24)] lg:scale-[1.04]",
  elite:
    "border-amber/45 bg-[radial-gradient(circle_at_top_right,rgba(245,184,75,0.28),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,91,46,0.20),transparent_32%),linear-gradient(145deg,#050505,#120907_52%,#050508)]"
};

export default function MonthlyMarketing() {
  return (
    <section id="marketing-mensual" className="relative overflow-hidden bg-obsidian py-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_18%,rgba(139,53,255,0.08)_62%,transparent)]" />
      <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="section-shell relative">
        <SectionHeader
          centered
          eyebrow="Paquetes de Marketing Mensual"
          title="Planes diseñados para generar leads, convertir oportunidades y hacer crecer tu revenue mes a mes."
          text="Para negocios que ya no quieren depender solo de referencias: campañas, funnels, seguimiento y optimización trabajando juntos con una dirección clara."
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {monthlyMarketingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`group relative flex min-h-full overflow-hidden rounded-[10px] border p-7 text-white shadow-2xl shadow-black/35 transition duration-300 hover:-translate-y-2 ${monthlyThemes[plan.theme]}`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              {plan.badge && (
                <div className="absolute right-5 top-5 rounded-full border border-cyan-200/40 bg-cyan-200 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-slate-950">
                  {plan.badge}
                </div>
              )}
              <div className="flex w-full flex-col">
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-[10px] border border-white/15 bg-white/[0.08] text-amber backdrop-blur">
                  <plan.icon size={27} />
                </div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-white/[0.58]">{plan.name}</p>
                <div className="mt-4 flex flex-wrap items-end gap-2">
                  <span className="font-display text-4xl font-black sm:text-5xl">{plan.price}</span>
                  <span className="pb-2 text-sm font-extrabold text-white/[0.55]">{plan.cadence}</span>
                </div>
                <p className="mt-5 min-h-24 text-sm leading-7 text-white/[0.68]">{plan.description}</p>

                {plan.highlight && (
                  <p className="mt-5 rounded-[8px] border border-white/[0.12] bg-white/[0.07] px-4 py-3 text-sm font-black leading-6 text-white">
                    {plan.highlight}
                  </p>
                )}

                <ul className="mt-7 space-y-3">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm font-semibold text-white/[0.76]">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-amber" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {plan.ideal && (
                  <div className="mt-7">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-white/[0.45]">Ideal para</p>
                    <p className="mt-3 text-sm font-semibold leading-7 text-white/[0.62]">{plan.ideal.join(" • ")}</p>
                  </div>
                )}

                <a href={whatsappHref} className="primary-btn mt-8 w-full bg-white/95 hover:bg-amber">
                  {plan.cta}
                  <ArrowRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-[10px] border border-white/[0.12] bg-white/[0.045] shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="grid gap-8 p-7 lg:grid-cols-[0.9fr_1.1fr] lg:p-9">
            <div>
              <p className="eyebrow">Modelo flexible</p>
              <h3 className="mt-5 font-display text-3xl font-black leading-tight text-white">
                Modelo flexible para empezar más rápido
              </h3>
              <p className="mt-4 leading-8 text-white/[0.68]">
                Si estás comenzando o quieres validar resultados antes de escalar, podemos trabajar con un modelo híbrido: setup inicial + mensualidad reducida + pago por lead calificado o venta.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Setup", "$500 - $1,000"],
                ["Mensualidad base", "desde $1,000"],
                ["Variable", "desde $20 por lead calificado"]
              ].map(([label, value]) => (
                <div key={label} className="rounded-[8px] border border-white/10 bg-obsidian/[0.65] p-5">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-white/[0.45]">{label}</p>
                  <p className="mt-4 font-display text-2xl font-black text-white">{value}</p>
                </div>
              ))}
              <div className="sm:col-span-3">
                <p className="rounded-[8px] border border-amber/25 bg-amber/10 px-5 py-4 text-sm font-semibold leading-7 text-amber">
                  El modelo depende del tipo de negocio, presupuesto publicitario y calidad del lead requerido.
                </p>
                <a href={whatsappHref} className="secondary-btn mt-4">
                  Quiero una propuesta flexible
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
