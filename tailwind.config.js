/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        arabella: {
          teal: "#0D7A7A",
          orange: "#D47A35",
          white: "#FFFFFF",
          ink: "#10243F",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(16, 36, 63, 0.13)",
      },
    },
  },
  plugins: [],
};
