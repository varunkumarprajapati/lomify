/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        signupBackground: 'url("/public/images/signup-doodle.webp")',
      },

      fontFamily: {
        poppins: "Poppins, serif",
        roboto: "Roboto, sans-serif",
      },

      keyframes: {
        loading: {
          "0%": { transform: "translateX(-200px)", opacity: 1 },
          "100%": { transform: "translateX(200px)", opacity: 0 },
        },
      },

      animation: {
        loading: "infinite loading 1.5s ease-in-out",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
