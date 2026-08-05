/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD11E",
        "light-yellow": "#FFF9E5",
        secondary: {
          100: "#2D3E50",
          200: "#FBE9A0", 
          300: "#FFF5CC",
          400: "#2F2500",
          500: "#2B2E00",
          600: "#4A4A4A"
        }
      },
      fontFamily: {
        // Fed by next/font in _app.tsx; falls back to the system stack.
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif']
      }
    },
  },
  plugins: [],
}