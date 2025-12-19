/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          background: "#0a0a0a",
          surface: "#111111",
          primary: "#ffffff",
          muted: "#a1a1aa"
        }
      }
    },
    plugins: []
  };
  