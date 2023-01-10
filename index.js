const fs = require('fs');
const generateCSS = require('./src/CSS-Generator');
const generateHTML = require('./src/HTML-Generator');
const Employee = require('./lib/Employee.js')

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
    let test = new Employee("Garrett", 2, 'email@email.com')
    console.log(test);
    test.getId();
    test.getName();
    test.getEmail();
    test.getRole();
    writeCSSFile();
    writeHTMLFile();
}

startup();