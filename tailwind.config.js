/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.{vue,js,ts}',
    './app/pages/**/*.{vue,js,ts}',
    './app/app.vue',
    './app/error.vue',
  ],
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
        'card': '#18181B80',
        'muted-foreground': '#A1A1AA',
        'border': '#27272A',
        'foreground': '#E4E4E7',
      },
    },
  },
  plugins: []
}
