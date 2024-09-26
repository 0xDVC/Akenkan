// tailwind.config.js

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      // colors: {
      //   statusBar: {
      //     light: '#A3633A', // Light mode status bar color
      //     dark: '#D4A36F',  // Dark mode status bar color
      //   },
      //   primary: {
      //     light: '#FACDA6',  // Warm gold for light mode
      //     DEFAULT: '#A3633A', // Copper brown
      //     dark: '#1F1B16',    // Deep brown for dark mode
      //   },
      //   background: {
      //     light: '#FFFFFF',   // White for light mode
      //     dark: '#1F1B16',    // Dark mode background
      //   },
      //   text: {
      //     light: '#333333',   // Dark gray for text in light mode
      //     dark: '#FFFFFF',    // White for text in dark mode
      //   },
      //   highlight: {
      //     light: '#F5E2C6',   // Light tan for highlights in light mode
      //     dark: '#4A3C2F',    // Muted brown for highlights in dark mode
      //   },
      // },
      colors: {
        statusBar: {
          light: '#D4A36F', // Light mode status bar color
          dark: '#B45413',  // Dark mode status bar color (unchanged)
        },
        primary: {
          light: '#B45413',  // Warm gold for light mode (unchanged)
          DEFAULT: '#B45413', // Copper brown (unchanged)
          dark: '#43302A',    // Deep brown for dark mode, reflecting logo tones
        },
        background: {
          light: '#FFFFFF',   // White for light mode (unchanged)
          dark: '#432F29',    // Dark mode background updated to a darker brown
        },
        text: {
          light: '#333333',   // Dark gray for text in light mode (unchanged)
          dark: '#FFFFFF',    // White for text in dark mode (unchanged)
        },
        highlight: {
          light: '#F5E2C6',   // Light tan for highlights in light mode (unchanged)
          dark: '#4A3C2F',    // Muted brown for highlights in dark mode (unchanged)
        },
      },
      fontFamily: {
        sreg: ['Satoshi', 'sans-serif'],
        smed: ['SatoshiMedium', 'sans-serif'],
        slgt: ['SatoshiLight', 'sans-serif'],
        sitl: ['SatoshiItalic', 'sans-serif'],
        sbld: ['SatoshiBold', 'sans-serif'],
        sblk: ['SatoshiBlack', 'sans-serif'],
        areg: ['Alegreya', 'serif'],
        alrit: ['AlegreyaItalic', 'serif'],
        amed: ['AlegreyaMedium', 'serif'],
        algtt: ['AlegreyaLight', 'serif'],
        abld: ['AlegreyaBold', 'serif'],
      },
    },
  },

  plugins: [],
}