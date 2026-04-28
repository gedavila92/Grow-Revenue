import React from "react";

export default function SectionHeader({ eyebrow, title, text, centered = false, tone = "dark" }) {
  const isLight = tone === "light";

  return (
    <div className={centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className={`section-title mt-5 ${isLight ? "!text-obsidian" : ""}`}>{title}</h2>
      {text && (
        <p className={`section-copy mt-5 ${centered ? "mx-auto" : ""} ${isLight ? "!text-zinc-600" : ""}`}>
          {text}
        </p>
      )}
    </div>
  );
}
