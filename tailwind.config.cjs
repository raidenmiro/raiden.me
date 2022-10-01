/* @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        red: {
          500: '#e85e56',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
