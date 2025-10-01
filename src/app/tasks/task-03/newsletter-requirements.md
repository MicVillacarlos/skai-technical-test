# Newsletter Section Requirements

## Overview

Build a newsletter signup section that matches the visual style of the three sections above it.

## Content to Use

**Heading:** "Stay in the Loop"

**Description:** "Get exclusive access to new products, special offers, and style tips. Join our community of 10,000+ subscribers."

**Email Input Placeholder:** "Enter your email"

**Button Text:** "Subscribe"

## Layout Structure

- Center-aligned content
- Maximum width container (should match other centered sections)
- Email input and button should be in a horizontal flex layout on desktop
- Should stack vertically on mobile

## Visual Requirements

### Typography
- Heading should match the size and weight of other section headings
- Description text should match the muted text style used throughout
- Proper spacing between heading and description

### Colors
- Background: Match the alternating section backgrounds (this is a light section)
- Text colors: Follow the same foreground/muted-foreground pattern
- Input and button: Use the existing input and button styles from the design system

### Spacing
- Section padding: Match the vertical padding of other sections
- Internal spacing: Match the space between elements in other sections
- Gap between input and button: Consistent with other element gaps

### Form Elements
- Email input:
  - Should have border
  - Proper padding and height
  - Focus state with ring
  - Full width on mobile
  - Placeholder text in muted color

- Submit button:
  - Should match the style of primary buttons used elsewhere
  - Proper padding and height to align with input
  - Include an icon (use `ArrowRight` from lucide-react)

### Responsive Design
- Desktop (md and above):
  - Input and button side by side
  - Input should take more space than button

- Mobile:
  - Stack vertically
  - Both elements full width
  - Proper gap between them

## Components to Use

You have access to:
- `Button` component from `@/components/ui/button`
- Standard HTML `input` element (styled to match)
- Icons from `lucide-react`

## What NOT to Do

- Don't add form submission logic (just the UI)
- Don't add validation (focus on matching the design)
- Don't deviate from the established patterns

## Success Checklist

- [ ] Heading matches the typography of other section headings
- [ ] Description text uses the same muted color
- [ ] Section padding matches other sections (compare visually)
- [ ] Input has proper border, padding, and focus states
- [ ] Button matches the primary button style used elsewhere
- [ ] Side-by-side layout on desktop, stacked on mobile
- [ ] Centered content with max-width container
- [ ] Spacing between elements feels consistent with the rest of the page
- [ ] No visual inconsistencies when you scroll through all sections

## Tips

1. Look at how other sections handle centering and max-width
2. Study the button sizes and styles used in the hero
3. Check the spacing units (py-16, space-y-6, gap-4, etc.)
4. Look at how text-muted-foreground is used for descriptions
5. Notice the responsive breakpoints (when do layouts change?)
