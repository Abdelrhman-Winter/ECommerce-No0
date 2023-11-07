/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        400: "400px",
      },
      maxWidth: {
        7: "400px",
      },
      colors: {
        gold: "#ffc000",
      },
      height: {
        80: "80px",
      },
    },
  },
  plugins: [],
};
