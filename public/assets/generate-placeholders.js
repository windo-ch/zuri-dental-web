// Generate a simple placeholder image for team members
const fs = require('fs');
const { createCanvas } = require('canvas');

// Create a placeholder person image
function createPersonPlaceholder() {
  const canvas = createCanvas(200, 200);
  const ctx = canvas.getContext('2d');
  
  // Fill background
  ctx.fillStyle = '#f3f4f6';
  ctx.fillRect(0, 0, 200, 200);
  
  // Draw person silhouette
  ctx.fillStyle = '#9ca3af';
  
  // Head
  ctx.beginPath();
  ctx.arc(100, 70, 40, 0, Math.PI * 2);
  ctx.fill();
  
  // Body
  ctx.beginPath();
  ctx.moveTo(60, 120);
  ctx.lineTo(140, 120);
  ctx.lineTo(150, 200);
  ctx.lineTo(50, 200);
  ctx.closePath();
  ctx.fill();
  
  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('./public/assets/placeholder-person.jpg', buffer);
  console.log('Created placeholder person image');
}

// Create partner logo placeholders
function createPartnerLogos() {
  for (let i = 1; i <= 6; i++) {
    const canvas = createCanvas(200, 80);
    const ctx = canvas.getContext('2d');
    
    // Fill background
    ctx.fillStyle = '#e5e7eb';
    ctx.fillRect(0, 0, 200, 80);
    
    // Add text
    ctx.fillStyle = '#6b7280';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Partner ${i}`, 100, 40);
    
    // Save the image
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(`./public/assets/logos/partner-${i}.png`, buffer);
    console.log(`Created partner logo ${i}`);
  }
}

// Run the functions
createPersonPlaceholder();
createPartnerLogos(); 