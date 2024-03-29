/** @type {import('tailwindcss').Config} */
export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        bgcolour: "#c0c0c0",
        darkgreen: "#003312",
        navbutt: "#555",
        navbuttpressed: "#555",
      },
      fontFamily: {
        main: ["Barlow Condensed"],
      },
      backgroundImage: {
        "github-button": "url('/assets/img/github-mark-white.png')",
      },
    },
  },
  plugins: [],
};
