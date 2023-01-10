class Employee {
    constructor(employeeName, id, email) {
        this.id = id;
        this.name = employeeName;
        this.email = email;
        this.role = 'Employee';
   
    this.getId = () => {
        return this.id;
        console.log(this.id);
    };

    this.getName = () => {
        return this.name;
        console.log(this.name);
    };

    this.getEmail = () =>  {
        return this.email;
        console.log(this.email);
    };

    this.getRole = () => {
        return this.role;
        console.log(this.role);
    }};
}

module.exports = Employee;