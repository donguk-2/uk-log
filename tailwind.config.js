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
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
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
        "go-to-bottom": {
          "0%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(400px) scale(.75)",
          },
        },
      },
      animation: {
        loginFadeIn: "fadeIn .4s forwards",
        popFromBottom: "pop-from-bottom .4s forwards ease-in-out",
        loginFadeOut: "fadeOut .4s forwards",
        goToBottom: "go-to-bottom .4s forwards ease-in-out",
      },
      colors: {
        mainColor: "#0d1117",
      },
      backgroundColor: {
        modalBgColor: "rgba(249, 249, 249, 0.85)",
      },
      boxShadow: {
        modalBoxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 12px 0px",
      },
    },
  },
  plugins: [],
};
