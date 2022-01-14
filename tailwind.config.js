module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        small: 91,
        medium: 140,
        large: 165,
      },
      height: {
        small: 28,
        medium: 40,
        large: 52,
      },
      // fontSize: {
      //   small: ,
      //   medium: 40,
      //   large: 52,
      // },
      colors: {
        "red-primary": "#FF0054",
        "red-hover": "#E6003B",
        "red-focus": "#CC0021",
        "blue-primary": "#0A344F",
        "blue-hover": "#001B36",
        "blue-focus": "#0A344F",
      },
      outline: {
        "red-primary": "2px solid #FF0054",
        "red-hover": "2px solid #E6003B",
        "red-focus": "2px solid #CC0021",
        "blue-primary": "2px solid #0A344F",
        "blue-hover": "2px solid #001B36",
        "blue-focus": "2px solid #0A344F",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
