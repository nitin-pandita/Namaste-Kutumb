/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        logoColor: "#FF7426",
        bgColor: "#F9B378",
        btnColor: "#AF250A",
        textColor: "#440020",
        inputColor: "#D9D9D9",
      },
      fontSize: {
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["18px", "26px"],
        xl: ["20px", "28px"],
        "2xl": ["24px", "32px"],
        "3xl": ["30px", "36px"],
        "4xl": ["36px", "42px"],
        "5xl": ["48px", "56px"],
        "6xl": ["64px", "72px"],
      },
      screens: {
        sm: "640px",
        semi: "max-width: 900px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        semiHalf: { max: "825px" },
        mobileSemi: { min: "376px" },
        tablet: { max: "803px" },
        mobile: { max: "376px" },
        mobileSemiHalf: { max: "668px" },

        semiHalfContent: { max: "661px" },
      },
    },
  },
  plugins: [],
};
