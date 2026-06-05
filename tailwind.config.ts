import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#D0201A',
          blue: '#1C3FAA',
          navy: '#0F1F5C',
          dark: '#0A0A0B',
          body: '#3D3D3D',
          mist: '#F2F0EB',
        },
      },
      fontFamily: {
        display: ['Barlow Condensed', 'Georgia', 'serif'],
        sans: ['Barlow', 'system-ui', 'sans-serif'],
        italic: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
