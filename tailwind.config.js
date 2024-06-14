/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00AFFF',
        secondary: '#374151',
        paragraph: '#9CA3AF',
        main: '#FFFFFF',
        bg: '#111827',
      },
      fontFamily: {
        'Tiny5': 'Tiny5, sans-serif',
        'Rowdies': 'Rowdies, sans-serif',
      }
    },
  },
  plugins: [],
}

