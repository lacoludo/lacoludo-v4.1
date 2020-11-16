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
        primary: 'var(--primary)',
        danger: 'var(--danger)'
      },
      textColor: {
        primary: 'var(--primary)',
        danger: 'var(--danger)'
      }
    }
  }
}
