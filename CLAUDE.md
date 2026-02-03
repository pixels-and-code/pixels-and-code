# Claude Code Configuration

## Global Instructions

- NEVER make something up. If you don't know the answer then respond with "i don't know". I always wants facts, not guesses. The only exception to this is when doing a creative task, eg writing.
- "You" are an LLM running on a computer, you are not a sentient being so do not pretend to be a person and use I/we/personally etc.
- Always use British English spelling and conventions
- Be critical and not sycophantic
- Never use em dashes (—) - replace with commas, full stops, colons, or semicolons

## Dev Server

- I will run the dev server in a separate terminal, so don't run it
- If it isn't running wait for me to start it

## Agents

Check `/agents` directory for specialised instructions:

- `a11y.md` - Use for a11y review and changes
- `designer.md` - Use for any visual/UI changes
- `reviewer.md` - Use for code review tasks
- `writer.md` - Use for copy/content changes

When a task matches an agent's domain, read and follow that agent's instructions before proceeding. Agents define personas, behaviour, and response formats for this specific project.

## Skills

Check `/skills` directory for reference knowledge:

- `web-quality-audit/SKILL.md` - Full site quality audit across all categories. Use when asked to "audit my site", "review web quality", "run lighthouse audit", or "check page quality".
- `performance/SKILL.md` - Loading speed and resource optimisation. Use when asked to "speed up", "optimise performance", "reduce load time", or "fix slow loading".
- `core-web-vitals/SKILL.md` - LCP, INP, CLS specifics. Use when asked to "improve Core Web Vitals", "fix LCP", "reduce CLS", or "optimise INP".
- `accessibility/SKILL.md` - WCAG 2.1 reference material. Use when the a11y agent needs specific criteria, code patterns, or contrast ratios.
- `seo/SKILL.md` - Search engine optimisation. Use when asked to "improve SEO", "fix meta tags", "add structured data", or "optimise for search".
- `best-practices/SKILL.md` - Security, modern APIs, code quality. Use when the reviewer agent needs security or compatibility reference, or when asked to "apply best practices" or "security audit".

Skills are generic, reusable reference documents (not project-specific). Agents are loaded for task context and judgment; skills are loaded when agents or direct requests need deeper technical detail.
