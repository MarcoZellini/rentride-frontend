import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'primary': '#e4002b',
        'primary-dark': '#b8001f',
        'dark': '#111111',
        'surface': '#F4F4F4',
        'success': '#16a34a',
        'warning': '#92400e',
        'danger': '#991b1b',
        'muted': '#4b5563',
        'border': '#e5e7eb'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        brand: '2px'
      }
    }
  },
  safelist: [
    { pattern: /^(bg|text)-(yellow|green|red|blue|purple|gray)-(100|800|700)/, variants: [] }
  ]
} satisfies Config
