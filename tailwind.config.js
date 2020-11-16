module.exports = {
  purge: [
    './contact/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './projects/**/*.{ts,tsx}',
    './shared/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00d8ff',
        danger: '#ff2700'
      }
    }
  }
}
