import React from "react";
import { services } from "../data/site.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-obsidian py-24">
      <div className="absolute right-0 top-16 h-80 w-80 rounded-full bg-violet/20 blur-3xl" />
      <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-amber/10 blur-3xl" />
      <div className="section-shell relative">
        <SectionHeader
          centered
          eyebrow="Servicios principales"
          title="Servicios diseñados para hacer crecer tu revenue"
          text="Un ecosistema digital para atraer atención, convertirla en oportunidades y darle seguimiento con la disciplina de una operación orientada a ventas."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text }) => (
            <article key={title} className="premium-card group p-6">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-[8px] bg-white text-violet shadow-lg shadow-violet/15 transition duration-300 group-hover:bg-amber group-hover:text-obsidian">
                <Icon size={23} />
              </div>
              <h3 className="font-display text-xl font-extrabold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/[0.62]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
