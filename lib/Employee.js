const inquirer = require('inquirer');

class NewEmployee {
    constructor(employeeName, id, email) {
        // this.id = id;
        // this.name = employeeName;
        // this.email = email;
        // this.role = 'Employee';
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
                console.log(this);
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
                    console.log(this);
                });
        }


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
                    console.log(this);
                });
        }

        this.getRole = () => {
            this.role = 'Employee';
            console.log(this);
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
// test.getRole();
// test.getEmail();
// test.getName();


module.exports = NewEmployee;

