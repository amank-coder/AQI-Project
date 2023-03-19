/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
          'boy-pattern':
          "url('https://i.pinimg.com/564x/ec/4d/a9/ec4da977637cc8f407dace4732aa5dc3.jpg')",
      }
    },
  },
  plugins: [],
}
