const inquirer = require('inquirer');

class NewEmployee {
    constructor(employeeName, id, email) {
        let role = 'Employee';
        this.name = employeeName;
        this.id = id;
        this.email = email;
        this.role = role;
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
                    return this.employeeName = response.newEmployeeName ;
                });
        console.log(response.github);
        }




        // let getName = getName (console.log('getName'))
        // let = getId(console.log('getName'))
        // let = getEmail(console.log('getName'))

        // }; // Returns 'Employee'
    }
}


let test = new NewEmployee('Garrett', 1, 'Email@email')
console.log(test);


module.exports = NewEmployee;

