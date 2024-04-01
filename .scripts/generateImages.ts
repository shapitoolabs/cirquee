const fs = require('fs');
const path = require('path');

// Path to the image directory
const imagesDirPath = path.join(__dirname, '../assets/images');
// Target file for export
const outputPath = path.join(__dirname, '../src/theme/images.ts');

// Function to load all PNG files in a directory
const loadPngFiles = (dirPath) => {
  // Load all files in the directory
  return fs
    .readdirSync(dirPath)
    .filter((file) => path.extname(file).toLowerCase() === '.png');
};

// Function to generate TS file content
const generateTsContent = (files) => {
  // Start of the export
  let content = 'export const images = {\n';
  // Adding image path for each file
  files.forEach((file) => {
    const fileNameWithoutExt = path.basename(file, '.png');
    content += `  ${fileNameWithoutExt}: require('../../assets/images/${file}'),\n`;
  });
  content += '};\n';
  return content;
};

// Main function
const generateImagesTsFile = () => {
  // Load PNG files
  const pngFiles = loadPngFiles(imagesDirPath);
  // Generate TS file content
  const tsContent = generateTsContent(pngFiles);
  // Write to file
  fs.writeFileSync(outputPath, tsContent);
  console.log(`Generated ${outputPath} with ${pngFiles.length} images.`);
};

// Run the script
generateImagesTsFile();
