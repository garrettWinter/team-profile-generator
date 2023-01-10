const Manager = require('../lib/Manager.js');

describe('Test', () => {
    describe('New Manager Creation', () => {
        it('Testing to make sure the object is was created by the Manager class', () => {
            // Arrange - Define the variables we will be using
            let test = new Manager()
    
            // Act - run the code under test / do thing we're testing
            let testClass = 'Manager';
    
            //Assert - make sure we got what we expected
            expect(test.constructor.name).toBe(testClass);
        })});

describe('New Manager Creation Validation', () => {
    it('Testing to make sure all the Manager attributes are being created properly', () => {
        // Arrange - Define the variables we will be using
        let test = new Manager("Garrett", 2, 'email@email.com', 5)

        // Act - run the code under test / do thing we're testing
        let testName = "Garrett";
        let testId = 2;
        let testEmail = "email@email.com";
        let testRole = "Manager";
        let testOfficeNumber = 5;

        //Assert - make sure we got what we expected
        expect(test.name).toBe(testName);
        expect(test.id).toBe(testId);
        expect(test.email).toBe(testEmail);
        expect(test.role).toBe(testRole);
        expect(test.officeNumber).toBe(testOfficeNumber);
    })});

    describe('New Manager Creation Validation', () => {
        it('Testing to make sure all the Manager get methods are being working properly', () => {
            // Arrange - Define the variables we will be using
            let test = new Manager("Garrett", 2, 'email@email.com', 5)
    
            // Act - run the code under test / do thing we're testing
            let checkName = "Garrett";
            let checkId = 2;
            let checkEmail = "email@email.com";
            let checkRole = "Manager";
            let checkOfficeNumber = 5;

            //Assert - make sure we got what we expected
            expect(test.getName()).toBe(checkName);
            expect(test.getId()).toBe(checkId);
            expect(test.getEmail()).toBe(checkEmail);
            expect(test.getRole()).toBe(checkRole);
            expect(test.officeNumber()).toBe(checkOfficeNumber);
        })});


});