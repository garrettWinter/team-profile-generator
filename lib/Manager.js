const Employee = require('./Employee')

//This create the sub class Manager
class Manager extends Employee {
    constructor(employeeName, id, email, officeNumber) {
        super(employeeName, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }
    getOfficeNumber() {
        console.log(this.officeNumber);
        return this.officeNumber;
    };
    getRole() {
        console.log(this.role);
        return this.role;
    };
}

module.exports = Manager;