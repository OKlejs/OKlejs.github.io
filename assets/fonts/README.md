# Neue Regrade Font Installation

## Required Font Files

Place your Neue Regrade variable font files in this folder with the following naming:

### If you have Variable Font files:
- `NeueRegrade-Variable.woff2`
- `NeueRegrade-Variable.woff`
- `NeueRegrade-Variable.ttf`
- `NeueRegrade-VariableItalic.woff2`
- `NeueRegrade-VariableItalic.woff`
- `NeueRegrade-VariableItalic.ttf`

### Alternative: If you have individual weight files:
Rename them to match these patterns:
- `NeueRegrade-Regular.woff2`
- `NeueRegrade-Regular.woff`
- `NeueRegrade-Regular.ttf`
- `NeueRegrade-Italic.woff2`
- `NeueRegrade-Italic.woff`
- `NeueRegrade-Italic.ttf`
- `NeueRegrade-Bold.woff2`
- `NeueRegrade-Bold.woff`
- `NeueRegrade-Bold.ttf`
- `NeueRegrade-BoldItalic.woff2`
- `NeueRegrade-BoldItalic.woff`
- `NeueRegrade-BoldItalic.ttf`

## Converting Your Font Files

If you only have .ttf or .otf files, convert them to web formats:

### Online Converters:
1. **Font Squirrel Webfont Generator** (recommended)
   - https://www.fontsquirrel.com/tools/webfont-generator
   - Upload your font
   - Choose "Optimal" settings
   - Download and extract

2. **CloudConvert**
   - https://cloudconvert.com/ttf-to-woff2
   - Convert to both .woff2 and .woff formats

## File Structure

Your `assets/fonts` folder should look like:
```
assets/fonts/
├── README.md (this file)
├── NeueRegrade-Variable.woff2
├── NeueRegrade-Variable.woff
├── NeueRegrade-Variable.ttf
├── NeueRegrade-VariableItalic.woff2
├── NeueRegrade-VariableItalic.woff
└── NeueRegrade-VariableItalic.ttf
```

## Testing

After adding your fonts:
1. Open `index.html` in your browser
2. Open DevTools (F12)
3. Check the Network tab
4. Look for font files loading
5. If you see 404 errors, check the filenames match exactly

## Fallback

If fonts don't load, the site will use web-safe fallbacks:
- Neue Regrade → Arial, Helvetica, sans-serif
- Crimson Pro (About section) → Georgia, serif

## Need Help?

If you're having trouble:
1. Check that filenames match exactly (case-sensitive)
2. Make sure files are in `assets/fonts/` folder
3. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
4. Check browser console for errors
