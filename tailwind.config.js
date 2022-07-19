/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a855f7",
          secondary: "#ec4899",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          "base-200": "#000000",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
