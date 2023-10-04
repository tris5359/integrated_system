const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./view/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        danger: colors.rose,
        primary: colors.blue,
        success: colors.green,
        warning: colors.yellow,
      },
    },
    backgroundPosition: {
      "pos-0": "0% 0%",
      "pos-100": "100% 100%",
    },
  },
  variants: {
    gradientColorStops: ["active", "hover"],
    backgroundImage: ["hover", "focus"],
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
