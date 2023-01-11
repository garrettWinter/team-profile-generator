const Employee = require('./Employee')

//This create the sub class Intern
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
