/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ['"Inter"', "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Lobster"],
      body: ['"Inter"'],
    },
    extend: {
      colors: {
        background: "#13171B",
        primary: "#161C22",
        secondary: "#3A4652",
      },
    },
  },
  plugins: [],
};
