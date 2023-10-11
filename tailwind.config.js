/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        128: "32rem",
        300: "55rem",
      },
      fontFamily: {
        barlow: ["Barlow"],
        fraunces: ["Fraunces"],
        gabarito: ["Gabarito"],
        youngSerif: ['Young Serif']
      },
      colors: {
        footer: "#90D4C5",
        footerText: "hsl(167, 40%, 24%)",
      },
    },
  },
  plugins: [],
};
