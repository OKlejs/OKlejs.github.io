# Quick Setup Guide for Your Portfolio

## What You Have

Your complete static portfolio website with:
- ✅ Single-page layout with sticky side navigation
- ✅ Architecture project gallery with modal views
- ✅ Photography section with filtering
- ✅ About section
- ✅ Contact form
- ✅ Fully responsive design
- ✅ Ready for GitHub Pages hosting (100% free!)

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # All functionality
├── README.md           # Full documentation
├── .gitignore         # Git ignore file
└── assets/            # Your images go here
    ├── README.md      # Image guide
    ├── architecture/  # Project photos
    ├── photography/   # Photography work
    ├── profile.jpg    # Your profile photo
    └── cv.pdf         # Your CV (optional)
```

## Next Steps (5 Minutes)

### 1. Personalize the Content (2 min)

Open `index.html` and replace:
- Line 7: "Your Name" with your actual name
- Line 73: "YN" with your initials
- Lines 155-165: Your bio and education info
- Lines 195-196: Your email and phone number
- Lines 201-218: Your social media links

### 2. Add Your Projects (2 min)

Open `script.js` and find the `architectureProjects` array (line 2):
- Replace the sample projects with your own
- Update titles, locations, years, descriptions
- Don't worry about images yet - placeholders will show

### 3. Add Your Photos (1 min)

In `script.js`, find the `photographyImages` array:
- Replace with your photo information
- Assign categories: architectural, landscape, urban, interior
- Placeholders will show until you add real images

### 4. Customize Colors (Optional)

Open `styles.css` and edit lines 4-7:
```css
--color-bg: #fafaf8;        /* Background */
--color-text: #1a1a1a;      /* Text */
--color-accent: #8b6f47;    /* Accent color */
--color-border: #d4d4d0;    /* Borders */
```

## Deploy to GitHub Pages (10 Minutes)

### Step 1: Create GitHub Account
- Go to [github.com](https://github.com) and sign up (if you don't have one)

### Step 2: Create New Repository
1. Click the "+" icon → "New repository"
2. Name it: `portfolio` (or `yourusername.github.io` for custom domain)
3. Set to **Public**
4. Don't add README, .gitignore, or license
5. Click "Create repository"

### Step 3: Upload Files
**Easy Method (via GitHub website):**
1. Click "uploading an existing file"
2. Drag all your portfolio files
3. Commit changes

**Pro Method (via terminal):**
```bash
# Navigate to your portfolio folder
cd /path/to/portfolio

# Initialize git
git init
git add .
git commit -m "Initial portfolio"

# Connect to GitHub
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Click **Save**
5. Wait 2-3 minutes

🎉 Your site is live at: `https://yourusername.github.io/portfolio/`

## Adding Your Images

### Recommended Sizes:
- **Profile photo**: 800x1000px (3:4 ratio)
- **Architecture**: 1600x1200px (4:3 ratio)
- **Photography**: Any size (grid adapts)
- **All images**: Keep under 500KB

### Where to Put Them:
```
assets/
├── profile.jpg
├── architecture/
│   ├── project1-1.jpg
│   ├── project1-2.jpg
│   └── ...
└── photography/
    ├── photo1.jpg
    ├── photo2.jpg
    └── ...
```

### Image Optimization Tools:
- [TinyPNG](https://tinypng.com/) - Compress images
- [Squoosh](https://squoosh.app/) - Resize and compress
- Photoshop/GIMP - Professional editing

### After Adding Images:
```bash
git add assets/
git commit -m "Add portfolio images"
git push
```

Wait 2-3 minutes and refresh your site!

## Testing Your Site

Before deploying, test locally:
1. Double-click `index.html` to open in browser
2. Check all sections scroll correctly
3. Click on projects - modals should open
4. Click on photos - lightbox should work
5. Test on mobile (browser dev tools → device toolbar)

## Contact Form Setup

The form currently shows a success message. To make it actually send emails:

**Option 1: Formspree (Easiest - Free tier available)**
1. Sign up at [formspree.io](https://formspree.io/)
2. Create a form and get your form ID
3. In `index.html` line 183, update the form tag:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
```

**Option 2: EmailJS (Free tier: 200 emails/month)**
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Follow their setup guide
3. Add their SDK and modify `script.js`

## Common Issues

### "My images aren't showing"
- Check file names match exactly (case-sensitive!)
- Verify images are in the `assets` folder
- Push images to GitHub: `git add assets/ && git commit -m "Add images" && git push`

### "Changes aren't showing on my live site"
- GitHub Pages takes 2-5 minutes to update
- Try hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache

### "Site looks broken on mobile"
- Make sure viewport meta tag is in `index.html` (it is!)
- Test using Chrome DevTools device emulator

## Customization Ideas

1. **Change fonts**: Visit [Google Fonts](https://fonts.google.com/)
2. **Add animations**: CSS animations are already included
3. **Add more sections**: Copy/paste section HTML
4. **Change layout**: Modify CSS grid properties
5. **Add blog**: Consider adding a `/blog` folder

## Getting Help

1. Check `README.md` for detailed documentation
2. Check browser console (F12) for errors
3. Search the issue on Google/StackOverflow
4. Ask for help on web development forums

## Pro Tips

1. **Optimize images** before uploading (use TinyPNG)
2. **Use descriptive names** for projects and photos
3. **Update regularly** - add new work as you create it
4. **Test on multiple devices** - phone, tablet, desktop
5. **Share your link** on social media and CV
6. **Custom domain**: Buy a domain and point it to GitHub Pages

## Your Checklist

- [ ] Personalize name and bio in `index.html`
- [ ] Update contact info and social links
- [ ] Replace sample projects in `script.js`
- [ ] Replace sample photos in `script.js`
- [ ] Optimize and add your images to `assets/`
- [ ] Test locally by opening `index.html`
- [ ] Create GitHub repository
- [ ] Upload files to GitHub
- [ ] Enable GitHub Pages
- [ ] Set up contact form (Formspree/EmailJS)
- [ ] Add custom domain (optional)
- [ ] Share your portfolio URL!

---

**Need the full documentation?** Check `README.md`

**Questions?** Feel free to ask for help!

**Good luck with your portfolio! 🚀**
