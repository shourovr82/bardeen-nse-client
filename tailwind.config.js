/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#7a84e2",
          "secondary": "#fc5d41",
          "accent": "#f9fcae",
          "neutral": "#151A23",
          "base-100": "#F1EEF2",
          "info": "#8CC5ED",
          "success": "#125E45",
          "warning": "#ECB936",
          "error": "#F8583F",
        },
      },
      {
        dark: {
          "primary": "#f916df",
          "secondary": "#c3ef5b",
          "accent": "#69f46d",
          "neutral": "#2C2839",
          "base-100": "#111827",
          "info": "#3292DC",
          "success": "#23B379",
          "warning": "#F3B73F",
          "error": "#E67080",
        },
      }

    ],
  },
  plugins: [require("daisyui")],
}
