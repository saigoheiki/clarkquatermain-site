/** @type {import('tailwindcss').Config} */
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
  }
};