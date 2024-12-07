import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#000000',
        black: '#222222',
        gray: '#383838',
        'light-gray': '#555555',
        white: '#ffffff',
        main: '#FF7C78',
        'main-gradation-start': '#FFAEAC',
        'main-gradation-end': '#FF7C78',
      },
      fontSize: {
        small: '20px',
        medium: '24px',
        xlarge: '64px',
      },
    },
  },
  plugins: [],
} satisfies Config;
