/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#2272FF",
        secondary: "#00ABE4",
        tertiary: "#2272FF",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #00FFFF",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
      "hero-pattern": "url('/src/assets/herobg.png')",
      "logo": "url('/src/assets/logo.png')",
        backgroundColor: ["hover", "focus"],
      },
    },
  },
  plugins: [],
};
