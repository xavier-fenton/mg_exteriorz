import { sanityIntegration } from '@sanity/astro'
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [
    tailwind(),
    sanityIntegration({
      projectId: '07dp7kpt',
      dataset: 'production',
      apiVersion: '2023-02-08',
      useCdn: false,
      // Access the Studio on your.url/admin
      studioBasePath: '/admin',
    }),
    react(),
  ],
})
