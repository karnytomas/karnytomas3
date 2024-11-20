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
      // Odstranění duplikace a sjednocení definice writingMode a textOrientation
      writingMode: {
        'vertical-rl': 'vertical-rl',
        'horizontal-tb': 'horizontal-tb',
      },
      textOrientation: {
        'upright': 'upright',
        'mixed': 'mixed',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.writing-mode-vertical-rl': {
          'writing-mode': 'vertical-rl',
        },
        '.writing-mode-horizontal-tb': {
          'writing-mode': 'horizontal-tb',
        },
        '.text-orientation-upright': {
          'text-orientation': 'upright',
        },
        '.text-orientation-mixed': {
          'text-orientation': 'mixed',
        },
      }, ['responsive', 'hover']);
    }
  ],
}
