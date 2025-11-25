# Assets Folder Guide

## Folder Structure

```
assets/
├── profile.jpg              # Your profile photo for About section
├── cv.pdf                   # Your CV (optional)
├── architecture/
│   ├── project1-1.jpg       # First image of project 1
│   ├── project1-2.jpg       # Second image of project 1
│   ├── project1-3.jpg       # Third image of project 1
│   ├── project2-1.jpg
│   ├── project2-2.jpg
│   └── ...                  # Add more project images
└── photography/
    ├── photo1.jpg           # Individual photography work
    ├── photo2.jpg
    ├── photo3.jpg
    └── ...                  # Add more photos
```

## Image Requirements

### Profile Photo
- **Filename**: `profile.jpg`
- **Size**: 800x1000px (or 3:4 ratio)
- **Format**: JPG or PNG
- **Max file size**: 300KB

### Architecture Projects
- **Naming**: `projectX-Y.jpg` where X is project number, Y is image number
- **Size**: 1600x1200px (4:3 ratio recommended)
- **Format**: JPG
- **Max file size**: 500KB per image
- **Number of images**: 2-5 images per project

### Photography
- **Naming**: `photoX.jpg` where X is a number
- **Size**: Various (masonry grid adapts to any size)
- **Format**: JPG or PNG
- **Max file size**: 500KB per image
- **Recommended**: Mix of portrait and landscape orientations

## Optimization Tips

1. **Resize images** before adding them:
   - Online tools: [TinyPNG](https://tinypng.com/), [Squoosh](https://squoosh.app/)
   - Desktop: Photoshop, GIMP, Preview (Mac)

2. **Compress** without losing too much quality:
   - JPG: 80-85% quality is usually perfect
   - PNG: Use for images that need transparency

3. **Batch processing**:
   - Use tools like ImageMagick for bulk resizing
   - Example command: `magick mogrify -resize 1600x1200 -quality 85 *.jpg`

4. **File naming**:
   - Use lowercase
   - No spaces (use hyphens: `project-name-1.jpg`)
   - Be consistent

## Adding Images

### Step 1: Prepare Your Images
- Collect all your photos
- Rename them according to the naming convention above
- Optimize file sizes

### Step 2: Place in Correct Folders
- Profile photo → `assets/profile.jpg`
- Architecture → `assets/architecture/`
- Photography → `assets/photography/`

### Step 3: Update script.js
- Update the `architectureProjects` array with correct image paths
- Update the `photographyImages` array with correct image paths

### Step 4: Test Locally
- Open `index.html` in a browser
- Check that all images load correctly
- Verify image quality and layout

### Step 5: Push to GitHub
```bash
git add assets/
git commit -m "Add portfolio images"
git push
```

## Placeholder Images

While developing, the site uses placeholder images from placeholder.com. These will show up with gray backgrounds and text. Replace them with your actual images before launching.

## WebP Format (Optional)

For even better performance, consider using WebP format:

1. Convert images to WebP (use [Squoosh](https://squoosh.app/))
2. Update image extensions in `script.js`:
   - Change `.jpg` to `.webp`
3. Provide fallbacks for older browsers if needed

## Common Issues

### Images Not Showing
- Check file paths match exactly (case-sensitive on Linux/GitHub)
- Ensure images are actually in the folders
- Check browser console for 404 errors

### Images Too Large/Small
- Architecture images should fill the card (4:3 ratio)
- Photography images can be any size but keep dimensions reasonable

### Slow Loading
- Compress images more aggressively
- Ensure no image is over 500KB
- Consider using WebP format

## Quick Reference

| Image Type | Location | Size | Format | Max Size |
|-----------|----------|------|--------|----------|
| Profile | `assets/profile.jpg` | 800x1000px | JPG/PNG | 300KB |
| Architecture | `assets/architecture/` | 1600x1200px | JPG | 500KB |
| Photography | `assets/photography/` | Varies | JPG/PNG | 500KB |
| CV | `assets/cv.pdf` | - | PDF | 2MB |
