const NewEmployee = require('../lib/Employee');

describe('New Employee', () => {
    describe('New Employee Creation', () => {
    it('Testing to make sure a new Employee is created with test data.', () => {
        // const testEmp = new NewEmployee();
        // expect(testEmp.role).toEqual("Employee")


        //TESTING to make sure it works
        // Arrange - Define the variables we will be using
        let one = 1;

        // Act - runt he code under test / do thing we're testing
        let testMe = one === 1;

        //Assert - make sure we got what we expected
        expect(testMe).toBe(true);
    })});


});