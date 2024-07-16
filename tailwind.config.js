/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'first-color': '#1b89c8',
        'second-color': '#c85a1b',
        'helper-color': '#01649d',
        'bg-color': '#f4f3ff',
      },
      fontSize: {
        'xl': '1.25rem', // Increase as needed
        '2xl': '1.5rem',  // Increase as needed
      },
    },
  },
  plugins: [],
}