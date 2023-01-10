class Employee {
    constructor(employeeName, id, email) {
        this.id = id;
        this.name = employeeName;
        this.email = email;
        this.role = 'Employee';
   
    this.getId = () => {
        console.log(this.id);
    };

    this.getName = () => {
        console.log(this.name);
    };

    this.getEmail = () =>  {
        console.log(this.email);
    };

    this.getRole = () => {
        console.log(this.role);
    }};
}

module.exports = Employee;

