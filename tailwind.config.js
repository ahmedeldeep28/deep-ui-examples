const { themesPreset } = require("deep-ui-react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/deep-ui-react/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: ["class"],

  theme: {
    extend: {},
  },
  presets: [themesPreset],
};
