/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "pop-from-bottom": {
          "0%": {
            opacity: 0,
            transform: "translateY(400px) scale(.75)",
          },
          "75%": {
            opacity: 1,
            transform: "translateY(-16px) scale(1)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        loginFadeIn: "fadeIn .5s forwards",
        popFromBottom: "pop-from-bottom .4s forwards ease-in-out",
      },
    },
  },
  plugins: [],
};
