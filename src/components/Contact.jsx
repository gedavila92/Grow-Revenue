import React from "react";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { whatsappHref } from "../data/site.js";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  business: "",
  service: "",
  message: ""
};

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("");

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.service) {
      setStatus("Completa nombre, email, teléfono y servicio de interés.");
      return;
    }
    setStatus("Gracias. Tu solicitud está lista para ser enviada al equipo de Grow Revenue.");
    setForm(emptyForm);
  };

  return (
    <section id="contacto" className="relative overflow-hidden bg-obsidian py-24">
      <div className="absolute inset-0 bg-radial-premium opacity-80" />
      <div className="section-shell relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="eyebrow">Contacto</div>
            <h2 className="mt-5 font-display text-4xl font-black leading-tight text-white sm:text-5xl">
              Tu negocio puede verse mejor, vender mejor y crecer más rápido.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/[0.72]">
              Da el siguiente paso con Grow Revenue. Diseñamos la presencia digital que tu negocio necesita para competir en Miami.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappHref} className="primary-btn">
                Agenda una consulta
                <ArrowRight size={18} />
              </a>
              <a href={whatsappHref} className="secondary-btn">
                Escríbenos por WhatsApp
              </a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
                <Phone className="text-amber" size={23} />
                <p className="mt-4 font-bold">Respuesta rápida</p>
                <p className="mt-2 text-sm leading-6 text-white/[0.58]">Ideal para cotizaciones, planes y consultas iniciales.</p>
              </div>
              <div className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
                <Mail className="text-amber" size={23} />
                <p className="mt-4 font-bold">Estrategia clara</p>
                <p className="mt-2 text-sm leading-6 text-white/[0.58]">Te orientamos según tu industria, presupuesto y etapa.</p>
              </div>
            </div>
          </div>
          <form onSubmit={submitForm} className="rounded-[10px] border border-white/[0.12] bg-white/[0.065] p-6 shadow-premium backdrop-blur-xl sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nombre" name="name" value={form.name} onChange={updateField} />
              <Field label="Email" name="email" type="email" value={form.email} onChange={updateField} />
              <Field label="Teléfono" name="phone" value={form.phone} onChange={updateField} />
              <Field label="Tipo de negocio" name="business" value={form.business} onChange={updateField} />
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-bold text-white/[0.72]">Servicio de interés</span>
                <select
                  name="service"
                  value={form.service}
                  onChange={updateField}
                  className="h-12 w-full rounded-[8px] border border-white/10 bg-obsidian/[0.80] px-4 text-sm font-semibold text-white outline-none transition focus:border-amber"
                >
                  <option value="">Selecciona un servicio</option>
                  <option>Diseño web</option>
                  <option>SEO local</option>
                  <option>Campañas digitales</option>
                  <option>Automatización / CRM</option>
                  <option>Sistema digital completo</option>
                </select>
              </label>
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-bold text-white/[0.72]">Mensaje</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  rows="5"
                  className="w-full resize-none rounded-[8px] border border-white/10 bg-obsidian/[0.80] px-4 py-3 text-sm font-semibold text-white outline-none transition focus:border-amber"
                  placeholder="Cuéntanos qué quieres mejorar o lanzar."
                />
              </label>
            </div>
            {status && <p className="mt-4 rounded-[8px] border border-amber/30 bg-amber/10 px-4 py-3 text-sm font-bold text-amber">{status}</p>}
            <button type="submit" className="primary-btn mt-6 w-full">
              Solicitar información
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", value, onChange }) {
  return (
    <label>
      <span className="mb-2 block text-sm font-bold text-white/[0.72]">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="h-12 w-full rounded-[8px] border border-white/10 bg-obsidian/[0.80] px-4 text-sm font-semibold text-white outline-none transition focus:border-amber"
      />
    </label>
  );
}
