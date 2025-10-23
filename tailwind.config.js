/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)', 'ui-sans-serif', 'system-ui'],
        secondary: ['var(--font-secondary)', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: 'var(--color-primary)',
        'gradient-1': 'var(--color-gradient-1)',
        'gradient-2': 'var(--color-gradient-2)',
        'gradient-3': 'var(--color-gradient-3)',
        'gradient-4': 'var(--color-gradient-4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  // Purge unused CSS in production
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './utils/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    options: {
      safelist: [
        'dark',
        'theme-compiled',
        'theme-bejamas',
        'prose',
        'prose-invert',
      ],
    },
  },
};