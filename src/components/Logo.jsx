import React from "react";
export default function Logo({ compact = false }) {
  return (
    <a href="#inicio" className="flex items-center gap-3" aria-label="Grow Revenue inicio">
      <img
        src="/grow-revenue-logo.jpg"
        alt="Logo de Grow Revenue Marketing Agency"
        className="h-11 w-11 rounded-[8px] object-cover ring-1 ring-white/[0.15]"
      />
      {!compact && (
        <span className="leading-tight">
          <span className="block font-display text-sm font-black uppercase tracking-[0.16em] text-white">
            Grow Revenue
          </span>
          <span className="block text-xs font-semibold text-white/[0.55]">Marketing Agency</span>
        </span>
      )}
    </a>
  );
}
