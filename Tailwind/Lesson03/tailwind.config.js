/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      screens: {
        // making a custom class that makes the screen the full viewport so the user 
        // cannot see the sections underneath
        'widescreen': {'raw': '(min-aspect-ratio: 3/2)'},
        'tallscreen': {'raw': '(min-aspect-ratio: 1/2)'},
      }
    },
  },
  plugins: [],
}