/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#1C5189",
          500: "#3491D1",
          100: "#cae1f1",
        },
        red: {
          DEFAULT: "#E60914",
          100: "#FDF2FA",
        },
        green: "#1AC72E",
        yellow: {
          DEFAULT: "#D59643",
          500: "#ff9c00",
        },
        gray: {
          DEFAULT: "#444444",
          900: "#222222",
          500: "#333333",
        },
      },
       spacing: {
        section: "2rem",      
        "section-md": "4rem",    
        "section-lg": "5rem",    
        "section-2xl": "12rem",    
      }
    },
  },
  plugins: [],
};
