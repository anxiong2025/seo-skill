<h1 align="center">SEO Experto.skill</h1>

<p align="center">
  <strong>¿Por qué Google no indexa tu sitio ni ChatGPT lo cita?</strong><br>
  Un comando <code>/seo</code>. Claude lee tu código y corrige los problemas directamente.<br>
  <em>Los buenos productos no deberían perder por detalles técnicos.</em>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
  <img src="https://img.shields.io/badge/Claude_Code-Skill-blueviolet" alt="Claude Code Skill">
  <img src="https://img.shields.io/badge/37_Módulos-700+_Verificaciones-blue.svg" alt="700+ Checks">
  <img src="https://img.shields.io/badge/Puntuación-0--100_A--F-orange.svg" alt="Scoring System">
  <img src="https://img.shields.io/badge/Para-Blog_·_SaaS_·_Ecommerce_·_Docs_·_Global-green.svg" alt="Use Cases">
</p>

<p align="center">
  <a href="README.md">🇨🇳 中文</a> ·
  <a href="README.en.md">🇺🇸 English</a> ·
  <a href="README.es.md">🇪🇸 Español</a> ·
  <a href="README.ar.md">🇸🇦 العربية</a>
</p>

<br>

<p align="center">
  <a href="#casos-de-uso">Para quién es</a> ·
  <a href="#demo">Ver en acción</a> ·
  <a href="#instalación">Instalar</a> ·
  <a href="#uso">Uso</a> ·
  <a href="#qué-se-verifica">Qué verifica</a> ·
  <a href="#frameworks-soportados">Frameworks</a>
</p>

<br>

---

## Casos de Uso

| Escenario | Tu problema | Lo que hace el Skill |
|:------|:---------|:---------------|
| 📝 **Blog / Dev independiente** | Buen contenido, pero Google no lo indexa y ChatGPT nunca lo cita | Escaneo técnico SEO completo + optimización GEO + auditoría de frescura |
| 💼 **SaaS / Sitio de producto** | Los competidores dominan `/vs/xxx`, tus páginas de features no rankean | Páginas de comparación + integraciones + Pricing SSR + activos de links |
| 🛒 **Ecommerce / Tienda** | Páginas de variantes duplicadas, rechazos en Merchant Center, sin tráfico estacional | Product Schema + deduplicación de variantes + Shopping Feed + calendario de promociones |
| 📖 **Docs de desarrollador** | API docs son SPA — Googlebot no ve nada, sin llms.txt | Estrategia de versiones + SEO de fragmentos de código + llms.txt |
| 📍 **Negocio local** | No aparece en Google Maps, información NAP dispersa | LocalBusiness Schema + consistencia NAP + páginas multi-ubicación |
| 🌏 **Global / Cross-border** | Entrando a nuevos mercados sin rankings, E-E-A-T débil, sin visibilidad en IA | Stack SEO cross-border + estrategia de dominio + hreflang + GEO multi-mercado |
| 🎬 **Contenido / Video / Media** | Sitios de video, noticias o cursos necesitan Schema especializado y señales de frescura | Video SEO + NewsArticle + Course Schema + estrategia de actualización |

**Si tu sitio corre en código, este Skill puede auditarlo.**

<br>

---

## Demo

```
Usuario ❯ /seo

Claude  ❯ Detectado: proyecto Astro + sitio SaaS (/features/, /pricing/, /integrations/)
          Aplicando configuración de pesos SaaS, iniciando auditoría...

          ## Reporte de Auditoría SEO — yoursaas.com
          ## Puntuación: 62/100 (D) — Tipo de sitio: SaaS / Producto

          ### 🔴 Crítico (3)
          1. Página Pricing completamente renderizada con JS — Googlebot ve "Loading..."
             → Cambiar a SSR o generateStaticParams
          2. Sin páginas /vs/competidor/ — competidores dominan todos los SERPs de comparación
             → Crear las 5 principales páginas de comparación con competidores
          3. llms.txt faltante — los crawlers de IA no pueden entender la estructura del producto
             → Generar public/llms.txt

          ### 🟠 Alto (5)
          1. Sin directorio /integrations/ — perdiendo tráfico long-tail de "producto + herramienta"
          2. Sin herramientas gratuitas como activos de links — canal más fuerte de SaaS sin usar
          3. 12 páginas de features comparten el mismo og:image — generar OG único por página
          4. Changelog lastmod es 2025-08 — señal de frescura decayendo
          5. Títulos de 5 páginas de features no contienen palabras clave objetivo

          ¿Qué problemas corregir? Escribe "corregir todo" o elige una categoría.
```

<br>

---

## Instalación

### Opción 1: npx skills (compatible con Cursor, Cline, etc.)

```bash
npx skills add anxiong2025/seo-skill
```

> Los archivos quedan en `.agents/skills/seo/`. Si `/seo` no se reconoce, usa la Opción 2.

### Opción 2: Instalación manual (recomendado para Claude Code)

```bash
mkdir -p .claude/skills/seo
curl -sL https://raw.githubusercontent.com/anxiong2025/seo-skill/main/SKILL.md \
  -o .claude/skills/seo/SKILL.md
```

```bash
# Opcional: descargar documentación de referencia
mkdir -p .claude/skills/seo/references
for f in keyword-research-guide competitor-analysis-guide schema-templates meta-tag-spec og-image-guide; do
  curl -sL "https://raw.githubusercontent.com/anxiong2025/seo-skill/main/references/${f}.md" \
    -o ".claude/skills/seo/references/${f}.md"
done
```

<br>

---

## Uso

### Tres formas de invocar

| Método | Ejemplo | Descripción |
|:------|:------|:------|
| **Auditoría completa** | `/seo` | Ejecuta todos los módulos aplicables, genera puntuación + reporte completo |
| **Por módulo** | `/seo global`, `/seo SaaS`, `/seo ecommerce`, `/seo GEO` | Solo ejecuta el módulo especificado |
| **Lenguaje natural** | `hacer investigación de palabras clave`, `analizar competidores de pricing`, `optimizar citas de IA` | Describe lo que necesitas, Claude elige el módulo correcto |

### Tres modos de auditoría

| Modo | Requiere | Cobertura | Ideal para |
|:------|:----------|:------:|:------|
| **Offline** | Nada | ~60-70% | Primera vez, sin login |
| **Estándar** | Google Search Console + GA4 (ambos gratuitos) | ~90% | **Recomendado** |
| **Completo** | + Bing WMT + Keyword Planner + MCP | ~100% | Equipos SEO profesionales |

> Empieza con `/seo` para una auditoría completa y puntuación. Luego audita por módulo según necesites.

<br>

---

## Qué se Verifica

**37 módulos · 700+ verificaciones · puntuación 0-100 + grado A-F · ponderación dinámica por tipo de sitio**

<details open>
<summary><strong>📋 Lista completa de módulos</strong></summary>

<br>

#### Fundación & Técnico (todos los sitios)

| Módulo | Verificaciones principales |
|:------|:--------|
| **Fundación** | GA4, verificación GSC, noindex, configuración sitemap |
| **SEO Técnico** | robots.txt, canonical, HTTPS, redirecciones, móvil |
| **On-Page SEO** | title, description, jerarquía H1, alt de imágenes, links internos, estructura URL |
| **Datos Estructurados** | 12 tipos JSON-LD (Article / Product / FAQ / HowTo / LocalBusiness, etc.) |
| **Rendimiento / CWV** | LCP, INP, CLS, fuentes, compresión de imágenes, datos reales CrUX |
| **JS Rendering / SSR** | Renderizado del lado del servidor, hydration, fallback SPA |
| **Validación HTML** | DOCTYPE, charset, estructura head, etiquetas duplicadas |
| **SEO de Seguridad** | HTTPS/HSTS, CSP, claves expuestas, contenido mixto |
| **Accesibilidad** | ARIA, contraste de color, etiquetas de formulario, navegación por teclado |
| **Favicon** | favicon.ico / .svg, apple-touch-icon |

#### Era de la IA (GEO + Contenido)

| Módulo | Verificaciones principales |
|:------|:--------|
| **GEO (citación IA)** | llms.txt, acceso de crawlers IA, optimización de entidades, marcado semántico |
| **SEO de Contenido** | Señales E-E-A-T, estructura de contenido, FAQ, calidad de landing pages |
| **Autoridad Temática** | Clusters Hub-Spoke, brechas de contenido, completitud temática |
| **Frescura de Contenido** | Actualizaciones dateModified, detección de decaimiento, estrategia de refresco |
| **Investigación de Palabras Clave** | Expansión de semilla, long-tail, intención de búsqueda, canibalización |

#### Operaciones (basado en datos)

| Módulo | Verificaciones principales |
|:------|:--------|
| **Integración GSC** | Análisis de consultas/CTR/posición, minería de oportunidades |
| **Recuperación de Penalizaciones** | Manual Action, decaimiento HCU, diagnóstico Core Update |
| **Presupuesto de Rastreo** | Análisis de logs para sitios grandes (>1000 páginas) |
| **Migración de Sitio** | Mapeo 301, cadenas de redirección, comparación pre/post |
| **Diagnóstico de Ranking** | Por qué las páginas no rankean — análisis profundo keyword → URL |
| **Análisis de Competidores** | Características SERP, diferenciación de contenido, oportunidades de featured snippet |
| **Link Building** | Arquitectura de links internos, texto ancla, investigación de outreach |
| **Recuperación de Links** | Menciones de marca sin link, backlinks rotos |
| **OG / Social** | og:image (1200×630), Twitter Card |
| **Pruebas A/B** | Metodología de experimentos de título / meta / estructura |
| **CRO para SEO** | Conversión en landing pages, CTA, señales de confianza |

#### Específico por Industria (activado automáticamente por tipo de sitio)

| Módulo | Se activa cuando |
|:------|:---------|
| 🛒 **SEO Ecommerce** (40+ verificaciones) | Páginas de productos / carrito presentes |
| 💼 **SaaS / Sitio de producto** | Tiene /features /pricing /integrations |
| 📖 **Docs de desarrollador** | Tiene /docs /api, contenido versionado |
| 🌏 **Global / Cross-border** | Objetivos multi-idioma / multi-región |
| 📍 **SEO Local** | Sitio LocalBusiness |
| 🌐 **Internacional profundo** | Sitio hreflang multi-idioma |
| 🎬 **SEO de Video** | Sitio centrado en video |
| 👥 **UGC / Programático** | Sitio de comunidad / agregador |

</details>

> **Puntuación**: cada verificación es Pass / Partial / Fail → suma ponderada → puntuación 0-100.
> **Cap de Fallo Crítico**: problemas críticos (sitemap faltante, robots bloqueado, ≥60% títulos duplicados) limitan la puntuación a 60.

<br>

---

## Frameworks Soportados

Detección automática — sin configuración manual:

| Framework | Señal de detección |
|:----------|:---------|
| **Astro** | `astro.config.*` |
| **Next.js** (App Router) | `next.config.*` |
| **Nuxt** | `nuxt.config.*` |
| **SvelteKit** | `svelte.config.*` |
| **Gatsby** | `gatsby-config.*` |
| **Vite SPA** | `vite.config.*` (sin framework) |
| **HTML Estático** | `index.html` |

<br>

---

## Documentación de Referencia Incluida

Descarga opcional al instalar — Claude la usa automáticamente durante las auditorías:

| Archivo | Contenido |
|:------|:------|
| `keyword-research-guide.md` | Flujo completo de investigación de palabras clave |
| `competitor-analysis-guide.md` | Análisis de competidores: comparación de páginas, características SERP |
| `schema-templates.md` | 12 plantillas JSON-LD listas para usar |
| `meta-tag-spec.md` | Especificación de meta tags: límites de longitud, formato, errores comunes |
| `og-image-guide.md` | Generación de imagen OG: 4 enfoques (SVG / Puppeteer / Satori / @vercel/og) |

<br>

---

## Contribuir

PRs bienvenidos. Al agregar nuevas verificaciones:

1. Añadir a la sección relevante en `SKILL.md`
2. Incluir: qué verificar, valor correcto, errores comunes
3. Si se necesita una plantilla, añadirla a `references/`

## Licencia

MIT — úsalo, forkéalo, publícalo.

---

<p align="center"><em>Cada gran producto merece ser encontrado — por buscadores, por usuarios, por la IA.</em></p>
