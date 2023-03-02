/** @type {import('tailwindcss').Config} */

const withOpacity =
  (variable) =>
  ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variable}),${opacityValue})`;
    }
    return `rgb(var(${variable}))`;
  };

module.exports = {
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
          DEFAULT: withOpacity("--color-accent"),
          inverted: withOpacity("--color-accent-inverted"),
        },
        primary: {
          DEFAULT: withOpacity("--color-bg"),
          inverted: withOpacity("--color-bg-inverted"),
        },
      },
      textColor: {
        skin: {
          base: withOpacity("--color-text"),
          inverted: withOpacity("--color-text-inverted"),
        },
      },
      backgroundColor: {
        skin: {
          base: withOpacity("--color-bg"),
          inverted: withOpacity("--color-bg-inverted"),
        },
      },
    },
  },
  plugins: [],
};
