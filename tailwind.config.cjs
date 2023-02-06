/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "ss": ["Inter", "sans-serif"],
        "s": ["Lora", "serif"],
        "m": ["Inconsolata", "monospace"]
      },
      animation: {
        typing: 'typing 2s infinite steps(4)',
        scale: 'scale 2s infinite',
      },
      keyframes: {
        typing: {
          '0%': {
            width: '0',
          },
          '80%': {
            width: '4ch',
          },
          '100%': {
            width: '4ch',
          },
        },
      },
    },
  },
  plugins: [],
};
