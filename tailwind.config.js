/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#050508",
        ink: "#0b0b12",
        violet: "#8b35ff",
        electric: "#b64cff",
        amber: "#f5b84b",
        gold: "#dba84c",
        ember: "#ff5b2e",
        mint: "#31d0a6"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        premium: "0 24px 80px rgba(139, 53, 255, 0.22)",
        glow: "0 0 50px rgba(182, 76, 255, 0.35)"
      },
      backgroundImage: {
        "radial-premium": "radial-gradient(circle at top left, rgba(182, 76, 255, 0.34), transparent 36%), radial-gradient(circle at bottom right, rgba(245, 184, 75, 0.18), transparent 34%)"
      }
    }
  },
  plugins: []
};
