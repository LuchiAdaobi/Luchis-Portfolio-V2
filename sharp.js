const sharp = require('sharp');
const fs = require('fs');

const directory = './images';

fs.readdirSync(directory).forEach((file) => {
  sharp(`${directory}/${file}`)
    .resize(600, 300) // width, height
    .toFile(`${directory}/${file}-small.jpg`);
});
