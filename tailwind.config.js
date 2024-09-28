/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pinkish: "#e6b7c2",
        tealish: "#80aeba",
        yellowish: "#fbda8b",
      },
      backgroundImage: {
        "custom-svg": "url(/src/assets/logo.svg)",
        "custom-png": "url(/src/assets/logo.png)",
        "logo-jpg": "url(/src/assets/logoWeb.jpg)",
        "background-jpeg": "url(/src/assets/background.jpeg)",
        "fullBackground-jpg": "url(/src/assets/fullBackground.jpg)",
        "cloud-png": "url(/src/assets/cloud.png)",
      },
      fontFamily: {
        soulmate: ["soulmate", "cursive"],
      },
    },
  },
  plugins: [],
};
