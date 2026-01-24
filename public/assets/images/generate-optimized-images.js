import fs from 'fs';
import { createCanvas } from 'canvas';

// Create hero background images in WebP format
function createHeroImages() {
  // Small image (mobile)
  const canvasSm = createCanvas(640, 960);
  const ctxSm = canvasSm.getContext('2d');
  createDentalHeroBackground(ctxSm, 640, 960, 'sm');
  fs.writeFileSync('./hero-sm.webp', canvasSm.toBuffer('image/webp', { quality: 0.8 }));
  console.log('Created small hero image');
  
  // Medium image (tablet)
  const canvasMd = createCanvas(1024, 1366);
  const ctxMd = canvasMd.getContext('2d');
  createDentalHeroBackground(ctxMd, 1024, 1366, 'md');
  fs.writeFileSync('./hero-md.webp', canvasMd.toBuffer('image/webp', { quality: 0.8 }));
  console.log('Created medium hero image');
  
  // Large image (desktop)
  const canvasLg = createCanvas(1920, 1080);
  const ctxLg = canvasLg.getContext('2d');
  createDentalHeroBackground(ctxLg, 1920, 1080, 'lg');
  fs.writeFileSync('./hero-lg.webp', canvasLg.toBuffer('image/webp', { quality: 0.8 }));
  console.log('Created large hero image');
}

// Helper function to create a dental-themed background
function createDentalHeroBackground(ctx, width, height, size) {
  // Gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#1a365d'); // Dental blue dark
  gradient.addColorStop(1, '#2c5282'); // Dental blue medium
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Add some "dental" looking elements
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  
  // Add circles/bubbles resembling teeth
  const numElements = size === 'sm' ? 20 : size === 'md' ? 40 : 60;
  for (let i = 0; i < numElements; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const radius = Math.random() * 60 + 20;
    
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Add some lines resembling dental tools
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.lineWidth = 3;
  
  for (let i = 0; i < numElements / 2; i++) {
    const x1 = Math.random() * width;
    const y1 = Math.random() * height;
    const length = Math.random() * 100 + 50;
    const angle = Math.random() * Math.PI * 2;
    
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 + Math.cos(angle) * length, y1 + Math.sin(angle) * length);
    ctx.stroke();
  }
  
  // Overlay with a subtle texture
  for (let i = 0; i < width; i += 4) {
    for (let j = 0; j < height; j += 4) {
      if (Math.random() > 0.5) {
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.02})`;
        ctx.fillRect(i, j, 4, 4);
      }
    }
  }
}

// Run the function
createHeroImages(); 