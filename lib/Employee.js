const inquirer = require('inquirer');

class NewEmployee {
    constructor(employeeName, id, email) {
        // this.name = employeeName;
        this.getId = () =>{
            inquirer
            .prompt([
                {
                    type: 'input',
                    message: "What is the new employee's ID number?",
                    name: 'newEmployeeId',
                }
            ])
            .then((response) => {
                this.id = response.newEmployeeId;
                console.log(test);
            });
        }

        this.getName = () => {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: "What is the new employee's name?",
                        name: 'newEmployeeName',
                    }
                ])
                .then((response) => {
                    this.name = response.newEmployeeName;
                    console.log(test);
                });
        }
        // this.email = email;
        // this.role = 'Employee';


        this.getEmail = () => {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: "What is the new employee's email?",
                        name: 'newEmployeeEmail',
                    }
                ])
                .then((response) => {
                    this.email = response.newEmployeeEmail;
                    console.log(test);
                });
        }

        this.getRole = () => {
            this.role = 'Employee';
            console.log(test);
        }



    }




    // name
    // id
    // email
    // getName()
    // getId()
    // getEmail()
    // getRole() // Returns 'Employee'
}



let test = new NewEmployee('Garrett', 1, 'Email@email')
test.getId();
test.getRole();
test.getEmail();
test.getName();


module.exports = NewEmployee;

