import mdx from '@astrojs/mdx'
import solid from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

export const site = (username) => `https://${username}.github.io/raiden.me/`

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  site: site('raidenmiro'),
  markdown: {
    shikiConfig: {
      theme: 'rose-pine-moon',
      wrap: true,
    },
  },
  integrations: [mdx(), solid(), tailwind()],
})
