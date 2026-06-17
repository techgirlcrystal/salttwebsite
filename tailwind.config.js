/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // dark tokens kept for the footer
        ink: '#0B0B0B',
        charcoal: '#161616',
        // warm/light palette
        cream: '#FAF6EF',
        sand: '#ECE2D0',
        navy: '#15131F',
        saltred: '#D81E2C',
        saltgold: '#F5B71E',
      },
      fontFamily: {
        head: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -10px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
}
