import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Comic Neue', 'sans-serif']
      }
    }
  }
} satisfies Config
