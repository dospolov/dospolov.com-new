import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), sitemap()],
  trailingSlash: 'never',
  sitemap: true,
  site: 'https://dospolov.com'
})
