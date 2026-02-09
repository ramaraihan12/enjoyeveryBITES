/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: '#fdf8e1',
        purple: '#54388f',
        'light-orange': '#ffce88',
        pink: '#fd6eac',
        'bright-orange': '#f7b12b',
        red: '#d52441',
      },
      screens: {
        'sm': '375px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}