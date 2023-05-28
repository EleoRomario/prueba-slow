/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          50: '#edf4ff',
          100: '#dfe9ff',
          200: '#c5d7ff',
          300: '#a2bcff',
          400: '#7d96fc',
          500: '#5e71f6',
          600: '#414aea',
          700: '#3338cf',
          800: '#2c31a7',
          900: '#2a3080',
          950: '#191b4d',
          DEFAULT: '#2A3080',
        },
        secundary: {
          50: '#fffceb',
          100: '#fef4c7',
          200: '#fee989',
          300: '#fdd94c',
          400: '#fcc623',
          500: '#f6a40a',
          600: '#e28105',
          700: '#b55708',
          800: '#93430d',
          900: '#79380e',
          950: '#451c03',
          DEFAULT: '#e28105',
        },
        text: {
          DEFAULT: '#747f93',
          title: '#171717',
          100: '#333333',
        },
        bg: {
          DEFAULT: '#f6f6f6',
        },
      },
    },
  },
  plugins: [],
  important: true,
}
