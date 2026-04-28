import React from "react";
import { authorityCards } from "../data/site.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Authority() {
  return (
    <section className="bg-white py-24 text-obsidian">
      <div className="section-shell">
        <SectionHeader
          tone="light"
          title="Tu negocio no necesita solo verse bien. Necesita vender."
          text="En Miami, la competencia no descansa. Si tus clientes no te encuentran, no confían en tu marca o no saben cómo contactarte rápido, estás perdiendo oportunidades todos los días."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {authorityCards.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-[10px] border border-zinc-200 bg-[linear-gradient(145deg,#ffffff,#f6f4fb)] p-7 shadow-[0_18px_55px_rgba(10,10,18,0.08)] transition duration-300 hover:-translate-y-1 hover:border-violet/35 hover:shadow-[0_24px_70px_rgba(139,53,255,0.16)]">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-[8px] bg-obsidian text-amber shadow-lg shadow-violet/15">
                <Icon size={24} />
              </div>
              <h3 className="font-display text-2xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-zinc-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
