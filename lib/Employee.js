class Employee {
    constructor(employeeName, id, email) {
        this.id = id;
        this.name = employeeName;
        this.email = email;
        this.role = 'Employee';
    }
    getId() {
        console.log(this.id);
        return this.id;
    };

    getName() {
        console.log(this.name);
        return this.name;
    };

    getEmail () {
        console.log(this.email);
        return this.email;
    };

    getRole () {
        console.log(this.role);
        return this.role;
    };
}

module.exports = Employee;