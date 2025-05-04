/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{njk,md,html,js}",       // Eleventy source templates
    "./_includes/**/*.{njk,md,html,js}", // layouts & partials
    "./*.{njk,html}",                    // root‑level pages
    "./books/**/*.{njk,md}",             // Markdown book pages
    "./_site/**/*.html"                  // generated output (for dev JIT)
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)"
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans:  ["Inter", "sans-serif"]
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"]           // load only the dark palette
  }
};