import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        void: '#050505',
        ash: '#ece8e1'
      },
      fontFamily: {
        serifDisplay: ['"Cormorant Garamond"', 'Georgia', 'serif']
      },
      letterSpacing: {
        breath: '0.12em'
      },
      transitionTimingFunction: {
        ethereal: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    }
  },
  plugins: []
};

export default config;
