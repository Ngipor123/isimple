/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,sgn,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F5A623',
          'orange-hover': '#FFB52B',
          dark: '#0F172A',
          light: '#F8FAFC',
          muted: '#475569',
        },
        graphite: {
          bg: '#1B1D1F',
          header: '#17191B',
          alt: '#222527',
          surface: '#292D30',
          hover: '#33383B',
        },
        text: {
          primary: '#F3F4F1',
          secondary: '#C5C9C7',
          muted: '#9EA5A2',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      typography: {},
    },
  },
  plugins: [],
}
