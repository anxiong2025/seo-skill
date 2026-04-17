import type { Metadata } from 'next';

interface BlogPost {
  title: string;
  description: string;
  slug: string;
  date: string;
  modified: string;
  author: string;
}

async function getPost(slug: string): Promise<BlogPost> {
  // Replace with your data source (CMS, MDX, database, etc.)
  return {
    title: 'How to Improve Your SEO',
    description:
      'A practical guide to improving your website SEO with structured data, meta tags, and performance optimization.',
    slug,
    date: '2026-03-15',
    modified: '2026-04-10',
    author: 'Your Name',
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.modified,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.modified,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'My SaaS',
      url: 'https://my-saas.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <h1>{post.title}</h1>
        <time dateTime={post.date}>{post.date}</time>
        <p>{post.description}</p>
      </article>
    </>
  );
}
