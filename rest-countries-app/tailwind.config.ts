import type {Config} from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/pages/**/*.{html,js}',
    './src/components/**/*.{html,js}',

  ],
  theme: {
    darkMode: 'class',
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        border: "var(--border)",
      }
    },
  },
  plugins: [],
} satisfies Config