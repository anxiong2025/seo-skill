# Audit Modes & User-Side Prep

Claude cannot log into the user's Google/Bing accounts. The richest SEO signals
live behind those accounts. **All services listed below are free** — "登录"
means account authorization, not payment. Set these up once; reuse forever.

---

## 1. Audit Modes by Login State

| Mode | User Setup Required | Coverage | Use When |
|------|---------------------|----------|----------|
| **Offline mode** | Nothing | ~60-70% of audit (code layer + public data) | First pass, user opts out, or cannot log in |
| **Standard mode** | GSC + GA4 (free) | ~90% of audit | Recommended — most users |
| **Full mode** | + Bing WMT + Keyword Planner + MCP | ~100% of audit | Serious SEO owners |

**Mode selection flow (ask the user ONCE at the start of a full audit):**

```
1. Detect login signals:
   • Grep public/ for google-site-verification meta or googleXXXX.html → GSC likely set up
   • Grep layouts for gtag / G-XXXXX / GoogleAnalytics → GA4 likely set up
   • Check ~/.claude/mcp.json or project mcp config for gsc / webmaster MCP servers
2. Ask the user:
   "I can run in Offline mode (no login needed) or Standard/Full mode
   (you paste GSC exports). Which do you prefer? [offline / standard / full]"
3. Announce selected mode + what will be included / skipped
```

**Explicit rules:**

- If user has GSC authorized AND shares CSV/screenshot → **run GSC-dependent modules (do NOT skip)**
- If user opts out or has no GSC access → **skip §3.21, §3.22 manual-action check, and §3.23 crawl-stats parts** (run the rest of those modules that work on code-layer signals)
- If user explicitly says "just use what you have" → run Offline mode silently, no repeated prompts
- If user later provides GSC data mid-audit → re-enable GSC-dependent modules without restarting the whole audit
- Never assume or fabricate GSC data when absent — if a module requires it and no data is provided, mark the checks as "Unverifiable" in the report (not "Fail")

Announce the detected mode at the start of every audit so the user knows
what's being skipped and why.

---

## 2. One-Time User Setup (All Free)

| Service | Why | Setup Time | Needed By |
|---------|-----|------------|-----------|
| **Google Search Console** | Real query/CTR/position data, manual action status, indexation | 5-10 min | §3.21, §3.22, §3.23, §3.24, §3.26 |
| **Google Analytics 4** | Traffic, user behavior, conversions | 10 min | §3.0, §3.21 |
| **Bing Webmaster Tools** | Bing/DuckDuckGo/ChatGPT-search coverage | 5 min | §3.21 (optional) |
| **Google Keyword Planner** | Keyword search volume (requires free Ads account — no ad spend needed) | 10 min | §3.9 (optional) |

**GSC setup path (the most important one):**
1. User visits `search.google.com/search-console`
2. Adds property → verifies ownership (Claude can generate the verification file or DNS TXT record)
3. Waits 2-3 days for initial data population

---

## 3. No-Login Tools (Claude Can Use These Without User Accounts)

| Tool | URL | Use For |
|------|-----|---------|
| PageSpeed Insights | pagespeed.web.dev | Real CWV data (CrUX) + lab diagnosis |
| Google Trends | trends.google.com | Search trend + seasonality + region |
| AnswerThePublic | answerthepublic.com (3 free/day) | Google autocomplete + PAA graph |
| Schema.org Validator | validator.schema.org | JSON-LD syntax/spec validation |
| Rich Results Test | search.google.com/test/rich-results | Google-specific rich result eligibility |
| Mobile-Friendly Test | search.google.com/test/mobile-friendly | Mobile rendering check |
| Bing Keyword Research | webmaster.bing.com/keyword-research | Keyword volume (no Ads account needed) |

---

## 4. How the User Hands GSC Data to Claude

Claude CANNOT access GSC directly. User must export and paste. Preferred
order by fidelity:

1. **CSV export** (best): GSC → Performance → Export → CSV → paste file or
   drag into conversation
2. **Screenshot** (acceptable): capture the relevant chart/table; Claude reads
   with vision
3. **MCP server** (automated, if available): install an MCP server that wraps
   the GSC API (e.g., community `mcp-gsc`); user authorizes once, then Claude
   queries via MCP in future sessions. Check `~/.claude/mcp.json` or project
   MCP config.

---

## 5. Privacy & Security Notes

- Never paste service account keys / OAuth tokens into the conversation —
  paste CSV *data*, not credentials
- GSC data contains query terms users searched — treat as PII-adjacent
- When Claude generates verification files (HTML/DNS TXT), user places them
  manually; Claude never pushes to production without explicit approval
