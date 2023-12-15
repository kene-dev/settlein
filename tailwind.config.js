/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#235784",
        secondary: "#F7AA00",
        tertiary: "#EEF6F7CC",
      },

      fontFamily: {
        sansita: ["Sansita", "sans - serif"],
      },
    },
  },
  plugins: [],
};
