module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rhr: ['"SF Sports Night"'],
        'rhr-ns': ['"SF Sports Night NS"'],
      },
      colors: {
        red: { rhr: '#00D4FC' },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
