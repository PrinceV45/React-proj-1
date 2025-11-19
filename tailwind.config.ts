import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: "#002A42",
        paleAqua: "#DCEFEF",
        heroBg: "#F7FBFA",
      },
      fontFamily: {
        serifHead: ["Merriweather", "serif"],
      },
    },
  },
} satisfies Config;
