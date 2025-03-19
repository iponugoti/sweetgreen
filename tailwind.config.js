/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1c3b33", // Sweetgreen's signature green
        secondary: "#f2f1ed", // Light cream
        textDark: "#2E2E2E", // Dark gray
        lightGray: "#ecedeb", // Light gray
        accent: "#D8E3D5", // Soft green accent
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"], // SweetSans Alternative
        poppins: ["Poppins", "sans-serif"], // Body Text
        robotoFlex: ["Roboto Flex", "sans-serif"], // Clean, flexible font for body text
      },
      borderRadius: {
        xl: "16px",
      },
    },
  },
  plugins: [],
};
