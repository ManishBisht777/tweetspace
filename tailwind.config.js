/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const withOpacity =
  (variable) =>
  ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variable}),${opacityValue})`;
    }
    return `rgb(var(${variable}))`;
  };

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          base: withOpacity("--color-accent"),
          muted: withOpacity("--color-accent-muted"),
          inverted: withOpacity("--color-accent-inverted"),
        },
      },
      textColor: {
        skin: {
          base: withOpacity("--color-text-base"),
          inverted: withOpacity("--color-text-inverted"),
        },
      },
      backgroundColor: {
        skin: {
          base: withOpacity("--color-bg"),
          inverted: withOpacity("--color-bg-inverted"),
        },
      },
      fontFamily: {
        Montserrat: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
        Robotto: ["var(--font-robotto)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
