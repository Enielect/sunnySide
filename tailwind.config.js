/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        128: "32rem",
        300: "55rem",
      },
    },
    fontFamily: {
      barlow: ["Barlow"],
      fraunces: ["Fraunces"],
    },
    colors: {
      footer: "hsl(168, 34%, 41%)",
      footerText: "hsl(167, 40%, 24%)",
    },
  },
  plugins: [],
};
