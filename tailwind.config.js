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
    },
  },
  plugins: [],
};
