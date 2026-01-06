# Architecture & Photography Portfolio

A minimalist, single-page portfolio website designed for architects and photographers. Built with pure HTML, CSS, and vanilla JavaScript - perfect for hosting on GitHub Pages.

## Features

- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Clean, minimalist aesthetic inspired by Scandinavian design
- 🖼️ Project gallery with modal view
- 📸 Photography grid with category filtering
- ✨ Smooth scroll navigation
- 🎭 Image lightbox with keyboard navigation
- 📝 Contact form (ready for integration)
- 🚀 Static site - no build process required
- 💨 Fast loading and performance optimized

## Demo

View the live site: `https://yourusername.github.io/portfolio`

## Quick Start

### 1. Fork or Clone This Repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Customize Content

#### Update Personal Information

Edit `index.html`:
- Replace "Your Name" with your actual name
- Update contact email and phone number
- Add your social media links
- Update the About section with your bio

#### Add Your Projects

Edit `script.js` and modify the `architectureProjects` array:

```javascript
const architectureProjects = [
    {
        id: 1,
        title: "Your Project Title",
        location: "City, Country",
        year: "2024",
        type: "Residential/Commercial/Public",
        area: "XXX m²",
        description: "Your project description...",
        images: [
            "assets/architecture/your-project-1.jpg",
            "assets/architecture/your-project-2.jpg",
            "assets/architecture/your-project-3.jpg"
        ]
    },
    // Add more projects...
];
```

#### Add Your Photos

Edit `script.js` and modify the `photographyImages` array:

```javascript
const photographyImages = [
    {
        id: 1,
        src: "assets/photography/photo1.jpg",
        category: "architectural", // or "landscape", "urban", "interior"
        title: "Photo Title"
    },
    // Add more photos...
];
```

#### Customize Colors

Edit `styles.css` to change the color scheme:

```css
:root {
    --color-bg: #fafaf8;        /* Background color */
    --color-text: #1a1a1a;      /* Text color */
    --color-accent: #8b6f47;    /* Accent color (links, highlights) */
    --color-border: #d4d4d0;    /* Border color */
}
```

### 3. Add Your Images

Create the following folder structure:

```
portfolio/
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── profile.jpg (your profile photo)
│   ├── cv.pdf (optional - your CV)
│   ├── architecture/
│   │   ├── project1-1.jpg
│   │   ├── project1-2.jpg
│   │   └── ... (your architecture photos)
│   └── photography/
│       ├── photo1.jpg
│       ├── photo2.jpg
│       └── ... (your photography work)
```

**Image Recommendations:**
- Architecture: 1600x1200px or similar 4:3 ratio
- Photography: Various sizes work (masonry grid adapts)
- Profile photo: 800x1000px or 3:4 ratio
- Format: JPG or PNG
- Keep file sizes under 500KB for fast loading

### 4. Deploy to GitHub Pages

1. Create a new repository on GitHub named `portfolio` (or `yourusername.github.io` for a user site)
2. Push your files:

```bash
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings
   - Navigate to "Pages" section
   - Under "Source", select "main" branch
   - Click Save

Your site will be live at: `https://yourusername.github.io/portfolio/`

## Customization Guide

### Changing Fonts

The site uses Google Fonts (Playfair Display and Work Sans). To change fonts:

1. Visit [Google Fonts](https://fonts.google.com/)
2. Select your fonts
3. Update the import in `styles.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;700&display=swap');
```

4. Update the CSS variables:

```css
:root {
    --font-display: 'YourDisplayFont', serif;
    --font-body: 'YourBodyFont', sans-serif;
}
```

### Adding More Photo Categories

1. Add filter button in `index.html`:

```html
<button class="filter-btn" data-filter="yourcategory">Your Category</button>
```

2. Tag photos with the category in `script.js`:

```javascript
{
    id: 1,
    src: "assets/photography/photo1.jpg",
    category: "yourcategory",
    title: "Photo Title"
}
```

### Contact Form Integration

The contact form currently shows a success message. To make it functional:

**Option 1: Formspree (Easiest)**
1. Sign up at [Formspree.io](https://formspree.io/)
2. Update the form in `index.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
```

**Option 2: Netlify Forms**
1. Deploy to Netlify instead of GitHub Pages
2. Add `netlify` attribute to form:

```html
<form name="contact" method="POST" data-netlify="true" class="contact-form">
```

**Option 3: EmailJS**
1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Follow their integration guide
3. Modify the form submission handler in `script.js`

### SEO Optimization

1. Update `index.html` meta tags:

```html
<meta name="description" content="Portfolio of [Your Name] - Architect & Photographer">
<meta name="keywords" content="architecture, photography, design, [your name]">
<meta name="author" content="Your Name">

<!-- Open Graph for social sharing -->
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Architecture & Photography Portfolio">
<meta property="og:image" content="https://yourusername.github.io/portfolio/assets/og-image.jpg">
<meta property="og:url" content="https://yourusername.github.io/portfolio/">
```

2. Add a `favicon.ico` file to the root directory

### Adding Google Analytics

Add before closing `</head>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_TRACKING_ID');
</script>
```

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images:**
   - Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
   - Convert to WebP format for better compression
   - Use responsive images with `srcset`

2. **Lazy Loading:**
   - Already implemented via Intersection Observer
   - Images load as you scroll

3. **Caching:**
   - GitHub Pages automatically caches static files
   - Use cache-busting for updates: `style.css?v=2`

## Troubleshooting

### Images Not Loading
- Check file paths are correct (case-sensitive)
- Ensure images are in the `assets` folder
- Verify images are pushed to GitHub

### Styles Not Applying
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check console for errors (F12 in browser)

### GitHub Pages Not Updating
- Changes can take 1-5 minutes to deploy
- Try clearing cache or opening in incognito mode

## License

Free to use for personal and commercial projects. Attribution appreciated but not required.

## Credits

- Design inspiration: Minimalist Scandinavian portfolio sites
- Fonts: Google Fonts (Playfair Display, Work Sans)
- Icons: SVG icons (embedded)

## Support

For issues or questions:
1. Check this README first
2. Search existing GitHub issues
3. Create a new issue with details

---

**Made with ❤️ for architects and photographers**
