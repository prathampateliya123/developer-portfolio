/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#ea1d0f',
          ink: '#c2160a',
        },
        rose: {
          DEFAULT: '#e97381',
        },
        night: {
          DEFAULT: '#0f1217',
          2: '#1c222c',
          3: '#2b3341',
        },
        amber: {
          DEFAULT: '#ffb547',
        },
        dim: '#8d96a6',
        gold: '#a86f00',
        bg: {
          DEFAULT: '#f4f1ea',
          2: '#eae6dd',
          3: '#ded8cc',
        },
        ink: {
          DEFAULT: '#16130f',
          2: '#4a443c',
          3: '#6f685d',
        },
        online: '#1f9e52',
      },
      fontFamily: {
        sans: ['var(--font-archivo)', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        mono: '0.16em',
      },
    },
  },
  plugins: [],
};

