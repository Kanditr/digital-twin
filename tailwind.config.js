module.exports = {
  purge: ['./pages/*.{js,ts,jsx,tsx}', './components/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        25: "0 0 calc(25% - 32px)",
        33: "0 0 33.33%",
        50: "0 0 50%",
      },
      maxWidth: {
        "1/2": "50%",
        "1/3": "calc(33.333% - 32px)",
        "1/4": "calc(25% - 32px)",
        "screen-xl": "1280px",
      },
      inset: {
        "1/2-72": "calc(50% - 72px)",
      },
    },
  },
  variants: {
    extend: {
      scale: ["group-hover"],
    },
  },
  plugins: [],
};
