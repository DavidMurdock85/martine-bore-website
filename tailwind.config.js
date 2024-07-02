/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    // breakpoints 
    screens: {
      // mobile
      'sm': '320px',
      // mobile - medium
      'sm-m': '375px',
      // mobile - large
      'sm-l': '425px',
      // tablet
      'md': '481px',
      // laptop
      'lg': '769px',
      // desktop
      'xl': '1025px',
      // larger device
      '2xl': '1201px',
    },
    fontFamily: {
      sans: ['GeistSans'],
    },
    fontSize: {
      tiny: '0.4rem',
      smlr: '0.6rem',
      sm: '0.8rem',
      md: '1rem',
      lg: '1.1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },

    container: {
      center: true,
    },
    extend: {
      colors: {

      },

    },
  },
  plugins: [require("daisyui")],
}

