import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My SaaS - Project Management for Teams',
  description:
    'Ship projects faster with AI-powered task management. Plan, track, and deliver with your team.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <main>
      <h1>Ship projects faster with AI</h1>
      <p>Plan, track, and deliver with your team.</p>
    </main>
  );
}
