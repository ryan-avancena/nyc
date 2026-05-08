const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public', 'images', 'nyc');

async function compressImages() {
  const files = fs.readdirSync(dir).filter(f => f.toLowerCase().endsWith('.png'));
  
  console.log(`Found ${files.length} PNG files. Compressing...`);

  for (const file of files) {
    const inputPath = path.join(dir, file);
    const outputPath = path.join(dir, file.replace(/\.png$/i, '.jpg'));
    
    console.log(`Processing ${file}...`);
    try {
      // Resize to a reasonable max dimension (e.g., 1600px width/height) and convert to JPG
      await sharp(inputPath)
        .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 80 }) // 80 quality is a great balance of size and visual quality
        .toFile(outputPath);
      
      console.log(`✅ Saved as ${path.basename(outputPath)}`);
      
      // Delete the original massive PNG file to save space
      fs.unlinkSync(inputPath);
    } catch (err) {
      console.error(`❌ Error processing ${file}:`, err.message);
    }
  }
  console.log('\nAll images compressed and originals removed!');
}

compressImages();
