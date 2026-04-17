import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://my-saas.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // In production, dynamically generate from your CMS/database:
    // const posts = await getPosts();
    // ...posts.map(post => ({
    //   url: `${baseUrl}/blog/${post.slug}`,
    //   lastModified: new Date(post.modified),
    //   changeFrequency: 'monthly' as const,
    //   priority: 0.6,
    // })),
  ];
}
