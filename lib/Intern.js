const Employee = require('./Employee')

class Intern extends Employee {
    constructor(employeeName, id, email, school) {
        super(employeeName, id, email);
        this.school = school;
        this.role = 'Intern';
    }
    getSchool() {
        console.log(this.school);
        return this.school;
    };
    getRole() {
        console.log(this.role);
        return this.role;
    };
}

module.exports = Intern;

let test = new Intern("Garrett", 2, 'email@email.com', "U of M")
console.log (test);