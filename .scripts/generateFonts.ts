const fs = require('fs');
const path = require('path');

const fontsDir = path.join(__dirname, '../assets', 'fonts');
const outputFile = path.join(__dirname, '../src/theme/fonts.ts');

fs.readdir(fontsDir, (err, files) => {
  if (err) {
    console.error('Error reading fonts directory:', err);
    return;
  }

  const fontNames = files
    .filter((file) => file.endsWith('.ttf') || file.endsWith('.otf'))
    .map((file) => path.basename(file, path.extname(file)).replace(/-/g, ' '));

  const typeExport = `export type TFonts = '${fontNames.join("' | '")}';\n\n`;
  const constExport = `export const FontsList = ['${fontNames.join("', '")}'];\n`;

  const content = typeExport + constExport;

  fs.writeFile(outputFile, content, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log('Fonts file generated successfully:', outputFile);
  });
});
