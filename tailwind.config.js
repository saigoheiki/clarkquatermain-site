/ ** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{njk,md}", // everything under src/ with .njk or .md
    "./*.njk"              // root-level templates
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)"
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: [
    require("daisyui")
  ],

  // DaisyUI config – keep the CSS lean by loading only the themes you need
  daisyui: {
    themes: ["light", "dark"] // set to `true` for all 35 built‑ins
  }
};