import { sanityIntegration } from '@sanity/astro'
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [
    tailwind(),
    react(),
    sanityIntegration({
      projectId: '07dp7kpt',
      dataset: 'production',
      // Set useCdn to false if you're building statically.
      useCdn: false,
      // Access the Studio on your.url/admin
      studioBasePath: '/admin',
    }),
  ],
})
