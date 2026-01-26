import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function convertToWebP(inputPath, outputPath) {
  try {
    const stats = await fs.promises.stat(inputPath);
    if (!stats.isFile()) return;
    
    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);
    console.log(`✓ Converted: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`✗ Error converting ${inputPath}:`, error.message);
  }
}

async function processDirectory(dir) {
  try {
    const files = await fs.promises.readdir(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = await fs.promises.stat(filePath);
      
      if (stat.isDirectory()) {
        await processDirectory(filePath);
      } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
        const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        
        // Skip if WebP already exists and is newer
        try {
          const webpStat = await fs.promises.stat(webpPath);
          const inputStat = await fs.promises.stat(filePath);
          if (webpStat.mtime > inputStat.mtime) {
            console.log(`⊘ Skipped (WebP newer): ${path.basename(filePath)}`);
            continue;
          }
        } catch {
          // WebP doesn't exist, proceed with conversion
        }
        
        await convertToWebP(filePath, webpPath);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dir}:`, error.message);
  }
}

// Process all images in public/assets/images
const imagesDir = path.join(__dirname, '..', 'public', 'assets', 'images');
console.log(`Starting WebP conversion for images in: ${imagesDir}\n`);

processDirectory(imagesDir)
  .then(() => {
    console.log('\n✓ WebP conversion complete!');
  })
  .catch((error) => {
    console.error('Error during conversion:', error);
    process.exit(1);
  });
