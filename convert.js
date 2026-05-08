const fs = require('fs');
const path = require('path');
const heicConvert = require('heic-convert');

const inputDir = path.join(__dirname, 'public', 'images', 'nyc');
const outputDir = inputDir;

async function run() {
  const files = fs.readdirSync(inputDir).filter(f => f.toLowerCase().endsWith('.heic'));
  
  console.log(`Found ${files.length} HEIC files to convert.`);

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace(/\.heic$/i, '.png'));
    
    if (fs.existsSync(outputPath)) {
      console.log(`Skipping ${file}, PNG already exists.`);
      continue;
    }

    console.log(`Converting ${file}...`);
    try {
      const inputBuffer = fs.readFileSync(inputPath);
      const outputBuffer = await heicConvert({
        buffer: inputBuffer,
        format: 'PNG'
      });
      fs.writeFileSync(outputPath, outputBuffer);
      console.log(`✅ Successfully converted to ${path.basename(outputPath)}`);
    } catch (err) {
      console.error(`❌ Error converting ${file}:`, err.message);
    }
  }
  console.log('\nAll conversions finished!');
}

run();
