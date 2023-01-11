const fs = require('fs');
const generateCSS = require('./src/CSS-Generator');
const generateHTML = require('./src/HTML-Generator');
const startingPrompts = require('./lib/Questionnair');

function writeCSSFile() {
    fs.writeFile('./dist/styles.css',
        generateCSS()
        , (err) =>
            err ? console.error(err) : console.log('CSS File has been created!')
    );
}

function startup() {
    startingPrompts();
    // writeCSSFile();
    // writeHTMLFile();
}

startup();


