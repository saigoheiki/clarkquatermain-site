/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{njk,md}",     // Eleventy content in /src
    "./_includes/**/*.{njk,md}",// layouts & partials
    "./*.njk",                 // root-level templates (index.njk, etc.)
    "./books/**/*.{njk,md}"    // ⬅ NEW: scan Markdown book pages
  ],
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