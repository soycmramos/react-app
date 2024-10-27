/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif']
    },
    extend: {
      colors: {
        light: {
          'body': '#FFFFFF',
          // 'title': '#404145',
          'title': '#62646A',
          'text': '#62646A',
        },
        dark: {
          'body': '#171717',
          'title': '#F2F2F2',
          'text': '#F0F0F0',
        }
      }
    },
  },
  plugins: [],
}