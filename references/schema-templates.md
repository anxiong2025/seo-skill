# Schema.org JSON-LD Templates

Ready-to-use JSON-LD templates. Copy, adapt to your framework, and populate with page data.

---

## WebSite (Homepage)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Site Name",
  "url": "https://example.com",
  "description": "Site description",
  "inLanguage": "en",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://example.com/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

---

## Organization (Every Page)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Company Name",
  "url": "https://example.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://example.com/logo.png",
    "width": 600,
    "height": 60
  },
  "sameAs": [
    "https://twitter.com/company",
    "https://github.com/company",
    "https://linkedin.com/company/company"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "contact@example.com",
    "contactType": "customer service"
  }
}
```

---

## Article (Blog Posts, Guides)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title (max 110 chars)",
  "description": "Article meta description",
  "image": "https://example.com/article-image.jpg",
  "inLanguage": "en",
  "url": "https://example.com/blog/article-slug/",
  "datePublished": "2026-01-15T08:00:00+08:00",
  "dateModified": "2026-03-10T12:00:00+08:00",
  "author": {
    "@type": "Person",
    "name": "Author Name",
    "url": "https://example.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Site Name",
    "url": "https://example.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://example.com/blog/article-slug/"
  }
}
```

---

## BreadcrumbList (Navigation)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://example.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://example.com/blog/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Article Title",
      "item": "https://example.com/blog/article-slug/"
    }
  ]
}
```

---

## Course (Online Courses)

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Course Title",
  "description": "Course description",
  "url": "https://example.com/courses/course-slug/",
  "provider": {
    "@type": "Organization",
    "name": "Provider Name",
    "url": "https://example.com"
  },
  "educationalLevel": "Advanced",
  "inLanguage": "zh-CN",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT10H"
  }
}
```

---

## LearningResource (Lessons, Tutorials)

```json
{
  "@context": "https://schema.org",
  "@type": "LearningResource",
  "name": "Lesson Title",
  "description": "Lesson description",
  "url": "https://example.com/courses/lesson-slug/",
  "learningResourceType": "Article",
  "educationalLevel": "Advanced",
  "inLanguage": "zh-CN",
  "isPartOf": {
    "@type": "Course",
    "name": "Parent Course Name",
    "url": "https://example.com/courses/"
  },
  "provider": {
    "@type": "Organization",
    "name": "Provider Name"
  }
}
```

---

## FAQPage (FAQ Sections)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Agent Skills?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Agent Skills are reusable instruction sets..."
      }
    },
    {
      "@type": "Question",
      "name": "How do I create a custom Skill?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Create a SKILL.md file with YAML frontmatter..."
      }
    }
  ]
}
```

---

## HowTo (Step-by-Step Guides)

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Set Up SEO for Astro",
  "description": "Complete guide to configuring SEO for an Astro website.",
  "totalTime": "PT30M",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Install sitemap plugin",
      "text": "Run npm install @astrojs/sitemap and add it to astro.config.mjs integrations.",
      "url": "https://example.com/guide#step-1"
    },
    {
      "@type": "HowToStep",
      "name": "Add meta tags to layout",
      "text": "Create a BaseLayout component with title, description, and OG tags.",
      "url": "https://example.com/guide#step-2"
    }
  ]
}
```

---

## Product (E-commerce)

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Product Name",
  "image": "https://example.com/product.jpg",
  "description": "Product description",
  "brand": {
    "@type": "Brand",
    "name": "Brand Name"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://example.com/product/",
    "priceCurrency": "USD",
    "price": "29.99",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Store Name"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "120"
  }
}
```

---

## LocalBusiness

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Business Name",
  "image": "https://example.com/storefront.jpg",
  "url": "https://example.com",
  "telephone": "+1-555-0100",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94105",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.7749,
    "longitude": -122.4194
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "17:00"
  }
}
```

---

## Event

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Event Name",
  "description": "Event description",
  "startDate": "2026-06-15T09:00:00+08:00",
  "endDate": "2026-06-15T17:00:00+08:00",
  "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "VirtualLocation",
    "url": "https://example.com/event-stream"
  },
  "organizer": {
    "@type": "Organization",
    "name": "Organizer Name",
    "url": "https://example.com"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://example.com/event/register"
  }
}
```
