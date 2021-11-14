module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'sans': ['Poppins']
    },
    extend: {
      flex: {
        25: "0 0 calc(25% - 32px)",
        33: "0 0 33.33%",
        "33-32": "0 0 calc(33.333% - 32px)",
        48: "0 0 48px",
        50: "0 0 50%",
        "50-32": "0 0 calc(50% - 32px)",
        256: "0 0 calc(100% -256px)"
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
      spacing: {
        '84': '23rem',
      },
      width: {
        "33-20": "calc(33.333% - 20px)",
        "33-32": "calc(33.333% - 32px)",
        "50-32": "calc(50% - 32px)",
        '24/25': "calc(100% - 16px)",
        '256': "calc(100% - 256px)"
      },
      height: {
        '24/25': "calc(100% - 16px)"
      }
    },
  },
  variants: {
    extend: {
      scale: ["group-hover"],
      borderWidth: ["hover", "focus"],
      textDecoration: ['focus-visible'],
      zIndex: ['hover', 'active'],
      outline: ['focus'],
      fill: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
