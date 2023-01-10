const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(employeeName, id, email, gitHub) {
        super(employeeName, id, email);
        this.gitHub = gitHub;
        this.role = 'Engineer';
    }
    getGithub() {
        console.log(this.gitHub);
        return this.gitHub;
    };
    getRole() {
        console.log(this.role);
        return this.role;
    };
}

module.exports = Engineer;

// let test = new Employee("Garrett", 2, 'email@email.com');
// console.log (test);
let test = new Engineer("Garrett", 2, 'email@email.com', "garrettWinter")
console.log (test);