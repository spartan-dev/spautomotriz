module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charlestonGreen: "#141E23",
        yellowGreen: "#8CC63F",
        xanadu: "#6E8282",
        cultured: "#EEF0F2",
        maximumRed: "#DD1C1A",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        monts: ["Montserrat", "medium"],
      },
      letterSpacing: {
        basic: "0.3em",
      },
    },
  },
  variants: {},
  plugins: [],
}
