/* Global Variables */
const inquirer = require('inquirer');


const collectedData = {
employeeManagerData: [],
employeeEngineerData: [],
employeeInternData: [],
};

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

