/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        lavender: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        }
      },
      backgroundImage: {
        'gradient-lavender': 'linear-gradient(135deg, #6d28d9 0%, #a78bfa 50%, #f5f3ff 100%)',
        'gradient-soft': 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)',
      },
      boxShadow: {
        'lavender': '0 10px 25px -5px rgba(109, 40, 217, 0.1), 0 10px 10px -5px rgba(109, 40, 217, 0.04)',
        'lavender-lg': '0 20px 25px -5px rgba(109, 40, 217, 0.1), 0 10px 10px -5px rgba(109, 40, 217, 0.04)',
        'glow': '0 0 20px rgba(167, 139, 250, 0.3)',
      }
    },
  },
  plugins: [],
}

