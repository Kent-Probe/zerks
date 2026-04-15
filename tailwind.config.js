/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        minecraft: {
          dark: '#000000',
          red: '#dc143c',
          orange: '#ff8800',
          yellow: '#ffdd00',
        },
      },
      fontFamily: {
        minecraft: ['Pixelify Sans', 'sans-serif'],
        main: ['Inter', 'sans-serif'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        minecraft: '0 10px 30px rgba(220, 38, 38, 0.2)',
        'minecraft-lg': '0 20px 50px rgba(220, 38, 38, 0.3)',
      },
    },
  },
  plugins: [],
};
