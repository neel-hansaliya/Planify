/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// next.config.js
module.exports = {
  images: {
    domains: ['www.holidify.com'], // Add any domains you are using here
  },
}
