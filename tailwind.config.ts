import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      tablet: "750px",
      laptop: "1200px",
    },
    extend: {
      fontSize:{
        "32":"32px",
        "38":"38px"
      },
      borderWidth:{
        "3":"3px"
      },
      colors: {
        primary: "#AD2430",
        secondary: "hsl(168 100% 34% / <alpha-value>)",
        "secondary-emphasis": "hsl(168 100% 29% / <alpha-value>)",
      },
      backgroundImage: {
        "hero-gradient-mobile":
          "linear-gradient(0deg, rgba(36, 20, 0, 1) 16%, rgba(21, 11, 0, 0.6) 40%, rgba(0, 0, 0, 0) 50%)",
        "hero-gradient-laptop":
          "linear-gradient(270deg, rgba(0, 0, 0, 0) 50%, rgba(21, 11, 0, 0.39) 60%, rgba(36, 20, 0, 1) 90%);",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        robotoCondensed: ["Roboto Condensed", "sans-serif"]
      },
    },
  },
} satisfies Config;
