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

      colors: {
        button: {
          primary: {
            DEFAULT: "#4F46E5",
            hover: "#4338CA",
            disabled: "#A5B4FC",
          },
          secondary: {
            DEFAULT: "#10B981",
            hover: "#059669",
          },
          success: {
            DEFAULT: "#22C55E",
            hover: "#16A34A",
          },
          danger: {
            DEFAULT: "#EF4444",
            hover: "#DC2626",
          },
          warning: {
            DEFAULT: "#F59E0B",
            hover: "#D97706",
          },
          info: {
            DEFAULT: "#3B82F6",
            hover: "#2563EB",
          },
          cancel: {
            DEFAULT: "#4B5563",
            hover: "#374151",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
