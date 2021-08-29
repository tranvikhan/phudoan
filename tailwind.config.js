module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#05944F",
        accent: "#1E54B7",
        body: "#ffffff",
        header: "#1F1F1F",
        text: "#545454",
      },
      fontSize: {
        xxs: "0.6875rem",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
