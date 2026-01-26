# Image Optimization Scripts

## WebP Conversion

Convert all JPEG and PNG images to WebP format for better compression and faster loading.

### Usage

```bash
npm run convert:webp
```

This script will:
- Scan all images in `public/assets/images/`
- Convert `.jpg`, `.jpeg`, and `.png` files to `.webp` format
- Skip files if WebP version already exists and is newer
- Preserve original files as fallbacks

### Requirements

- Node.js
- `sharp` package (installed as dev dependency)

### Notes

- WebP files are typically 25-35% smaller than JPEG/PNG
- Original files are kept for browser fallback support
- The script uses quality 85 and effort 6 for optimal balance
