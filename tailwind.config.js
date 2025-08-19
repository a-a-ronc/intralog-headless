
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0B2D52',
        'brand-gray': '#2E2E2E',
        'light': '#F6F8FB',
        'accent': '#2AA3FF',
        'intralog-orange': '#FF6B35',
        'intralog-cyan': '#00D4FF',
        'tech-purple': '#8B5CF6',
      },
    },
  },
  plugins: [],
}
