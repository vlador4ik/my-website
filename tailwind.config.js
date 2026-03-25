/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: [
      // all directories and extensions will correspond to your Nuxt config
      "{srcDir}/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "{srcDir}/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "{srcDir}/pages/**/*.{vue,js,jsx,mjs,ts,tsx}"
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        custom: ['Inter']
      },
      colors: {
      'primary': '#6366F1',
      'secondary': '#8B5CF6',
      'white': '#E4E4E7',
      'accent': '#EC4899',
      'grey': '#A1A1AA',
      'black': '#0A0A0F',
      'card': '#18181B80'
    },
    },
  },
  plugins: []
}

