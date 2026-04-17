import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://my-saas.com'),
  title: {
    default: 'My SaaS - Project Management for Teams',
    template: '%s | My SaaS',
  },
  description:
    'Ship projects faster with AI-powered task management. Plan, track, and deliver with your team.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'My SaaS',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'My SaaS - Project Management for Teams',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@my_saas',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
