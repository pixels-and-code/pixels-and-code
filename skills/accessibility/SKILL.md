# Accessibility (a11y)

Comprehensive accessibility guidelines based on WCAG 2.1 and Lighthouse accessibility audits. Goal: make content usable by everyone, including people with disabilities.

## WCAG Principles: POUR

| Principle | Description |
|-----------|-------------|
| Perceivable | Content can be perceived through different senses |
| Operable | Interface can be operated by all users |
| Understandable | Content and interface are understandable |
| Robust | Content works with assistive technologies |

## Conformance levels

| Level | Requirement | Target |
|-------|-------------|--------|
| A | Minimum accessibility | Must pass |
| AA | Standard compliance | Should pass (legal requirement in many jurisdictions) |
| AAA | Enhanced accessibility | Nice to have |

## Perceivable

### Text alternatives (1.1)

Images require alt text:

```html
<!-- Bad: missing alt -->
<img src="chart.png">

<!-- Good: descriptive alt -->
<img src="chart.png" alt="Bar chart showing 40% increase in Q3 sales">

<!-- Good: decorative image (empty alt) -->
<img src="decorative-border.png" alt="" role="presentation">

<!-- Good: complex image with longer description -->
<figure>
  <img src="infographic.png" alt="2024 market trends infographic"
    aria-describedby="infographic-desc">
  <figcaption id="infographic-desc">
    <!-- Detailed description -->
  </figcaption>
</figure>
```

Icon buttons need accessible names:

```html
<!-- Bad: no accessible name -->
<button><svg><!-- menu icon --></svg></button>

<!-- Good: using aria-label -->
<button aria-label="Open menu">
  <svg aria-hidden="true"><!-- menu icon --></svg>
</button>

<!-- Good: using visually hidden text -->
<button>
  <svg aria-hidden="true"><!-- menu icon --></svg>
  <span class="sr-only">Open menu</span>
</button>
```

Visually hidden utility class (use framework equivalent where available, e.g. Tailwind `sr-only`):

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### Colour contrast (1.4.3, 1.4.6)

| Text Size | AA minimum | AAA enhanced |
|-----------|-----------|-------------|
| Normal text (< 18px / < 14px bold) | 4.5:1 | 7:1 |
| Large text (>= 18px / >= 14px bold) | 3:1 | 4.5:1 |
| UI components & graphics | 3:1 | 3:1 |

```css
/* Bad: low contrast (2.5:1) */
.low-contrast { color: #999; background: #fff; }

/* Good: sufficient contrast (7:1) */
.high-contrast { color: #333; background: #fff; }

/* Good: focus states need contrast too */
:focus-visible {
  outline: 2px solid #005fcc;
  outline-offset: 2px;
}
```

Don't rely on colour alone:

```html
<!-- Bad: only colour indicates error -->
<input class="error-border">

<!-- Good: colour + icon + text -->
<div class="field-error">
  <input aria-invalid="true" aria-describedby="email-error">
  <span id="email-error" class="error-message">
    <svg aria-hidden="true"><!-- error icon --></svg>
    Please enter a valid email address
  </span>
</div>
```

### Media alternatives (1.2)

```html
<!-- Video with captions -->
<video controls>
  <source src="video.mp4" type="video/mp4">
  <track kind="captions" src="captions.vtt" srclang="en" label="English" default>
  <track kind="descriptions" src="descriptions.vtt" srclang="en" label="Descriptions">
</video>

<!-- Audio with transcript -->
<audio controls>
  <source src="podcast.mp3" type="audio/mp3">
</audio>
<details>
  <summary>Transcript</summary>
  <p>Full transcript text...</p>
</details>
```

## Operable

### Keyboard accessible (2.1)

All functionality must be keyboard accessible:

```javascript
// Bad: only handles click
element.addEventListener('click', handleAction);

// Good: handles both click and keyboard
element.addEventListener('click', handleAction);
element.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    handleAction();
  }
});

// Best: use a <button> element which handles both natively
```

No keyboard traps - modal focus management:

```javascript
function openModal(modal) {
  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  // Trap focus within modal
  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  firstElement.focus();
}
```

Note: Where available, prefer the native `<dialog>` element which handles focus trapping and Escape key automatically.

### Focus visible (2.4.7)

```css
/* Bad: never remove focus outlines */
*:focus { outline: none; }

/* Good: use :focus-visible for keyboard-only focus */
:focus { outline: none; }
:focus-visible {
  outline: 2px solid #005fcc;
  outline-offset: 2px;
}

/* Good: or custom focus styles */
button:focus-visible {
  box-shadow: 0 0 0 3px rgba(0, 95, 204, 0.5);
}
```

### Skip links (2.4.1)

```html
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <header><!-- navigation --></header>
  <main id="main-content" tabindex="-1">
    <!-- main content -->
  </main>
</body>
```

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px 16px;
  z-index: 100;
}
.skip-link:focus { top: 0; }
```

### Timing (2.2)

```javascript
// Allow users to extend time limits
function showSessionWarning() {
  const modal = createModal({
    title: 'Session Expiring',
    content: 'Your session will expire in 2 minutes.',
    actions: [
      { label: 'Extend session', action: extendSession },
      { label: 'Log out', action: logout }
    ],
    timeout: 120000 // 2 minutes to respond
  });
}
```

### Motion (2.3)

```css
/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Understandable

### Page language (3.1.1)

```html
<!-- Bad: no language specified -->
<html>

<!-- Good: language specified -->
<html lang="en">

<!-- Good: language changes within page -->
<p>The French word for hello is <span lang="fr">bonjour</span>.</p>
```

### Consistent navigation (3.2.3)

```html
<!-- Navigation should be consistent across pages -->
<nav aria-label="Main">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
```

### Form labels (3.3.2)

```html
<!-- Bad: no label association -->
<input type="email" placeholder="Email">

<!-- Good: explicit label -->
<label for="email">Email address</label>
<input type="email" id="email" name="email" autocomplete="email" required>

<!-- Good: implicit label -->
<label>
  Email address
  <input type="email" name="email" autocomplete="email" required>
</label>

<!-- Good: with instructions -->
<label for="password">Password</label>
<input type="password" id="password" aria-describedby="password-requirements">
<p id="password-requirements">
  Must be at least 8 characters with one number.
</p>
```

### Error handling (3.3.1, 3.3.3)

```html
<!-- Announce errors to screen readers -->
<form novalidate>
  <div class="field" aria-live="polite">
    <label for="email">Email</label>
    <input type="email" id="email"
      aria-invalid="true"
      aria-describedby="email-error">
    <p id="email-error" class="error" role="alert">
      Please enter a valid email address (e.g., name@example.com)
    </p>
  </div>
</form>
```

```javascript
// Focus first error on submit
form.addEventListener('submit', (e) => {
  const firstError = form.querySelector('[aria-invalid="true"]');
  if (firstError) {
    e.preventDefault();
    firstError.focus();
    // Announce error summary
    const errorSummary = document.getElementById('error-summary');
    errorSummary.textContent = `${errors.length} errors found. Please fix them and try again.`;
    errorSummary.focus();
  }
});
```

## Robust

### Valid HTML (4.1.1)

```html
<!-- Bad: duplicate IDs -->
<div id="content">...</div>
<div id="content">...</div>

<!-- Bad: invalid nesting -->
<a href="/"><button>Click</button></a>

<!-- Good: unique IDs -->
<div id="main-content">...</div>
<div id="sidebar-content">...</div>

<!-- Good: proper nesting -->
<a href="/" class="button-link">Click</a>
```

### ARIA usage (4.1.2)

Prefer native elements (first rule of ARIA: don't use ARIA if a native element exists):

```html
<!-- Bad: ARIA role on div -->
<div role="button" tabindex="0">Click me</div>

<!-- Good: native button -->
<button>Click me</button>

<!-- Bad: ARIA checkbox -->
<div role="checkbox" aria-checked="false">Option</div>

<!-- Good: native checkbox -->
<label><input type="checkbox"> Option</label>
```

When ARIA is needed:

```html
<!-- Custom tabs component -->
<div role="tablist" aria-label="Product information">
  <button role="tab" id="tab-1" aria-selected="true" aria-controls="panel-1">Description</button>
  <button role="tab" id="tab-2" aria-selected="false" aria-controls="panel-2" tabindex="-1">Reviews</button>
</div>
<div role="tabpanel" id="panel-1" aria-labelledby="tab-1">
  <!-- Panel content -->
</div>
<div role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden>
  <!-- Panel content -->
</div>
```

### Live regions (4.1.3)

```html
<!-- Status updates (polite, waits for current announcement to finish) -->
<div role="status" aria-live="polite" aria-atomic="true">
  <!-- Content updates announced to screen readers -->
</div>

<!-- Urgent alerts (assertive, interrupts current announcement) -->
<div role="alert" aria-live="assertive">
  <!-- Interrupts current announcement -->
</div>
```

```javascript
// Announce dynamic content changes
function showNotification(message, type = 'polite') {
  const container = document.getElementById(`${type}-announcer`);
  container.textContent = ''; // Clear first to re-trigger announcement
  requestAnimationFrame(() => {
    container.textContent = message;
  });
}
```

## Testing checklist

### Automated testing

```bash
# Lighthouse accessibility audit
npx lighthouse https://example.com --only-categories=accessibility

# axe-core
npm install @axe-core/cli -g
axe https://example.com
```

### Manual testing

- **Keyboard navigation:** Tab through entire page, use Enter/Space to activate
- **Screen reader:** Test with VoiceOver (Mac), NVDA or JAWS (Windows), or TalkBack (Android)
- **Zoom:** Content usable at 200% zoom
- **High contrast:** Test with Windows High Contrast Mode / forced colours
- **Reduced motion:** Test with `prefers-reduced-motion: reduce`
- **Focus order:** Logical and follows visual order

### Screen reader commands

| Action | VoiceOver (Mac) | NVDA (Windows) | JAWS (Windows) |
|--------|-----------------|----------------|-----------------|
| Start/Stop | Cmd + F5 | Ctrl + Alt + N | Insert + Space |
| Next item | VO + Right | Down | Down |
| Previous item | VO + Left | Up | Up |
| Activate | VO + Space | Enter | Enter |
| Headings list | VO + U, then arrows | H / Shift + H | H / Shift + H |
| Links list | VO + U | K / Shift + K | Insert + F7 |
| Landmarks | VO + U | D / Shift + D | Insert + Ctrl + R |

## Common issues by impact

**Critical (fix immediately):**

- Missing form labels
- Missing image alt text
- Insufficient colour contrast
- Keyboard traps
- No focus indicators

**Serious (fix before launch):**

- Missing page language
- Missing heading structure
- Non-descriptive link text ("click here", "read more")
- Auto-playing media
- Missing skip links

**Moderate (fix soon):**

- Missing ARIA labels on icons
- Inconsistent navigation
- Missing error identification
- Timing without controls
- Missing landmark regions

## References

- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [Deque axe Rules](https://dequeuniversity.com/rules/axe/)
- Web Quality Audit: `../web-quality-audit/SKILL.md`
