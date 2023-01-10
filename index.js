const fs = require('fs');
const generateCSS = require('./src/CSS-Generator');
const generateHTML = require('./src/HTML-Generator');

function writeCSSFile() {
    fs.writeFile('./dist/styles.css',
        generateCSS()
        , (err) =>
            err ? console.error(err) : console.log('CSS File has been created!')
    );
}

function writeHTMLFile() {
    fs.writeFile('./dist/index.html',
        generateHTML()
        , (err) =>
            err ? console.error(err) : console.log('HTML File has been created!')
    );
}

function startup() {
    writeCSSFile();
    writeHTMLFile();
}

startup();