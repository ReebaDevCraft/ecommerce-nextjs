/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfdf6',
          100: '#d0fbe6',
          200: '#a5f5d3',
          300: '#6aebbc',
          400: '#2fd89f',
          DEFAULT: '#0bbc87',
          600: '#019a70',
          700: '#017b5c',
          800: '#03624a',
          900: '#04503e',
          950: '#012d24',
        },
      },
    },
  },
  plugins: [],
};
