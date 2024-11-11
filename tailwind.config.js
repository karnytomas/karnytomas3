/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Zde se skenují všechny soubory ve složce src
  ],
  theme: {
    extend: {
      colors: {
        'beige-200': '#c7b198',
        'beige-100': '#dfd3c3',
        'customBlue': '#E0E7FF',
      },
      animation: {
        'rotate-360': 'rotate-360 1.5s ease-in-out',
      },
    },
  },
  plugins: [],
}



