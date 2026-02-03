# Performance optimisation

Deep performance optimisation based on Lighthouse performance audits. Focuses on loading speed, runtime efficiency, and resource optimisation.

## How it works

1. Identify performance bottlenecks in code and assets
2. Prioritise by impact on Core Web Vitals
3. Provide specific optimisations with code examples
4. Measure improvement with before/after metrics

## Performance budget

| Resource | Budget | Rationale |
|----------|--------|-----------|
| Total page weight | < 1.5 MB | 3G loads in ~4s |
| JavaScript (compressed) | < 300 KB | Parsing + execution time |
| CSS (compressed) | < 100 KB | Render blocking |
| Images (above-fold) | < 500 KB | LCP impact |
| Fonts | < 100 KB | FOIT/FOUT prevention |
| Third-party | < 200 KB | Uncontrolled latency |

## Critical rendering path

**Server response:** TTFB < 800ms. Use CDN, caching, and efficient backends. Enable Brotli compression (15-20% smaller than Gzip). HTTP/2 or HTTP/3 for multiplexing. Edge caching for HTML when possible.

**Resource loading:**

Preconnect to required origins:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://cdn.example.com" crossorigin>
```

Preload critical resources:

```html
<!-- LCP image -->
<link rel="preload" href="/hero.webp" as="image" fetchpriority="high">
<!-- Critical font -->
<link rel="preload" href="/font.woff2" as="font" type="font/woff2" crossorigin>
```

Defer non-critical CSS:

```html
<!-- Critical CSS inlined -->
<style>/* Above-fold styles */</style>
<!-- Non-critical CSS -->
<link rel="preload" href="/styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="/styles.css"></noscript>
```

## JavaScript optimisation

Defer non-essential scripts:

```html
<!-- Parser-blocking (avoid) -->
<script src="/critical.js"></script>

<!-- Deferred (preferred for app scripts) -->
<script defer src="/app.js"></script>

<!-- Async (for independent scripts like analytics) -->
<script async src="/analytics.js"></script>

<!-- Module (deferred by default) -->
<script type="module" src="/app.mjs"></script>
```

Code splitting patterns:

```javascript
// Route-based splitting
const Dashboard = lazy(() => import('./Dashboard'));

// Component-based splitting
const HeavyChart = lazy(() => import('./HeavyChart'));

// Feature-based splitting
if (user.isPremium) {
  const PremiumFeatures = await import('./PremiumFeatures');
}
```

Tree shaking best practices:

```javascript
// Bad: imports entire library
import _ from 'lodash';
_.debounce(fn, 300);

// Good: imports only what's needed
import debounce from 'lodash/debounce';
debounce(fn, 300);
```

## Image optimisation

### Format selection

| Format | Use case | Browser support |
|--------|----------|-----------------|
| AVIF | Photos, best compression | 92%+ |
| WebP | Photos, good fallback | 97%+ |
| PNG | Graphics with transparency | Universal |
| SVG | Icons, logos, illustrations | Universal |

### Responsive images

```html
<picture>
  <!-- AVIF for modern browsers -->
  <source type="image/avif"
    srcset="hero-400.avif 400w, hero-800.avif 800w, hero-1200.avif 1200w"
    sizes="(max-width: 600px) 100vw, 50vw">
  <!-- WebP fallback -->
  <source type="image/webp"
    srcset="hero-400.webp 400w, hero-800.webp 800w, hero-1200.webp 1200w"
    sizes="(max-width: 600px) 100vw, 50vw">
  <!-- JPEG fallback -->
  <img src="hero-800.jpg"
    srcset="hero-400.jpg 400w, hero-800.jpg 800w, hero-1200.jpg 1200w"
    sizes="(max-width: 600px) 100vw, 50vw"
    width="1200" height="600" alt="Hero image"
    loading="lazy" decoding="async">
</picture>
```

### LCP image priority

```html
<!-- Above-fold LCP image: eager loading, high priority -->
<img src="hero.webp" fetchpriority="high" loading="eager" decoding="sync" alt="Hero">

<!-- Below-fold images: lazy loading -->
<img src="product.webp" loading="lazy" decoding="async" alt="Product">
```

## Font optimisation

### Loading strategy

```css
/* System font stack as fallback */
body {
  font-family: 'Custom Font', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* font-display: swap shows fallback text immediately, then swaps when custom
   font loads. Good for critical text. Note: can cause CLS if fallback and
   custom font have different metrics. Use size-adjust to mitigate. */
@font-face {
  font-family: 'Custom Font';
  src: url('/fonts/custom.woff2') format('woff2');
  font-display: swap;
  font-weight: 400;
  font-style: normal;
  unicode-range: U+0000-00FF; /* Subset to Latin */
}

/* font-display: optional avoids CLS entirely. If the font isn't cached,
   the browser uses the fallback and caches the font for next visit.
   Better for non-critical text or when CLS is a concern. */
@font-face {
  font-family: 'Optional Font';
  src: url('/fonts/optional.woff2') format('woff2');
  font-display: optional;
}
```

### Preloading critical fonts

```html
<link rel="preload" href="/fonts/heading.woff2" as="font" type="font/woff2" crossorigin>
```

### Variable fonts

```css
/* One file instead of multiple weights */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Variable.woff2') format('woff2-variations');
  font-weight: 100 900;
  font-display: swap;
}
```

## Caching strategy

### Cache-Control headers

```
# HTML (short or no cache)
Cache-Control: no-cache, must-revalidate

# Static assets with content hash in filename (immutable)
Cache-Control: public, max-age=31536000, immutable

# Static assets without hash
Cache-Control: public, max-age=86400, stale-while-revalidate=604800

# API responses
Cache-Control: private, max-age=0, must-revalidate
```

### Service worker caching

```javascript
// Cache-first for static assets
self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'image' ||
      event.request.destination === 'style' ||
      event.request.destination === 'script') {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        return cached || fetch(event.request).then((response) => {
          const clone = response.clone();
          caches.open('static-v1').then((cache) => cache.put(event.request, clone));
          return response;
        });
      })
    );
  }
});
```

## Runtime performance

### Avoid layout thrashing

```javascript
// Bad: forces multiple reflows (read-write-read-write)
elements.forEach(el => {
  const height = el.offsetHeight;        // Read
  el.style.height = height + 10 + 'px'; // Write
});

// Good: batch reads, then batch writes
const heights = elements.map(el => el.offsetHeight); // All reads
elements.forEach((el, i) => {
  el.style.height = heights[i] + 10 + 'px'; // All writes
});
```

### Debounce expensive operations

```javascript
function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

// Debounce scroll/resize handlers
window.addEventListener('scroll', debounce(handleScroll, 100));
```

### Use requestAnimationFrame

```javascript
// Bad: may cause jank
setInterval(animate, 16);

// Good: synced with display refresh
function animate() {
  // Animation logic
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
```

### Virtualise long lists

```css
/* For lists > 100 items, render only visible items */
/* Use libraries like react-window, vue-virtual-scroller, or native CSS: */
.virtual-list {
  content-visibility: auto;
  contain-intrinsic-size: 0 50px; /* Estimated item height */
}
```

## Third-party scripts

### Load strategies

```html
<!-- Bad: blocks main thread -->
<script src="https://analytics.example.com/script.js"></script>

<!-- Good: async loading -->
<script async src="https://analytics.example.com/script.js"></script>
```

### Facade pattern

```html
<!-- Show static placeholder until interaction -->
<div class="youtube-facade" data-video-id="abc123" onclick="loadYouTube(this)">
  <img src="/thumbnails/abc123.jpg" alt="Video title">
  <button aria-label="Play video">Play</button>
</div>
```

## Measurement

### Key metrics

| Metric | Target | Tool |
|--------|--------|------|
| LCP | < 2.5s | Lighthouse, CrUX |
| INP | < 200ms | Lighthouse, CrUX |
| CLS | < 0.1 | Lighthouse, CrUX |
| FCP | < 1.8s | Lighthouse |
| Speed Index | < 3.4s | Lighthouse |
| TBT | < 200ms | Lighthouse |

### Testing commands

```bash
# Lighthouse CLI
npx lighthouse https://example.com --output html --output-path report.html

# Web Vitals library
import {onLCP, onINP, onCLS} from 'web-vitals';
onLCP(console.log);
onINP(console.log);
onCLS(console.log);
```

## References

For Core Web Vitals specific optimisations, see `../core-web-vitals/SKILL.md`.
