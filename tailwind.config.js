/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#FF6A00",
      white: "#ffffff",
      black: "#313133",
      grey: "#808080",
      bgColor: "#F1F1F2",
      bagde: "#FEF3E9",
    },
  },
  plugins: [],
};
