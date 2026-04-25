# Schema.org JSON-LD — Template Index

Ready-to-use JSON-LD templates, split by entity type. Pick the file that matches
what you're marking up; copy the template; adapt to your framework.

| File | Covers |
|------|--------|
| `schema-organization.md` | `Organization`, `WebSite`, `LocalBusiness`, `Event`, `Course`, `LearningResource` — site-wide and brand schema |
| `schema-article.md` | `Article`, `NewsArticle`, `TechArticle`, `BlogPosting`, `BreadcrumbList` — for content pages |
| `schema-product.md` | `Product`, `ProductGroup` + variants, `AggregateRating`, `Review` — for e-commerce |
| `schema-faq-howto.md` | `FAQPage`, `HowTo`, `Recipe`, `QAPage` — for structured Q&A and step-by-step content |

---

## Which schema does this page need?

| Page type | Primary schema | Also include |
|-----------|---------------|--------------|
| Homepage | `WebSite` + `Organization` | — |
| Blog post / article | `Article` (or subtype) | `BreadcrumbList`, `Person` (author) |
| Product page | `Product` | `BreadcrumbList`, `Review` / `AggregateRating` when present |
| FAQ page or page with FAQ section | `FAQPage` | Embed inside any other schema |
| Tutorial / how-to guide | `HowTo` | `Article` + `BreadcrumbList` |
| Recipe | `Recipe` | `AggregateRating` when present |
| Support Q&A page (one question, community answers) | `QAPage` | `BreadcrumbList` |
| Physical business location | `LocalBusiness` (or specific subtype) | — |
| Event | `Event` | `Organization` (organizer) |
| Online course | `Course` + `CourseInstance` | `LearningResource` per lesson |

---

## Validation tools

- **Schema.org validator** (`validator.schema.org`) — syntax and spec compliance
- **Google Rich Results Test** (`search.google.com/test/rich-results`) — Google-specific rich result eligibility
- **Google Search Console → Enhancements** — production monitoring per rich result type
