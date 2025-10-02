# Task 02: Performance Audit

## Problem

You'll find a product gallery page at `/tasks/task-02` that has serious performance issues. This page was built quickly without optimization, and now it's slow, janky, and hurting conversion rates.

Your client (a D2C e-commerce brand) is complaining about:
- Slow page loads
- Poor Lighthouse scores
- High bounce rates on mobile
- Layout shifts during load

## Your Task

**Audit the page and identify performance issues** - you don't need to fix them, just document what's wrong and how you'd improve it.

### What to Do:

1. Visit `/tasks/task-02` and review the implementation in `/src/app/tasks/task-02/page.tsx`
2. Document your findings in this file (see template below)
3. For each issue, explain:
   - What's wrong
   - Why it's a problem
   - How you'd fix it (specific Next.js/React patterns)

### What We're Looking For:

- Deep understanding of Next.js optimization capabilities
- Knowledge of modern React performance patterns
- Awareness of Core Web Vitals and their impact on user experience
- Ability to articulate why performance matters for e-commerce

## File to Review

- `/src/app/tasks/task-02/page.tsx` - The slow product gallery page

## Time Estimate

15-20 minutes

## Bonus Challenges (Optional)

If you finish early or want to demonstrate additional skills:

- Estimate the performance impact in metrics (e.g., "Could improve LCP by ~2s")
- Prioritize fixes by effort vs. impact (quick wins vs. major improvements)
- Suggest monitoring/testing strategies to catch these issues earlier in development

---

# Your Performance Audit

**Your Name:** Michael Villacarlos

**Date:** October 02, 2025

---

## Instructions

Document each performance issue you find in `/src/app/tasks/task-02/page.tsx`. For each issue:

1. **What's Wrong**: Describe the specific problem
2. **Why It Matters**: Explain the performance impact (metrics, UX, etc.)
3. **How to Fix**: Provide specific Next.js/React solution

Try to find **at least 8 issues**. Prioritize them by impact if you can.

---

## Issue #1

**What's Wrong:**

Memory Leak in `useEffect`

**Why It Matters:**

The useEffect creates an interval that runs every second but never cleans it up when the component unmounts.It spawns an interval that runs forever, and filtering/re-rendering creates even more intervals that accumulate infinitely.

**How to Fix:**

remove the useEffect block since it's useless or add a clean-up function. 
```return () => clearInterval(interval);```

---

## Issue #2

**What's Wrong:**
Unnecessary useEffect with Interval

**Why It Matters:**

The useEffect hook runs a setInterval that logs to the console every second for each product card, serving absolutely no functional purpose. 

Metrics Affected: CPU usage constantly elevated, JavaScript main thread blocking, FPS drops during interactions
User Experience Impact: Sluggish interactions and animations, increased battery consumption on mobile/laptop, developer console becomes unusable and laggy, overall application feels unresponsive

**How to Fix:**

Delete the entire useEffect block.

---

## Issue #3

**What's Wrong:**

Missing Image Optimization (No Lazy Loading)
**Why It Matters:**

The code uses plain <img> tags instead of Next.js Image component, loading all 13 images (10 products + 3 features) immediately at full resolution without optimization, lazy loading, or responsive sizing. Every image downloads completely on initial page load regardless of viewport position.

User Experience Impact: Slow initial page load especially on mobile/slow connections, wasted data on images below the fold that users may never see, janky scrolling as images load, poor mobile experience with oversized images

**How to Fix:**

 Replace all <img> tags with Next.js <Image> component throughout the entire page for automatic optimization, lazy loading, and responsive images.RetryClaude does not have the ability to run the code it generates yet.

---

## Issue #4

**What's Wrong:**

Expensive Calculations on Every Render (Stats)

**Why It Matters:**

The statistics calculations (averagePrice, totalValue) using lodash run on every single render, including every keystroke in the search box and every category filter click. Each calculation requires iterating through the entire filteredProducts array multiple times.

JavaScript execution time grows with larger datasets, frame drops during interactions

**How to Fix:**
use useMemo
```
// BEFORE - Recalculates on every render:
const totalProducts = filteredProducts.length;
const averagePrice = _.mean(filteredProducts.map(p => p.price));
const totalValue = _.sum(filteredProducts.map(p => p.price * p.stock));

// AFTER - Memoized to only recalculate when filteredProducts changes:
import { useMemo } from "react";

const stats = useMemo(() => {
  const totalProducts = filteredProducts.length;
  const averagePrice = _.mean(filteredProducts.map(p => p.price));
  const totalValue = _.sum(filteredProducts.map(p => p.price * p.stock));
  
  return { totalProducts, averagePrice, totalValue };
}, [filteredProducts]);
```
---

## Issue #5

**What's Wrong:**

Multiple Array Iterations for Calculations

**Why It Matters:**

After filtering products, the code immediately iterates through filteredProducts multiple separate times to calculate stats - once with .map(p => p.price) for average, again with .map(p => p.price * p.stock) for total value. This creates 2-3 separate loops over the same data that could be done in a single pass.

**How to Fix:**

Use a single `reduce` operation to calculate all stats in one pass through the array, wrapped in `useMemo` to prevent unnecessary recalculations.
```
// BEFORE - Multiple iterations:
const totalProducts = filteredProducts.length;
const averagePrice = _.mean(filteredProducts.map(p => p.price));
const totalValue = _.sum(filteredProducts.map(p => p.price * p.stock));

// AFTER - Single iteration using reduce:
const stats = useMemo(() => {
  const result = filteredProducts.reduce((acc, p) => {
    acc.totalPrice += p.price;
    acc.totalValue += p.price * p.stock;
    return acc;
  }, { totalPrice: 0, totalValue: 0 });
  
  return {
    totalProducts: filteredProducts.length,
    averagePrice: filteredProducts.length ? result.totalPrice / filteredProducts.length : 0,
    totalValue: result.totalValue
  };
}, [filteredProducts]);
```
---

## Issue #6

**What's Wrong:**

Expensive Calculations in ProductCard on Every Render

**Why It Matters:**

Each ProductCard performs calculations like _.round(product.price, 2).toFixed(2), product.price * 1.1, and product.stock < 30 on every render. With 10 product cards, these calculations run 10 times on initial render and again whenever any card re-renders due to parent state changes (search, filter, hover).

Component render time increases, TBT (Total Blocking Time) accumulates across all cards, JavaScript execution time spikes during re-renders, frame drops during interactions

**How to Fix:**

```
// BEFORE - Recalculates on every render:
function ProductCard({ product }: { product: typeof PRODUCTS[0] }) {
  const formattedPrice = _.round(product.price, 2).toFixed(2);
  const isLowStock = product.stock < 30;
  const priceWithTax = product.price * 1.1;
  // ...
}

// AFTER - Memoized calculations:
import { useMemo } from "react";

function ProductCard({ product }: { product: typeof PRODUCTS[0] }) {
  const { formattedPrice, isLowStock, priceWithTax } = useMemo(() => ({
    formattedPrice: _.round(product.price, 2).toFixed(2),
    isLowStock: product.stock < 30,
    priceWithTax: product.price * 1.1
  }), [product.price, product.stock]);
  // ...
}
```

---

## Issue #7

**What's Wrong:**

_[Describe the issue]_

**Why It Matters:**

_[Impact on performance, metrics affected, user experience impact]_

**How to Fix:**

_[Specific solution with Next.js/React APIs]_

---

## Issue #8

**What's Wrong:**

_[Describe the issue]_

**Why It Matters:**

_[Impact on performance, metrics affected, user experience impact]_

**How to Fix:**

_[Specific solution with Next.js/React APIs]_

---

## Additional Issues (if found)

**Issue #9:**

_[Optional - add more if you found them]_

---

**Issue #10:**

_[Optional - add more if you found them]_

---

## Priority Ranking (Optional Bonus)

If you had to fix these issues in order of impact, what would your priority be? List the issue numbers in order:

1. Issue #__ - _[Why this is highest priority]_
2. Issue #__ - _[Why this is second priority]_
3. Issue #__ - _[Why this is third priority]_

---

## Overall Assessment

**Estimated Performance Impact:**
_[Low / Medium / High - explain why]_

**Key Metrics Affected:**
_[Which Core Web Vitals would be most impacted? LCP, CLS, FCP, TTI, TBT?]_

**Quick Wins:**
_[Which fixes would give the biggest improvement for least effort?]_
