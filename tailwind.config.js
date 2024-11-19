/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  darkMode: 'class', // Menambahkan opsi dark mode
  theme: {
    extend: {
      colors: {
        primary: '#82142a', // Warna merah khusus
        secondary: '#a60f3f', // Warna pink khusus
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

