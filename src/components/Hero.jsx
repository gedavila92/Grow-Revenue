import React from "react";
import { ArrowRight, CheckCircle2, LineChart, MousePointerClick } from "lucide-react";
import { stats, whatsappHref } from "../data/site.js";

function MiniLanding() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="absolute -inset-8 rounded-full bg-violet/25 blur-3xl" />
      <div className="absolute -right-10 top-10 h-24 w-24 rounded-full border border-amber/25" />
      <div className="relative rounded-[12px] border border-white/[0.15] bg-zinc-950/[0.95] p-3 shadow-[0_34px_110px_rgba(139,53,255,0.26)]">
        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
          <span className="h-3 w-3 rounded-full bg-ember" />
          <span className="h-3 w-3 rounded-full bg-amber" />
          <span className="h-3 w-3 rounded-full bg-mint" />
          <span className="ml-3 h-5 flex-1 rounded bg-white/[0.06]" />
        </div>
        <div className="device-grid mt-4 overflow-hidden rounded-[10px] bg-radial-premium p-5">
          <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-3 h-3 w-24 rounded bg-amber" />
              <div className="space-y-2">
                <div className="h-7 rounded bg-white/[0.90]" />
                <div className="h-7 w-4/5 rounded bg-white/[0.75]" />
                <div className="h-7 w-3/5 rounded bg-white/[0.55]" />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-[10px] bg-white/[0.95] p-3 shadow-xl shadow-black/20">
                  <LineChart className="mb-7 text-violet" size={26} />
                  <div className="h-2 rounded bg-obsidian/[0.80]" />
                </div>
                <div className="rounded-[10px] border border-white/[0.15] bg-white/10 p-3 backdrop-blur">
                  <MousePointerClick className="mb-7 text-amber" size={26} />
                  <div className="h-2 rounded bg-white/[0.70]" />
                </div>
              </div>
            </div>
            <div className="rounded-[10px] border border-white/[0.15] bg-obsidian/[0.70] p-4 shadow-inner shadow-white/5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold text-white/70">Growth</span>
                <span className="rounded-full bg-mint/15 px-2 py-1 text-xs font-black text-mint">+38%</span>
              </div>
              <svg viewBox="0 0 220 130" className="h-36 w-full" role="img" aria-label="Grafico de crecimiento">
                <path d="M12 110 C48 95 53 72 86 80 C115 87 122 43 153 50 C181 57 189 25 210 18" fill="none" stroke="#f5b84b" strokeWidth="6" strokeLinecap="round" />
                <path d="M12 110 C48 95 53 72 86 80 C115 87 122 43 153 50 C181 57 189 25 210 18" fill="none" stroke="#b64cff" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div className="grid grid-cols-3 gap-2">
                {[70, 92, 55].map((height) => (
                  <span key={height} className="flex h-16 items-end rounded bg-white/[0.05] p-1">
                    <span className="w-full rounded bg-gradient-to-t from-violet to-amber" style={{ height: `${height}%` }} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-7 right-2 hidden w-32 rounded-[18px] border border-white/[0.15] bg-zinc-950 p-2 shadow-glow sm:block">
        <div className="rounded-[14px] bg-white p-2">
          <div className="mb-2 h-20 rounded bg-gradient-to-br from-violet to-amber" />
          <div className="h-2 rounded bg-obsidian/[0.70]" />
          <div className="mt-2 h-2 w-2/3 rounded bg-obsidian/30" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-obsidian pt-32 sm:pt-36 lg:pt-40">
      <div className="absolute inset-0 bg-radial-premium opacity-90" />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:80px_80px]" />
      <div className="absolute left-8 top-1/3 h-1 w-1 rounded-full bg-amber shadow-[90px_40px_0_rgba(245,184,75,0.65),220px_-80px_0_rgba(182,76,255,0.55),420px_70px_0_rgba(49,208,166,0.55),760px_-40px_0_rgba(255,255,255,0.45)]" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-electric/20 blur-3xl" />
      <div className="section-shell relative grid min-h-[780px] items-center gap-14 pb-24 lg:grid-cols-[1fr_0.9fr]">
        <div className="reveal">
          <div className="eyebrow">
            <CheckCircle2 size={16} />
            Websites • SEO • Ads • Automatización • Branding
          </div>
          <h1 className="mt-7 max-w-4xl font-display text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            Marketing digital que convierte visitas en clientes
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/[0.74] sm:text-xl">
            Diseñamos websites, campañas y sistemas de seguimiento para ayudar a negocios en Miami a generar leads de mayor calidad, más confianza y más revenue.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappHref} className="primary-btn">
              Quiero hacer crecer mi negocio
              <ArrowRight size={18} />
            </a>
            <a href="#planes" className="secondary-btn">
              Ver planes
            </a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {stats.map(([number, label]) => (
              <div key={number} className="rounded-[10px] border border-white/10 bg-white/[0.055] p-4 shadow-xl shadow-black/20 backdrop-blur">
                <div className="font-display text-2xl font-black text-white">{number}</div>
                <div className="mt-1 text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-white/[0.48]">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal lg:justify-self-end" style={{ animationDelay: "120ms" }}>
          <MiniLanding />
        </div>
      </div>
    </section>
  );
}
