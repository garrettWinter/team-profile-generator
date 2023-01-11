//Setting Connection  Variables
const Manager = require('../lib/Manager.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');
const writeCSSFile = require('./CSS-Generator')
const fs = require('fs');

//Setting Global Varaibles
let managerHTML = '';
let engineerHTML = '';
let internHTML = '';
let manager = '';
let engineer = '';
let intern = '';

//This function will create all 3 employees (Manager, Enginerr, Intern)
function cardGenerator(collectedData) {
    //Manager Card Creation
    manager = new Manager(
        collectedData.employeeManagerData.startingManagerName,
        collectedData.employeeManagerData.startingManagerId,
        collectedData.employeeManagerData.startingManagerEmail,
        collectedData.employeeManagerData.startingManagerOfficeNumber
    );
    managerHTML = `
                <div class="empCard">
                    <div class="name-role">
                        ${manager.name} <br> ☕ ${manager.role} 
                    </div>
                    <div class="empCardBody">
                        <div class="empCardContent">
                            <div class="empDetails">ID: ${manager.id}</div>
                            <div class="empDetails">Email: <br> <a href="mailto:${manager.email}">${manager.email}</a></div>
                            <div class="empDetails">Office Number: ${manager.officeNumber}</div>
                        </div>
                    </div>
                </div>`

    // Engineer Card(s) Creation
    for (let i = 0; i < collectedData.employeeEngineerData.length; i++) {
        engineer = new Engineer(
            collectedData.employeeEngineerData[i].engineerName,
            collectedData.employeeEngineerData[i].engineerId,
            collectedData.employeeEngineerData[i].engineerEmail,
            collectedData.employeeEngineerData[i].engineerGitHub
        );
        engineerHTML = engineerHTML.concat(`\n             <div class="empCard">
                    <div class="name-role">
                        ${engineer.name} <br> 👓 ${engineer.role} 
                    </div>
                    <div class="empCardBody">
                        <div class="empCardContent">
                            <div class="empDetails">ID: ${engineer.id}</div>
                            <div class="empDetails">Email: <br> <a href="mailto:${engineer.email}">${engineer.email}</a></div>
                            <div class = "empDetails">GitHub: <a href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></div>
                        </div>
                    </div>
                </div>`);

    };

    // Intern Card(s) Creation
    for (let i = 0; i < collectedData.employeeInternData.length; i++) {
        intern = new Intern(
            collectedData.employeeInternData[i].internName,
            collectedData.employeeInternData[i].internId,
            collectedData.employeeInternData[i].internEmail,
            collectedData.employeeInternData[i].internSchool
        );
        internHTML = internHTML.concat(`\n             <div class="empCard">
                    <div class="name-role">
                        ${intern.name} <br> 🎓 ${intern.role} 
                    </div>
                    <div class="empCardBody">
                        <div class="empCardContent">
                            <div class="empDetails">ID: ${intern.id}</div>
                            <div class="empDetails">Email: <br> <a href="mailto:${intern.email}">${intern.email}</a></div>
                            <div class = "empDetails">School: ${intern.school}</div>
                        </div>
                    </div>
                </div>`);

    };
    writeHTMLFile(collectedData);
};
//This function will trigger the generation of the HTML file, and create this in the dist folder.
function writeHTMLFile(collectedData) {
    fs.writeFile('./dist/index.html',
        generateHTML(collectedData)
        , (err) =>
            err ? console.error(err) : console.log('HTML File has been created!')
    );
    writeCSSFile();
};

//This generates the static HTML along with the Dynamic HTML based on the user inputs.
function generateHTML(collectedData) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${collectedData.employeeManagerData.startingTeamName}</title>
        <link rel="stylesheet" href="./styles.css">
    </head>
    
    <body>
        <header>${collectedData.employeeManagerData.startingTeamName}</header>
        <main>
            <div id="orgBox">${managerHTML}${engineerHTML}${internHTML}
            </div>
        </main>
        <footer>Garrett Winter © Copyright 2023, with no rights reserved</footer>
    </body>
    
    </html>`
    };

module.exports = cardGenerator, generateHTML;