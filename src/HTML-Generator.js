const Manager = require('../lib/Manager.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');
let managerHTML = '';
let manager = '';


function cardGenerator(collectedData) {
    console.log("cardGenerator is checking collectedData");
    console.log(collectedData.employeeManagerData.startingTeamName);

    //Manager Card Creation
    manager = new Manager(
        collectedData.employeeManagerData.startingManagerName,
        collectedData.employeeManagerData.startingManagerId,
        collectedData.employeeManagerData.startingManagerEmail,
        collectedData.employeeManagerData.startingManagerOfficeNumber
    );
    console.log(manager);

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
    console.log('About to log managerHTML');
    console.log(managerHTML);
};

function generateHTML () {
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
            <div id="orgBox">
                <div class="empCard">${managerHTML}
    
                <div class="empCard">
                    <div class="name-role">
                        Garrett Winter <br> 👓 Engineer
                        <!-- ☕ 🎓 👓 -->
                    </div>
                    <div class="empCardBody">
                        <div class="empCardContent">
                            <div class = "empDetails">ID: 2</div>
                            <div class = "empDetails">Email: <br> <a href="mailto:Garrett_Winter@hotmail.com">Garrett_Winter@hotmail.com</a></div>
                            <div class = "empDetails">GitHub: <a href="https://github.com/garrettWinter">garrettWinter</a></div>
                        </div>
                    </div>
                </div>
    
    
                <div class="empCard">
                    <div class="name-role">
                        Garrett Winter <br> 👓 Engineer
                        <!-- ☕ 🎓 👓 -->
                    </div>
                    <div class="empCardBody">
                        <div class="empCardContent">
                            <div class = "empDetails">ID: 3</div>
                            <div class = "empDetails">Email: <br> <a href="mailto:Garrett_Winter@hotmail.com">Garrett_Winter@hotmail.com</a></div>
                            <div class = "empDetails">GitHub: <a href="https://github.com/garrettWinter" target="_blank">garrettWinter</a></div>
                        </div>
                    </div>
                </div>
    
    
                <div class="empCard">
                    <div class="name-role">
                        Garrett Winter <br> 🎓 Intern
                        <!-- ☕ 🎓 👓 -->
                    </div>
                    <div class="empCardBody">
                        <div class="empCardContent">
                            <div class = "empDetails">ID: 4</div>
                            <div class = "empDetails">Email: <br> <a href="mailto:Garrett_Winter@hotmail.com" target="_blank">Garrett_Winter@hotmail.com</a></div>
                            <div class = "empDetails">School: U of M</div>
                        </div>
                    </div>
                </div>
    
                <div class="empCard">
                    <div class="name-role">
                        Garrett Winter <br> 🎓 Intern
                        <!-- ☕ 🎓 👓 -->
                    </div>
                    <div class="empCardBody">
                        <div class="empCardContent">
                            <div class = "empDetails">ID: 5</div>
                            <div class = "empDetails">Email: <br> <a href="mailto:Garrett_Winter@hotmail.com" target="_blank">Garrett_Winter@hotmail.com</a></div>
                            <div class = "empDetails">School: U of M</div>
                        </div>
                    </div>
                </div>
    
            </div>
        </main>
        <footer>Garrett Winter © Copyright 2023, with no rights reserved</footer>
    </body>
    
    </html>`
};


module.exports = cardGenerator, generateHTML;