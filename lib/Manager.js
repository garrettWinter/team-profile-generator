const Employee = require("./Employee");

class NewManager extends Employee {
    constructor (officeNumber){
        this.officeNumber = officeNumber;

        getRole() // Overridden to return 'Manager'
    }
}

module.exports = NewManager;