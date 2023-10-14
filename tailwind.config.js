/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: "24px",
    },
    extend: {
      fontFamily: {
        figtree: ["Figtree"],
      },
      colors: {
        biru: "#77B0FF",
        dongker: "#3B8DFF",
        varian: "#959394",
      },
    },
  },
  plugins: [],
};
