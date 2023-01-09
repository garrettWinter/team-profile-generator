const fs = require('fs');
const generateCSS = require('./src/CSS-Generator');

function writeCSSFile() {
    fs.writeFile('./dist/styles.css',
    generateCSS()
      , (err) =>
        err ? console.error(err) : console.log('CSS File has been created!')
    );
  }

  writeCSSFile();