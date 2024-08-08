/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      barlow: "'Barlow', sans-serif",
      "barlow-condensed": "'Barlow Condensed', sans-serif",
      bellefair: "'Bellefair', serif",
    },
    extend: {
      colors: {
        white: "#fff",
      },
      backdropBlur: {
        "4xl": "80px",
      },
    },
    screens: {
      tablet: { max: "768px" },
      mobile: { max: "375px" },
    },
    backgroundImage: {
      "destination-mobile":
        "url('/src/assets/destination/background-destination-mobile.jpg')",
      "destination-tablet":
        "url('/src/assets/destination/background-destination-tablet.jpg')",
      "destination-desktop":
        "url('/src/assets/destination/background-destination-desktop.jpg')",
    },
  },
  plugins: [],
};
