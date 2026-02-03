# Best practices

Modern web development standards based on Lighthouse best practices audits. Covers security, browser compatibility, and code quality patterns.

## Security

### HTTPS everywhere

Enforce HTTPS:

```html
<!-- Bad: mixed content -->
<img src="http://example.com/image.jpg">
<script src="http://cdn.example.com/script.js"></script>

<!-- Good: HTTPS only -->
<img src="https://example.com/image.jpg">
<script src="https://cdn.example.com/script.js"></script>
```

HSTS Header:

```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

### Content Security Policy (CSP)

```html
<!-- Basic CSP via meta tag -->
<meta http-equiv="Content-Security-Policy"
  content="default-src 'self';
    script-src 'self' https://trusted-cdn.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https:;
    connect-src 'self' https://api.example.com;">
```

Better: HTTP header (recommended):

```
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'nonce-abc123' https://trusted.com;
  style-src 'self' 'nonce-abc123';
  img-src 'self' data: https:;
  connect-src 'self' https://api.example.com;
  frame-ancestors 'self';
  base-uri 'self';
  form-action 'self';
```

Using nonces for inline scripts:

```html
<script nonce="abc123">
  // This inline script is allowed
</script>
```

### Security headers

```
# Prevent clickjacking
X-Frame-Options: DENY

# Prevent MIME type sniffing
X-Content-Type-Options: nosniff

# Control referrer information
Referrer-Policy: strict-origin-when-cross-origin

# Permissions policy (formerly Feature-Policy)
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### No vulnerable libraries

```bash
# Check for vulnerabilities
npm audit
yarn audit

# Auto-fix when possible
npm audit fix
```

```json
// package.json
{
  "scripts": {
    "audit": "npm audit --audit-level=moderate",
    "update": "npm update && npm audit fix"
  }
}
```

Known vulnerable patterns to avoid:

```javascript
// Bad: prototype pollution vulnerable
Object.assign(target, userInput);
_.merge(target, userInput);

// Good: safer alternatives
const safeData = JSON.parse(JSON.stringify(userInput));
// Or use structuredClone() in modern environments
const safeData = structuredClone(userInput);
```

### Input sanitisation

```javascript
// Bad: XSS vulnerable
element.innerHTML = userInput;
document.write(userInput);

// Good: safe text content
element.textContent = userInput;

// Good: if HTML needed, sanitise
import DOMPurify from 'dompurify';
element.innerHTML = DOMPurify.sanitize(userInput);
```

### Secure cookies

```
# Bad: insecure cookie
Set-Cookie: session=abc123

# Good: secure cookie (server-side)
Set-Cookie: session=abc123; Secure; HttpOnly; SameSite=Strict; Path=/
```

## Browser compatibility

### Doctype declaration

```html
<!-- Bad: missing or invalid doctype -->
<HTML>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN">

<!-- Good: HTML5 doctype -->
<!DOCTYPE html>
<html lang="en">
```

### Character encoding

```html
<!-- Bad: missing or late charset -->
<html>
<head>
  <title>Page</title>
  <meta charset="UTF-8">
</head>

<!-- Good: charset as first element in head -->
<html>
<head>
  <meta charset="UTF-8">
  <title>Page</title>
</head>
```

### Viewport meta tag

```html
<!-- Bad: missing viewport -->
<head><title>Page</title></head>

<!-- Good: responsive viewport -->
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Page</title>
</head>
```

### Feature detection

```javascript
// Bad: browser detection (brittle)
if (navigator.userAgent.includes('Chrome')) {
  // Chrome-specific code
}

// Good: feature detection
if ('IntersectionObserver' in window) {
  // Use IntersectionObserver
} else {
  // Fallback
}
```

```css
/* Good: @supports for CSS */
@supports (display: grid) {
  .container { display: grid; }
}
@supports not (display: grid) {
  .container { display: flex; }
}
```

### Deprecated APIs

Avoid these:

```javascript
// Bad: document.write (blocks parsing)
document.write('<script src="..."></script>');

// Good: dynamic script loading
const script = document.createElement('script');
script.src = '...';
document.head.appendChild(script);

// Bad: synchronous XHR (blocks main thread)
const xhr = new XMLHttpRequest();
xhr.open('GET', url, false); // false = synchronous

// Good: async fetch
const response = await fetch(url);

// Bad: Application Cache (removed from browsers)
// <html manifest="cache.manifest">

// Good: Service Workers
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
```

### Event listener passive

```javascript
// Bad: non-passive touch/wheel (may block scrolling)
element.addEventListener('touchstart', handler);
element.addEventListener('wheel', handler);

// Good: passive listeners (allows smooth scrolling)
element.addEventListener('touchstart', handler, { passive: true });
element.addEventListener('wheel', handler, { passive: true });

// Good: if you need preventDefault, be explicit
element.addEventListener('touchstart', handler, { passive: false });
```

## Console & errors

### No console errors

```javascript
// Bad: errors in production
console.log('Debug info'); // Remove in production
throw new Error('Unhandled'); // Catch all errors

// Good: proper error handling
try {
  riskyOperation();
} catch (error) {
  // Log to error tracking service
  errorTracker.captureException(error);
  // Show user-friendly message
  showErrorMessage('Something went wrong. Please try again.');
}
```

### Error boundaries (React)

```jsx
// Class-based error boundary (still required as of React 19,
// hooks equivalent does not exist yet)
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    errorTracker.captureException(error, { extra: info });
  }

  render() {
    if (this.state.hasError) {
      return <FallbackUI />;
    }
    return this.props.children;
  }
}

// Usage
<ErrorBoundary>
  <App />
</ErrorBoundary>

// React 19+: can also use onCaughtError/onUncaughtError on createRoot
// for app-level error reporting
```

### Global error handler

```javascript
// Catch unhandled errors
window.addEventListener('error', (event) => {
  errorTracker.captureException(event.error);
});

// Catch unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  errorTracker.captureException(event.reason);
});
```

### Source maps

Production configuration (approach varies by build tool):

```javascript
// Bad: source maps publicly accessible in production
// (exposes original source code)

// Good: hidden source maps uploaded to error tracking only
// Vite: build.sourcemap = 'hidden'
// Webpack: devtool = 'hidden-source-map'
// Next.js: productionBrowserSourceMaps = false (default)

// The error tracking service (Sentry, Bugsnag, etc.) receives
// the source maps during build/deploy, not the browser
```

## Performance best practices

### Avoid blocking patterns

```html
<!-- Bad: blocking script -->
<script src="heavy-library.js"></script>

<!-- Good: deferred script -->
<script defer src="heavy-library.js"></script>
```

```css
/* Bad: CSS @import in source files served directly to browsers
   creates sequential requests instead of parallel loading.
   Note: in bundled/compiled CSS (e.g. via PostCSS, Sass) this
   is fine because imports are resolved at build time. */
@import url('other-styles.css');
```

### Efficient event handlers

```javascript
// Bad: handler on every element
items.forEach(item => {
  item.addEventListener('click', handleClick);
});

// Good: event delegation
container.addEventListener('click', (e) => {
  if (e.target.matches('.item')) {
    handleClick(e);
  }
});
```

### Memory management

```javascript
// Bad: memory leak (never removed)
const handler = () => { /* ... */ };
window.addEventListener('resize', handler);

// Good: cleanup when done
const handler = () => { /* ... */ };
window.addEventListener('resize', handler);
// Later, when component unmounts:
window.removeEventListener('resize', handler);

// Better: using AbortController
const controller = new AbortController();
window.addEventListener('resize', handler, { signal: controller.signal });
// Cleanup:
controller.abort();
```

## Code quality

### Valid HTML

```html
<!-- Bad: invalid HTML -->
<div id="header">
<div id="header"> <!-- Duplicate ID -->
<ul>
  <div>Item</div> <!-- Invalid child -->
</ul>
<a href="/"><button>Click</button></a> <!-- Invalid nesting -->

<!-- Good: valid HTML -->
<header id="site-header"></header>
<ul>
  <li>Item</li>
</ul>
<a href="/" class="button">Click</a>
```

### Semantic HTML

```html
<!-- Bad: non-semantic -->
<div class="header">
  <div class="nav">
    <div class="nav-item">Home</div>
  </div>
</div>
<div class="main">
  <div class="article">
    <div class="title">Headline</div>
  </div>
</div>

<!-- Good: semantic HTML5 -->
<header>
  <nav>
    <a href="/">Home</a>
  </nav>
</header>
<main>
  <article>
    <h1>Headline</h1>
  </article>
</main>
```

### Image aspect ratios

```html
<!-- Bad: distorted images -->
<img src="photo.jpg" width="300" height="100">
<!-- If actual ratio is 4:3, this squishes the image -->

<!-- Good: preserve aspect ratio -->
<img src="photo.jpg" width="300" height="225"> <!-- Actual 4:3 dimensions -->

<!-- Good: CSS object-fit for flexibility -->
<img src="photo.jpg" style="width: 300px; height: 200px; object-fit: cover;">
```

## Permissions & privacy

### Request permissions properly

```javascript
// Bad: request on page load (bad UX, often denied)
navigator.geolocation.getCurrentPosition(success, error);

// Good: request in context, after user action
findNearbyButton.addEventListener('click', async () => {
  // Explain why you need it
  if (await showPermissionExplanation()) {
    navigator.geolocation.getCurrentPosition(success, error);
  }
});
```

### Permissions policy

```html
<!-- Restrict powerful features -->
<meta http-equiv="Permissions-Policy"
  content="geolocation=(), camera=(), microphone=()">

<!-- Or allow for specific origins -->
<meta http-equiv="Permissions-Policy"
  content="geolocation=(self 'https://maps.example.com')">
```

## Audit checklist

**Security (critical):**

- HTTPS enabled, no mixed content
- No vulnerable dependencies (`npm audit`)
- CSP headers configured
- Security headers present
- No exposed source maps

**Compatibility:**

- Valid HTML5 doctype
- Charset declared first in head
- Viewport meta tag present
- No deprecated APIs used
- Passive event listeners for scroll/touch

**Code quality:**

- No console errors
- Valid HTML (no duplicate IDs)
- Semantic HTML elements used
- Proper error handling
- Memory cleanup in components

**UX:**

- No intrusive interstitials
- Permission requests in context
- Clear error messages
- Appropriate image aspect ratios

## Tools

| Tool | Purpose |
|------|---------|
| npm audit | Dependency vulnerabilities |
| SecurityHeaders.com | Header analysis |
| W3C Validator | HTML validation |
| Lighthouse | Best practices audit |
| Observatory | Security scan |

## References

- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- Web Quality Audit: `../web-quality-audit/SKILL.md`
