/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        124: "20rem",
        126: "22rem",
        128: "32rem",
        150: "36rem",
        300: "55rem",
        122: "40rem",
      },
      width: {
        124: "20rem",
        128: "32rem",
        126: "22rem",
        150: "36rem",
        300: "55rem",
        122: "40rem",
      },
      fontFamily: {
        barlow: ["Barlow"],
        fraunces: ["Fraunces"],
        gabarito: ["Gabarito"],
        youngSerif: ["Young Serif"],
      },
      colors: {
        footer: "#90D4C5",
        footerText: "hsl(167, 40%, 24%)",
        thirdText: "hsl(198, 62%, 26%)",
      },
      letterSpacing: {
        widestt: ".25em",
      },
      lineHeight: {
        high: "3.5rem",
      },
      // padding: {
      //   14.5: ''
      // }
    },
  },
  plugins: [],
};
