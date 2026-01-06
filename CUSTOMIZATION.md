# Customization Cheat Sheet

Quick reference for common customizations.

## Colors

**File:** `styles.css` (lines 4-7)

```css
:root {
    --color-bg: #fafaf8;        /* Background color */
    --color-text: #1a1a1a;      /* Main text color */
    --color-accent: #8b6f47;    /* Links, highlights, active states */
    --color-border: #d4d4d0;    /* Border lines */
}
```

**Popular color schemes:**

Minimalist Gray:
```css
--color-bg: #f5f5f5;
--color-text: #2a2a2a;
--color-accent: #666666;
--color-border: #e0e0e0;
```

Warm Beige:
```css
--color-bg: #faf8f3;
--color-text: #1a1a1a;
--color-accent: #b8956a;
--color-border: #e5dfd5;
```

Cool Blue:
```css
--color-bg: #f8f9fa;
--color-text: #212529;
--color-accent: #4a7c9e;
--color-border: #dee2e6;
```

Dark Mode:
```css
--color-bg: #1a1a1a;
--color-text: #f5f5f5;
--color-accent: #d4a574;
--color-border: #333333;
```

## Fonts

**File:** `styles.css` (line 1 and lines 10-11)

Current fonts:
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&family=Work+Sans:wght@300;400;500&display=swap');

:root {
    --font-display: 'Playfair Display', serif;  /* Headings */
    --font-body: 'Work Sans', sans-serif;       /* Body text */
}
```

**How to change:**
1. Go to [fonts.google.com](https://fonts.google.com)
2. Select fonts you like
3. Click "View selected families" → Get embed code
4. Replace the @import line
5. Update the font variables

**Popular combinations:**

Modern Minimal:
```css
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Sans+3:wght@300;400;600&display=swap');

--font-display: 'Libre Baskerville', serif;
--font-body: 'Source Sans 3', sans-serif;
```

Clean Professional:
```css
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Open+Sans:wght@300;400;600&display=swap');

--font-display: 'Merriweather', serif;
--font-body: 'Open Sans', sans-serif;
```

Bold Contemporary:
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Lato:wght@300;400&display=swap');

--font-display: 'Montserrat', sans-serif;
--font-body: 'Lato', sans-serif;
```

## Layout Spacing

**File:** `styles.css`

**Navigation width:**
```css
:root {
    --nav-width: 200px;  /* Change to 150px, 180px, or 250px */
}
```

**Section padding:**
```css
.section {
    padding: 6rem 4rem;  /* Vertical, Horizontal */
}
```

More compact: `padding: 4rem 3rem;`
More spacious: `padding: 8rem 5rem;`

**Content max-width:**
```css
.about-container {
    max-width: 1400px;  /* Change to 1200px or 1600px */
}

.contact-container {
    max-width: 800px;   /* Change to 600px or 1000px */
}
```

## Grid Layouts

**Architecture projects grid:**
```css
.projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 3rem;
}
```

2 columns max: `minmax(500px, 1fr)`
4 columns max: `minmax(300px, 1fr)`
Smaller gap: `gap: 2rem;`

**Photography grid:**
```css
.photo-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
}
```

Smaller photos: `minmax(250px, 1fr)`
Larger photos: `minmax(400px, 1fr)`

## Animation Speed

**File:** `styles.css` (line 8)

```css
:root {
    --transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
```

Faster: `0.2s cubic-bezier(0.4, 0, 0.2, 1)`
Slower: `0.6s cubic-bezier(0.4, 0, 0.2, 1)`
Linear: `0.3s ease`

## Text in HTML

**Your name:** `index.html` line 7, 73, 155

**Bio text:** `index.html` lines 157-165

**Contact info:** `index.html` lines 195-196

**Social links:** `index.html` lines 201-218

## Projects Data

**File:** `script.js` starting at line 2

```javascript
{
    id: 1,                           // Unique number
    title: "Project Name",           // Project title
    location: "City, Country",       // Location
    year: "2024",                    // Year completed
    type: "Residential",             // Type of project
    area: "450 m²",                  // Size
    description: "...",              // Description
    images: [                        // Array of image paths
        "assets/architecture/p1-1.jpg",
        "assets/architecture/p1-2.jpg"
    ]
}
```

## Photos Data

**File:** `script.js` starting at line 52

```javascript
{
    id: 1,                                      // Unique number
    src: "assets/photography/photo1.jpg",       // Image path
    category: "architectural",                  // Category
    title: "Photo Title"                        // Caption
}
```

**Available categories:**
- `architectural`
- `landscape`
- `urban`
- `interior`

**To add new category:**
1. Add button in `index.html` line 129
2. Use category name in photos data

## Hover Effects

**Image zoom on hover:**
```css
.project-card:hover img {
    transform: scale(1.05);  /* Change to 1.1 for more zoom */
}
```

**Link underline:**
```css
.contact-info a:hover {
    border-bottom-color: var(--color-accent);
}
```

## Button Styles

**File:** `styles.css`

Download button (line 338):
```css
.btn-download {
    padding: 1rem 2rem;              /* Size */
    border: 1px solid var(--color-text);
    background-color: transparent;    /* Or: var(--color-accent) */
}
```

Submit button (line 398):
```css
.btn-submit {
    background-color: var(--color-text);  /* Solid background */
    color: var(--color-bg);
}
```

## Mobile Breakpoints

**File:** `styles.css` bottom section

Current breakpoints:
- 1024px - Tablets
- 768px - Small tablets/large phones
- 480px - Phones

To adjust:
```css
@media (max-width: 768px) {
    /* Your mobile styles */
}
```

## Quick Edits

**Hide sections:**
Comment out in `index.html`:
```html
<!-- 
<section id="photography" class="section">
    ...
</section>
-->
```

**Change section order:**
Cut and paste entire `<section>` blocks

**Disable animations:**
In `styles.css`, find animations and set to 0s:
```css
--transition: 0s;
```

**Change hero background:**
```css
.hero-section {
    background: linear-gradient(135deg, #fafaf8 0%, #f0ede8 100%);
}
```

Solid color: `background: #fafaf8;`
Image: `background: url('assets/hero-bg.jpg') center/cover;`

## Contact Form Actions

**Formspree:**
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

**Netlify:**
```html
<form method="POST" data-netlify="true" name="contact">
```

**Custom email script:**
Update `initContactForm()` function in `script.js`

## Pro Tips

1. **Test changes locally** before pushing to GitHub
2. **Use browser DevTools** to experiment with CSS
3. **Backup before major changes**: `git commit -m "backup before changes"`
4. **One change at a time** - easier to debug
5. **Mobile first** - always test on phone

## Undo Changes

If something breaks:
```bash
git checkout -- filename.css    # Undo changes to one file
git reset --hard HEAD          # Undo all changes
```

## Common CSS Selectors

Target specific elements:
```css
.section:first-child { }        /* First section */
.section:last-child { }         /* Last section */
.project-card:nth-child(2) { }  /* Second project */
.nav-link:hover { }             /* Link on hover */
```

---

**Remember:** Test locally, then push to GitHub!

**Need help?** Check README.md for detailed explanations.
