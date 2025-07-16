/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#1C5189',
          500: '#3491D1',
        },
        red: {
          DEFAULT: '#E60914',
          100: '#FDF2FA',
        },
        green: '#1AC72E',
        yellow: '#D59643',
        gray: {
          DEFAULT: '#444444', 
          900: '#222222', 
          500: '#333333', 
        }
      },
      fontSize: {
        h1: ['40px'],
        h2: ['30px'],
        sub: ['18px'],
        lg: ['20px'],
        base: ['16px'],
        sm: ['14px'],
        xs: ['12px'],
        xxs: ['10px']
      },
      fontWeight: {
        light: 300,
        medium: 500,
        semibold: 600,
        bold: 700
      },
    }
  },
  plugins: []
};
