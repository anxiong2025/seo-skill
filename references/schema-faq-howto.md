# FAQ & HowTo Schema — JSON-LD Templates

For FAQ sections, step-by-step guides, recipes, tutorials.

**Note:** As of 2023, Google limits FAQ rich results to authoritative government
and health sites — but the schema still helps AI engines (Perplexity, ChatGPT,
Claude) extract and cite content correctly.

---

## FAQPage

Every Q&A visible on the page must appear in the schema; schema questions
without a visible counterpart violate guidelines.

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
        "text": "Agent Skills are reusable instruction sets that Claude loads on demand to specialize its behavior for a task."
      }
    },
    {
      "@type": "Question",
      "name": "How do I create a custom Skill?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Create a SKILL.md file with YAML frontmatter at the top, then place it under .claude/skills/<name>/ in your repo."
      }
    }
  ]
}
```

---

## HowTo

Use for step-by-step guides. Each step should also appear in the visible page
content as an `<ol>` or numbered headings.

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Set Up SEO for Astro",
  "description": "Complete guide to configuring SEO for an Astro website.",
  "totalTime": "PT30M",
  "tool": [{ "@type": "HowToTool", "name": "Astro 5+" }],
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

### HowTo variants

- `Recipe` — for cooking; includes `cookTime`, `prepTime`, `recipeIngredient`, `recipeInstructions`, `nutrition`
- `HowToSection` — groups related steps within a long HowTo (use when a guide has phases)

---

## QAPage (Single Q&A — for support / Q&A sites)

Different from `FAQPage`. Use `QAPage` when the entire page is one question
with multiple community answers (Stack Overflow style). Use `FAQPage` when
multiple FAQ items share one page.

```json
{
  "@context": "https://schema.org",
  "@type": "QAPage",
  "mainEntity": {
    "@type": "Question",
    "name": "How do I configure hreflang for a multi-region site?",
    "text": "Full question text with detail...",
    "answerCount": 3,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Accepted answer content...",
      "upvoteCount": 42,
      "author": { "@type": "Person", "name": "Answer Author" }
    },
    "suggestedAnswer": [
      {
        "@type": "Answer",
        "text": "Alternative answer...",
        "upvoteCount": 8
      }
    ]
  }
}
```

---

## Common mistakes

- FAQ schema questions that don't appear visibly on the page → manual action risk
- HowTo with only 1-2 steps — Google treats as non-substantive
- Marketing/promotional content in `Answer.text` — violates guidelines
- HTML tags in `text` fields — must be plain text (escape or strip)
- HowTo missing `totalTime` — loses eligibility for some rich result variants
