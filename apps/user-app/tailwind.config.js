/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
     "../../packages/ui/src/**/*.{ts,tsx}" 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  
}