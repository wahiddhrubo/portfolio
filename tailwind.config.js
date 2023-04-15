/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#08FDD8",

        bg: "#050810",
      },
      animation: {
        rubberBand: "rubberBand 600s ease-out",
        preloaderTextAnim: " preloaderTextAnim 12s linear infinite",
      },

      keyframes: {
        rubberBand: {
          "0%,100%": {
            transform: "scaleX(1), scaleY(1),",
          },
          "40%": {
            transform: "scaleX(1.12,) scaleY(0.75,)",
          },
          "55%": {
            transform: "scaleX(0.85,) scaleY(1),",
          },
          "65%": {
            transform: "scaleX(1.09,) scaleY(0.85,)",
          },
          "75%": {
            transform: "scaleX(0.9,)  scaleY(1),",
          },
          "90%": {
            transform: "scaleX(1.05,) scaleY(0.95,)",
          },
        },
        preloaderTextAnim: {
          "0% ": {
            transform: " translateY(0)",
          },

          "100%": {
            transform: " translateY(-1200%)",
          },
        },
      },
    },
  },
  plugins: [],
};
