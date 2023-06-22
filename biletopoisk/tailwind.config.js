/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: { DEFAULT: "#000", faded: "rgba(0, 0, 0, 0.5)" },
      white: "#FFF",
      orange: {
        disabled: "#FFA375",
        DEFAULT: "#FF5500",
      },
      gray: {
        lighter: "#E1E3E6",
        light: "#999FA6",
        dark: "#333333",
        disabled: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
