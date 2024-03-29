/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffb35c',
        accentRed: '#f14545',
        accentTurqoise: '#00c2d9',
        accentViolet: '#823dd1',
        pink: { 100: '#fbe7ea', 400: '#e88491' },
        amber: { 700: '#975d33' },
        gray: {
          800: '#333333',
        },
      },
      fontFamily: {
        sans: ['poppins', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        headline: [
          'poppins',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],

        logo: [
          'ProtestStrike',
          'poppins',
          'Roboto',
          '"Helvetica Neue"',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [
    ({ addComponents, theme }) => {
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.5'),
          paddingRight: theme('spacing.5'),
          '@screen lg': {
            maxWidth: '1200px',
            paddingLeft: theme('spacing.24'),
            paddingRight: theme('spacing.24'),
          },
        },
      })
    },
  ],
}
