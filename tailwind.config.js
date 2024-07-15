/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        'IConic': '"FC Iconic"',
      }
    },
    colors: {
      'light-grey': 'rgb(var(--color-detail))',
      'highllght-blue': 'rgb(var(--color-highllght-blue))',
      'background-main': 'rgb(var(--color-background))',
      'background-dark': 'rgb(var(--color-background-dark))',
      'grey-darkmode': 'rgb(var(--color-text-white))',
      'header-blue': 'rgb(var(--color-header))',
      'project-head': 'rgb(var(--project-header))',
      'project-type': 'rgb(var(--project-type))',
      'white': '#FFFFFF',
      'asset-background': 'rgb(var(--assets-background))',
      'asset-border': 'rgb(var(--assets-border))',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1600px'
    },
    maxWidth: {
      '8xk': '1600px',
    }
  },
  plugins: [],
}

