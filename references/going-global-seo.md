# 出海 SEO — Chinese Companies Going Global

Site-type reference triggered when §1.1 detects 出海 signals (Chinese content
targeting Western markets, `zh` + `en/de/fr` locales, Chinese brand going
global). SKILL.md §3.36 gives the short summary; this file is the full playbook.

The playbook differs from domestic SEO: Google instead of Baidu, Western E-E-A-T
standards, brand re-introduction, and AI search (ChatGPT/Perplexity) in target
markets.

---

## 1. Target Market & Search Engine Strategy

- [ ] Primary market identified (US, UK, EU, SEA, MENA, LATAM) — determines language, currency, content priorities
- [ ] Google share in target market confirmed (>90% in most Western markets; Yandex in RU, Naver in KR, Yahoo in JP — different rules)
- [ ] AI search considered: ChatGPT/Perplexity/Claude have significant share for B2B and tech in US — GEO (§3.19) weighted heavily
- [ ] Baidu-specific tactics removed from target-market site (no `baidu-site-verification`, no `百度统计`, no Baidu-preferred image dimensions)

## 2. Domain & URL Strategy

- [ ] Domain strategy chosen with tradeoffs documented:
    - **`.com` + subfolder `/en/`, `/de/`**: centralizes authority, lowest cost, best for most
    - **`.com` + ccTLD (`.de`, `.co.uk`)**: strongest local signal, highest cost, best for local-business markets
    - **`.com` + subdomain (`us.brand.com`)**: middle ground, Google treats as separate site
- [ ] Avoid `.cn` TLD for target-market site — Western users associate it with "Chinese site" and trust drops
- [ ] Avoid brand name containing Chinese characters or pinyin hard to pronounce — rebrand if needed
- [ ] Domain age/history checked — don't buy a domain with prior spam penalty (archive.org + Wayback + Ahrefs backlink history)
- [ ] Hosting in target region (or global CDN with edge in target region) — latency is a CWV signal

## 3. Hreflang for zh → en/multi Transition

- [ ] If existing `zh` site: hreflang bidirectional `zh-CN` ↔ `en-US` + `x-default` (point to English for non-Chinese visitors)
- [ ] Decide whether to expose the Chinese site to Western Google at all — if it outranks English due to domain age, hreflang + canonical are critical
- [ ] Language switcher uses language names ("English", "中文") — not flags; language ≠ country
- [ ] GSC International Targeting set per subfolder/subdomain (if using subfolder strategy)

## 4. Brand Internationalization

- [ ] English brand name defined + trademarked in target markets (USPTO/EUIPO checks before launch)
- [ ] `Organization` schema with `sameAs` linking to: English LinkedIn, English X/Twitter, Crunchbase, Wikipedia (if applicable), press mentions
- [ ] Founder/exec `Person` schema if they have English-language presence (LinkedIn, speaking events, interviews)
- [ ] About page tells company story for Western audience (why founded, who leads, where based — transparency wins trust)
- [ ] Avoid "We are the leading…" superlative copy — Western SEO trusts specifics; use quantified claims + citations

## 5. Western E-E-A-T Adaptation

- [ ] **Experience**: First-hand usage, case studies, real customer names (not "Company A", "客户甲") — privacy-anonymized OK, fake-anonymized hurts
- [ ] **Expertise**: Author bylines with real names, photos, LinkedIn links — ghost-written-by-agency content is detected by Google's HCU
- [ ] **Authoritativeness**: Press mentions (TechCrunch, Forbes, Bloomberg earned via PR, not buy-links), certifications relevant to target market (SOC 2, GDPR badge)
- [ ] **Trust**: Physical address in target market (or HQ publicly visible), phone with country code, GDPR/CCPA-compliant privacy policy, clear refund/return policy
- [ ] Contact page shows real human faces / team
- [ ] Remove Chinese-market trust signals (ICP备案号, 百度信誉, 淘宝/天猫 badges) from target-market site

## 6. Content Localization Quality (Not Just Translation)

- [ ] Content is **transcreated**, not machine-translated — even human-translated-from-Chinese often reads awkwardly; rewrite natively when possible
- [ ] Cultural references adapted (双11 → Black Friday, 长辈 → aunt/uncle, etc.)
- [ ] Examples use Western names, companies, currencies, units (USD/EUR, imperial where applicable)
- [ ] Date formats: MM/DD/YYYY for US, DD/MM/YYYY for UK/EU; ISO `<time datetime="">` for schema
- [ ] Avoid direct translation of Chinese marketing idioms ("一站式解决方案" → "one-stop solution" is OK but overused; vary)
- [ ] Tone calibrated: Western B2B is skeptical, data-driven, less hype; Western B2C allows more personality

## 7. AI Search Visibility in Western Markets

- [ ] ChatGPT / Perplexity / Claude / Google AI Overview tested with relevant queries — is brand being cited?
- [ ] llms.txt prioritizes English (or target language) content — AI crawlers prefer clean, structured English docs
- [ ] Brand presence in AI training-relevant sources: Wikipedia (if notable), G2/Capterra reviews, Product Hunt, HackerNews, Reddit, YouTube English content
- [ ] Western review sites targeted: G2, Capterra, TrustRadius (B2B SaaS), Trustpilot (consumer) — these feed both Google and LLMs

## 8. Chinese Origin — Strategic Disclosure

- [ ] Decide disclosure strategy: some markets (US gov, enterprise security) require origin transparency; consumer markets less so
- [ ] If transparent: "Founded in Shenzhen, with offices in [target market]" is fine and often helps
- [ ] If headquartered abroad: ensure corporate structure reflects reality — Google and users see through shell entities via LinkedIn, press, Crunchbase
- [ ] Data residency clearly stated (where user data is stored — critical for EU GDPR and US enterprise)

## 9. Technical Pitfalls Specific to 出海

- [ ] Chinese CDN / hosting (Aliyun CN, Tencent Cloud CN) NOT used for target-market site — slow outside China + may be blocked; use Cloudflare, AWS, Vercel, Fastly
- [ ] No font CDNs slow/blocked outside China (no `fonts.useso.com`, alibaba fonts CDN — use Google Fonts or self-host)
- [ ] No tracking/analytics scripts from Chinese vendors on target-market site (Western privacy concerns; GDPR requires consent)
- [ ] Images use Western-appropriate formats (WebP/AVIF) hosted on global CDN
- [ ] No hardcoded Chinese phone / WeChat / QQ contact — use market-local support channels

## 10. Localization Beyond English

- [ ] If expanding to non-English markets (DE, FR, JP, KR, ES): native speakers review content, not just translators
- [ ] Each language has its own keyword research — direct translation of Chinese keywords misses local search behavior
- [ ] Currency, payment methods relevant to target market (Alipay/WeChat Pay NOT required; PayPal, Stripe, SEPA, iDEAL)
- [ ] Support hours overlap with target market OR 24/7 documented
- [ ] Meta `og:locale` and `og:locale:alternate` set correctly per page

## 11. Western Link Building Channels

- [ ] Guest posting on Western industry blogs (quality > quantity — one Forbes > 50 spam directories)
- [ ] HARO / Qwoted / Connectively responses for earned media
- [ ] Open source / free tools as linkable assets (see `references/saas-seo.md` §8)
- [ ] Data studies / original research — publishable assets that Western press and AI training data will cite
- [ ] Avoid Chinese-style "友情链接" (friend links) sections — Google treats as manipulative
