/* Global Variables */
const inquirer = require('inquirer');
const cardGenerator = require('../src/HTML-Generator.js')

// This object will hold all collected data that will be used for the creation of the employee cards.
let collectedData = {
    employeeManagerData: [],
    employeeEngineerData: [],
    employeeInternData: [],
};

//This variable is used to allow the inquirer prompts to reloop to allow for more employees to be added.
let addEmployeeResponse;

//This is the questions to create the team and manager
function startingPrompts() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the teams name?',
                name: 'startingTeamName',
            },
            {
                type: 'input',
                message: "What is team manager's name?",
                name: 'startingManagerName',
            },
            {
                type: 'input',
                message: "What is the manager's employee ID?",
                name: 'startingManagerId',
            },
            {
                type: 'input',
                message: "What is the manager's email address?",
                name: 'startingManagerEmail',
            },
            {
                type: 'input',
                message: "What is the manager's office number",
                name: 'startingManagerOfficeNumber',
            }
        ])
        .then((response) => {
            collectedData.employeeManagerData = response;
            addEmployeePrompts();
        });
};

// THis is the descision tree for which type of user should be added next.
function addEmployeePrompts() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What type of employee would you like to add?',
                name: 'addEmployee',
                default: 0,
                choices: [
                    "Engineer",
                    "Intern",
                    "No addtional people report to this manager."]
            }
        ])
        .then((response) => {
            addEmployeeResponse = response;
            if (addEmployeeResponse.addEmployee === "Engineer") {
                console.log("Routing to Engineer Questions");
                engineerPrompts();
            }
            if (addEmployeeResponse.addEmployee === "Intern") {
                console.log("Route to Intern Questions");
                internPrompts();
            }
            if (addEmployeeResponse.addEmployee === "No addtional people report to this manager.") {
                cardGenerator(collectedData);

            }

        });
};

// Prompts to collect info about Engineers being added to the team.
function engineerPrompts() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the engineer's name?",
                name: 'engineerName',
            },
            {
                type: 'input',
                message: 'What is their employee ID?',
                name: 'engineerId',
            },
            {
                type: 'input',
                message: 'What is their email address?',
                name: 'engineerEmail',
            },
            {
                type: 'input',
                message: 'What is their GitHub username?',
                name: 'engineerGitHub',
            },
        ])
        .then((response) => {
            collectedData.employeeEngineerData.push(response);
            addEmployeePrompts();
        });
};

// Prompts to collect info about Interns being added to the team.
function internPrompts() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the intern's name?",
                name: 'internName',
            },
            {
                type: 'input',
                message: "What is the intern's employee ID?",
                name: 'internId',
            },
            {
                type: 'input',
                message: "What is the intern's email address?",
                name: 'internEmail',
            },
            {
                type: 'input',
                message: 'What school does the intern attend?',
                name: 'internSchool',
            },
        ])
        .then((response) => {
            collectedData.employeeInternData.push(response);
            addEmployeePrompts();
        });
};

module.exports = startingPrompts;
