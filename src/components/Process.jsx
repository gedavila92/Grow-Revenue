import React from "react";
import { processSteps } from "../data/site.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Process() {
  return (
    <section id="proceso" className="bg-white py-24 text-obsidian">
      <div className="section-shell">
        <SectionHeader
          tone="light"
          centered
          eyebrow="Proceso"
          title="Un proceso simple para lanzar rápido y vender mejor"
          text="Menos vueltas, más claridad. Trabajamos con una ruta ordenada para convertir ideas en presencia digital profesional."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-5">
          {processSteps.map(([title, text], index) => (
            <article key={title} className="relative rounded-[10px] border border-zinc-200 bg-white p-5 shadow-[0_18px_55px_rgba(10,10,18,0.07)] transition duration-300 hover:-translate-y-1 hover:border-violet/25">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-[8px] bg-obsidian font-display text-lg font-black text-amber shadow-lg shadow-violet/15">
                {index + 1}
              </div>
              <h3 className="font-display text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
