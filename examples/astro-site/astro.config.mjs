import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://my-blog.com',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        if (item.url === 'https://my-blog.com/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        }
        return item;
      },
    }),
  ],
});
