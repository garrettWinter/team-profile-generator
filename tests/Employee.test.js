const Employee = require('../lib/Employee');

describe('Class Employee Testing', () => {

        describe('New Employee Creation', () => {
            it('Testing to make sure the object is was created by the Employee class', () => {
                // Arrange - Define the variables we will be using
                let test = new Employee()
        
                // Act - run the code under test / do thing we're testing
                let testClass = 'Employee';
        
                //Assert - make sure we got what we expected
                expect(test.constructor.name).toBe(testClass);
            })});

    describe('New Employee Creation Validation', () => {
        it('Testing to make sure all the Employee attributes are being created properly', () => {
            // Arrange - Define the variables we will be using
            let test = new Employee("Garrett", 2, 'email@email.com')
    
            // Act - run the code under test / do thing we're testing
            let testName = "Garrett";
            let testId = 2;
            let testEmail = "email@email.com";
            let testRole = "Employee";
    
            //Assert - make sure we got what we expected
            expect(test.name).toBe(testName);
            expect(test.id).toBe(testId);
            expect(test.email).toBe(testEmail);
            expect(test.role).toBe(testRole);
        })});

        describe('New Employee Creation Validation', () => {
            it('Testing to make sure all the Employee get methods are being working properly', () => {
                // Arrange - Define the variables we will be using
                let test = new Employee("Garrett", 2, 'email@email.com')
        
                // Act - run the code under test / do thing we're testing
                let checkName = "Garrett";
                let checkId = 2;
                let checkEmail = "email@email.com";
                let checkRole = "Employee";

                //Assert - make sure we got what we expected
                expect(test.getName()).toBe(checkName);
                expect(test.getId()).toBe(checkId);
                expect(test.getEmail()).toBe(checkEmail);
                expect(test.getRole()).toBe(checkRole);
            })});
        


});