/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-red': '#B91C1C', // Deeper red for a more serious, "blood" like tone
        'off-white': '#f5f5f4', // Warm stone/paper white
        'deep-charcoal': '#1c1917', // Warm very dark grey
      },
    },
  },
  plugins: [],
}

