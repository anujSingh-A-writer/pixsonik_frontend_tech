/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkbg: "#22232B",
        red: "#E51515",
        drakgray: "#383838",
        lightgray: "#B4B2B2",
        palegray: "#EEEEEE",
        ashgray: "#5A6069",
        customBlack: "#191919",
      },
    },
  },
  plugins: [],
};
