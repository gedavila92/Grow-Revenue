import React from "react";
import { Quote } from "lucide-react";
import { testimonials } from "../data/site.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Testimonials() {
  return (
    <section className="bg-ink py-24">
      <div className="section-shell">
        <SectionHeader
          centered
          eyebrow="Testimonios"
          title="Confianza construida con claridad, velocidad y estrategia"
          text="Experiencias representativas de lo que un negocio espera cuando invierte en una presencia digital más seria: claridad, velocidad y seguimiento."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map(({ quote, name, role }) => (
            <article key={name} className="premium-card p-7">
              <Quote className="text-amber" size={34} />
              <p className="mt-6 text-lg leading-8 text-white/[0.78]">“{quote}”</p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="font-display text-lg font-black">{name}</p>
                <p className="mt-1 text-sm font-semibold text-white/[0.48]">{role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
