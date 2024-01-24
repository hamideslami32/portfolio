/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      maxWidth: {
        cs: '1200px'
      }
    },
  },
  safelist: [
    'border-gray-100',
    'border-gray-200',
    'border-gray-300'
  ],
  plugins: [],
}

