/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#f8fafc"
      },
      boxShadow: {
        glass: "0 10px 40px rgba(2,6,23,0.06)"
      },
      backdropBlur: {
        xs: "2px"
      }
    },
  },
  plugins: [],
};
