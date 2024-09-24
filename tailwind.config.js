// tailwind.config.js

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        statusBar: {
          light: '#A3633A', // Light mode status bar color
          dark: '#D4A36F',  // Dark mode status bar color
        },
        primary: {
          light: '#D4A36F',  // Warm gold for light mode
          DEFAULT: '#A3633A', // Copper brown
          dark: '#1F1B16',    // Deep brown for dark mode
        },
        background: {
          light: '#FFFFFF',   // White for light mode
          dark: '#1F1B16',    // Dark mode background
        },
        text: {
          light: '#333333',   // Dark gray for text in light mode
          dark: '#FFFFFF',    // White for text in dark mode
        },
        highlight: {
          light: '#F5E2C6',   // Light tan for highlights in light mode
          dark: '#4A3C2F',    // Muted brown for highlights in dark mode
        },
      },
      fontFamily: {
        sreg: ['Satoshi', 'sans-serif'],
        smed: ['SatoshiMedium', 'sans-serif'],
        slgt: ['SatoshiLight', 'sans-serif'],
        sitl: ['SatoshiItalic', 'sans-serif'],
        sbld: ['SatoshiBold', 'sans-serif'],
        sblk: ['SatoshiBlack', 'sans-serif'],
        alegreya: ['Alegreya', 'serif'],
        alegreyaItalic: ['AlegreyaItalic', 'serif'],
        alegreyaMedium: ['AlegreyaMedium', 'serif'],
        alegreyaLight: ['AlegreyaLight', 'serif'],
        alegreyaBold: ['AlegreyaBold', 'serif'],
      },
    },
  },

  plugins: [],
}