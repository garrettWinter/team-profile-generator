const Employee = require('./Employee');

class NewIntern extends Employee {
    constructor (school) {
        this.school = school;

        getSchool()
        getRole() // Overridden to return 'Intern'
    }
};

module.exports = NewIntern;