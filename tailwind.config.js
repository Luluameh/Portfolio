/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      placeholderColor: {
        white: "#ffffff",
      },
    },
  },
  variants: {
    extend: {
      placeholderColor: ["responsive", "dark", "focus", "hover", "group-hover"],
    },
  },
  plugins: [],
};

