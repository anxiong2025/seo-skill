# Organization, WebSite & LocalBusiness Schema — JSON-LD Templates

Site-wide schema that anchors your brand in Google Knowledge Graph and AI
knowledge systems. Put on the homepage (and optionally every page).

---

## Organization

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
    "https://x.com/company",
    "https://github.com/company",
    "https://linkedin.com/company/company",
    "https://www.wikidata.org/wiki/Q00000"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "contact@example.com",
    "contactType": "customer service"
  }
}
```

**`sameAs` matters for AI.** Each entry is a "verification anchor" that lets
LLMs confidently identify your entity. Include: verified X/Twitter, LinkedIn
company page, GitHub (if relevant), Crunchbase, Wikidata Q-ID (if applicable),
Wikipedia (if notable).

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

The `SearchAction` enables the sitelinks search box in Google SERPs (if your
brand SERP qualifies). Remove if you don't have site search.

---

## LocalBusiness

Use for physical business locations. The most common subtypes are
`Restaurant`, `Store`, `AutoRepair`, `Dentist`, `HairSalon`, etc. — prefer
the specific subtype when one fits.

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
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "14:00"
    }
  ]
}
```

### Multi-location

For chains, use one `LocalBusiness` node per location, each with its own URL
(`/locations/san-francisco/`). Don't cram multiple addresses into one node.

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

### Event attendance modes

- `OnlineEventAttendanceMode` — virtual only
- `OfflineEventAttendanceMode` — in-person only
- `MixedEventAttendanceMode` — hybrid

### Event status (important for post-pandemic consistency)

- `EventScheduled`
- `EventPostponed`
- `EventRescheduled` (requires `previousStartDate`)
- `EventCancelled`
- `EventMovedOnline` (requires previous `Place` location)

---

## Course & LearningResource

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

## Common mistakes

- `logo` without `width`/`height` — required for some rich results
- `sameAs` to unverified/fake profiles — erodes trust; LLMs cross-check
- `address` as a string, not a `PostalAddress` object — weakens Local Pack eligibility
- `openingHoursSpecification` as free text — must be structured with ISO day names
- `LocalBusiness` on a multi-location chain's homepage — one node per physical location instead
