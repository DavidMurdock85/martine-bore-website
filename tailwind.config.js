/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {

    // screen breakpoints 
    screens: {
      // mobile
      'sm': { 'min': '320px', 'max': '480px' },
      // tablet
      'md': { 'min': '481px', 'max': '768px' },
      // laptop
      'lg': { 'min': '769px', 'max': '1024px' },
      // desktop
      'xl': { 'min': '1025px', 'max': '1200px' },
      // larger device
      '2xl': { 'min': '1201' },
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}

