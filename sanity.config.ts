// sanity.config.ts
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

export default defineConfig({
  name: 'default',
  title: 'Ocean of Tech',

  projectId: 'wl2jv5dqdrgca0rulv0hemlb',
  dataset: 'production',

  plugins: [deskTool()],
})
