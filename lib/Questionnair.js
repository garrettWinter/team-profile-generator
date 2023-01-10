/* Global Variables */
const inquirer = require('inquirer');


const collectedData = {
    employeeManagerData: [],
    employeeEngineerData: [],
    employeeInternData: [],
};
let addEmployeeResponse;

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
            collectedData.employeeManagerData = [response];
            addEmployeePrompts();
        });
};

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
            console.log(addEmployeeResponse);
            if(addEmployeeResponse.addEmployee === "Engineer") {
                console.log("Route to Engineer Questions");
            }
            if(addEmployeeResponse.addEmployee === "Intern") {
                console.log("Route to Intern Questions");
            }
            if(addEmployeeResponse.addEmployee === "No addtional people report to this manager.") {
                console.log("Route to File Creation");
                // Move to file write
            }

        });
};


addEmployeePrompts();