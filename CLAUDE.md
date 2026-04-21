# Claude AI Instructions for Live-Streaming Project

## Project Overview
This is a **Next.js live-streaming application** with a modern UI built using shadcn/ui components.

**Stack:**
- Next.js (App Router)
- React 18+
- TypeScript
- Tailwind CSS
- shadcn/ui components

**Fonts:**
- Sans: Inter
- Mono: JetBrains Mono

## Key Guidelines

### 1. Before Writing Code
- Read AGENTS.md for Next.js version warnings
- Check `node_modules/next/dist/docs/` for current API documentation
- This version may have breaking changes from standard Next.js training data

### 2. Code Conventions
- Use TypeScript strict mode
- Follow React best practices (functional components, hooks)
- Use shadcn/ui components from `@/components/ui/`
- Apply Tailwind CSS utilities for styling
- Always include `font-sans` or `font-mono` classes where appropriate

### 3. Common Tasks
- **Image optimization**: Use Next.js `Image` component with proper width/height props
- **Images with CSS transforms** (dark:invert, etc): Include `style={{ width: "auto", height: "auto" }}` to maintain aspect ratio
- **Component imports**: Use `@/` alias for cleaner imports
- **Styling**: Prefer Tailwind classes over inline styles

### 4. File Structure
```
src/
├── app/           # Next.js app routes
├── components/    # React components
│   └── ui/       # shadcn/ui components
├── hooks/        # Custom React hooks
└── lib/          # Utilities and helpers
```

### 5. Common Issues & Fixes
- **Image aspect ratio warning**: Add `style={{ width: "auto", height: "auto" }}` when using CSS filters
- **Font loading**: Ensure font variables are properly passed to HTML element
- **Component imports**: Always use `@/components/...` paths for clarity

### 6. When Making Changes
- Make incremental, focused changes
- Test changes in the browser before committing
- Use proper semantic git commits
- Remove unused imports and variables
- Follow the existing code style in the file

### 7. Critical Feedback
**IMPORTANT:** Do NOT just say "yes" to every request. If a request is:
- Technically incorrect or problematic
- Against best practices
- Inefficient or will cause issues
- Unclear or missing important context

**Challenge it.** Ask clarifying questions, explain why it's not ideal, or suggest better alternatives. Be helpful and honest—good coding is about quality, not just compliance.
