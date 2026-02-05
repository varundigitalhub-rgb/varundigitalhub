import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      colors: {
        primary: '#2563eb',
      },
    },
  },
  plugins: [],
};

export default config;
