/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#161210',
        'ink-2': '#221c19',
        paper: '#e7dcc3',
        'paper-dim': '#cfc3a8',
        stamp: '#c8372d',
        'stamp-hover': '#da4237',
        text: '#efe9dd',
        'text-dim': '#a89f8f',
        rule: '#3a322c',
      },
    },
  },
  plugins: [],
}

