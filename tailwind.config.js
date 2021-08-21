module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#05944F",
        accent: "#1E54B7",
        body: "#F6F6F6",
        header: "#1F1F1F",
        text: "#545454",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
