# Portfolio Launch Checklist

Use this checklist to make sure everything is set up correctly before launching your portfolio.

## Phase 1: Content Setup ⚙️

### Personal Information
- [ ] Updated your name in `index.html` (line 7 and 73)
- [ ] Added your initials/logo in navigation (line 73)
- [ ] Written your bio in About section (lines 157-165)
- [ ] Added your education and recognition
- [ ] Updated contact email (line 195)
- [ ] Updated phone number (line 196)
- [ ] Added social media links (Instagram, LinkedIn, Behance)
- [ ] Social links open in new tabs (`target="_blank"`)

### Projects
- [ ] Replaced sample architecture projects in `script.js`
- [ ] Each project has: title, location, year, type, area
- [ ] Each project has a description (2-3 sentences)
- [ ] Image paths are correct (will add images later)
- [ ] At least 3-6 projects added

### Photography
- [ ] Replaced sample photos in `script.js`
- [ ] Each photo has: src, category, title
- [ ] Categories match your filter buttons
- [ ] Mix of different categories
- [ ] At least 8-12 photos added

### Styling (Optional)
- [ ] Chosen your color scheme (`styles.css` lines 4-7)
- [ ] Selected your fonts or kept defaults
- [ ] Adjusted spacing if needed
- [ ] Tested different colors in browser

## Phase 2: Images 📸

### Preparation
- [ ] Collected all your best architecture photos
- [ ] Collected all your best photography work
- [ ] Selected a professional profile photo
- [ ] Have your CV/resume as PDF (optional)

### Optimization
- [ ] Resized architecture images to ~1600x1200px
- [ ] Resized profile photo to ~800x1000px
- [ ] Compressed all images (under 500KB each)
- [ ] Used TinyPNG or similar tool
- [ ] Renamed files consistently (lowercase, no spaces)

### Organization
- [ ] Created `assets/` folder
- [ ] Created `assets/architecture/` subfolder
- [ ] Created `assets/photography/` subfolder
- [ ] Placed profile photo as `assets/profile.jpg`
- [ ] Placed CV as `assets/cv.pdf` (if applicable)
- [ ] Named architecture images: `project1-1.jpg`, `project1-2.jpg`, etc.
- [ ] Named photography images: `photo1.jpg`, `photo2.jpg`, etc.
- [ ] Image filenames match paths in `script.js`

## Phase 3: Local Testing 🧪

### Basic Functionality
- [ ] Opened `index.html` in Chrome/Firefox
- [ ] All sections load properly
- [ ] Side navigation is visible and works
- [ ] Smooth scrolling between sections works
- [ ] Hero section displays correctly
- [ ] Profile image loads in About section

### Architecture Section
- [ ] All project cards display (with images or placeholders)
- [ ] Clicking a project opens the modal
- [ ] Modal shows project images
- [ ] Modal displays project details correctly
- [ ] Left/right arrows navigate images
- [ ] Close button (X) works
- [ ] Clicking outside modal closes it
- [ ] ESC key closes modal

### Photography Section
- [ ] All photos display in grid
- [ ] Filter buttons work (All, Architectural, etc.)
- [ ] Clicking a photo opens lightbox
- [ ] Lightbox navigation works (arrows)
- [ ] Close button works
- [ ] ESC key closes lightbox
- [ ] Photo captions display

### Contact Section
- [ ] Form displays correctly
- [ ] All form fields are present
- [ ] Submit button works (shows success message)
- [ ] Email link is clickable
- [ ] Phone link is clickable (on mobile)
- [ ] Social media icons are visible
- [ ] Social links work and open in new tabs

### Mobile Testing
- [ ] Opened DevTools (F12)
- [ ] Switched to mobile view
- [ ] Hamburger menu appears on mobile
- [ ] Mobile menu opens/closes
- [ ] All sections scroll properly
- [ ] Images scale correctly
- [ ] Text is readable (not too small)
- [ ] Buttons are tappable (not too small)
- [ ] Forms work on mobile
- [ ] Tested on iPhone size (375px)
- [ ] Tested on Android size (360px)
- [ ] Tested on tablet size (768px)

### Browser Testing
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari (if on Mac)
- [ ] Tested in Edge
- [ ] No console errors (F12 → Console)

## Phase 4: GitHub Setup 🚀

### Account & Repository
- [ ] Created GitHub account (or logged in)
- [ ] Created new repository named "portfolio"
- [ ] Repository is set to Public
- [ ] Repository created without README/license

### File Upload
- [ ] All files uploaded to repository:
  - [ ] index.html
  - [ ] styles.css
  - [ ] script.js
  - [ ] .gitignore
  - [ ] README.md
  - [ ] assets/ folder with all images
- [ ] All files committed
- [ ] No errors in upload

### GitHub Pages Setup
- [ ] Went to repository Settings
- [ ] Found Pages section
- [ ] Selected "main" branch as source
- [ ] Clicked Save
- [ ] Waited 3-5 minutes for deployment
- [ ] Visited live URL: `https://username.github.io/portfolio/`
- [ ] Site loads without errors

## Phase 5: Live Site Testing 🌐

### Full Site Check
- [ ] All sections display correctly online
- [ ] All images load (no broken images)
- [ ] Navigation works smoothly
- [ ] Projects open in modals
- [ ] Photos open in lightbox
- [ ] Contact form shows success message
- [ ] All links work
- [ ] Site looks good on desktop
- [ ] Site looks good on mobile (test on real phone!)

### Performance
- [ ] Site loads quickly (under 3 seconds)
- [ ] Images load without excessive delay
- [ ] No lag when scrolling
- [ ] Animations are smooth

### SEO & Metadata
- [ ] Page title is correct (browser tab)
- [ ] Added meta description (optional)
- [ ] Added Open Graph tags for social sharing (optional)
- [ ] Added favicon (optional)

## Phase 6: Contact Form Integration 📧

### Choose Service
- [ ] Decided on form service (Formspree, Netlify Forms, or EmailJS)
- [ ] Signed up for chosen service
- [ ] Got form endpoint or ID

### Formspree Setup (If Using)
- [ ] Signed up at formspree.io
- [ ] Created new form
- [ ] Got form ID
- [ ] Updated form action in `index.html`
- [ ] Tested form submission
- [ ] Received test email
- [ ] Added reCAPTCHA (optional)

### Testing
- [ ] Submitted test message through form
- [ ] Received email notification
- [ ] Form shows success message
- [ ] All form fields work correctly

## Phase 7: Final Polish ✨

### Content Review
- [ ] Checked all text for typos
- [ ] Verified all project descriptions are clear
- [ ] Confirmed all information is up-to-date
- [ ] Proofread bio and about section
- [ ] Double-checked contact information

### Design Review
- [ ] Colors are consistent throughout
- [ ] Fonts are readable and professional
- [ ] Spacing looks balanced
- [ ] Images are high quality
- [ ] No pixelated or blurry images

### Accessibility
- [ ] All images have alt text (good practice)
- [ ] Links are keyboard accessible (Tab key)
- [ ] Forms work with keyboard
- [ ] Color contrast is sufficient
- [ ] Text is readable (min 16px for body)

## Phase 8: Launch & Share 🎉

### Domain (Optional)
- [ ] Purchased custom domain (optional)
- [ ] Connected domain to GitHub Pages (optional)
- [ ] Updated DNS settings (optional)
- [ ] SSL certificate active (automatic with GitHub)

### Announcement
- [ ] Updated LinkedIn with portfolio link
- [ ] Added link to email signature
- [ ] Shared on Instagram/social media
- [ ] Updated CV/resume with link
- [ ] Added to portfolio platforms (Behance, etc.)
- [ ] Told friends and colleagues

### Analytics (Optional)
- [ ] Added Google Analytics
- [ ] Added basic tracking
- [ ] Set up goals (optional)

## Maintenance 📅

### Regular Updates
- [ ] Plan to add new projects quarterly
- [ ] Update photography section monthly
- [ ] Keep bio and CV current
- [ ] Test site every few months
- [ ] Check for broken links

### Backup
- [ ] Keep local copy of all files
- [ ] Back up original high-res images separately
- [ ] Document any customizations made

---

## Quick Reference

**Live URL:** `https://[username].github.io/portfolio/`

**Repository:** `https://github.com/[username]/portfolio`

**Update site:**
```bash
git add .
git commit -m "Update portfolio"
git push
```

**Contact form:** [Your form service]

**Last updated:** [Date]

---

## Need Help?

- 📖 Read `README.md` for detailed docs
- ⚙️ Check `CUSTOMIZATION.md` for quick edits
- 🚀 Review `SETUP.md` for setup guide
- 🔍 Check browser console (F12) for errors
- 💬 Ask on web development forums

---

**Congratulations on launching your portfolio! 🎊**

Print this checklist and check off items as you complete them!
