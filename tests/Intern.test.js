const Intern = require('../lib/Intern.js');

describe('Test', () => {
    describe('New Intern Creation', () => {
        it('Testing to make sure the object is was created by the Intern class', () => {
            // Arrange - Define the variables we will be using
            let test = new Intern()
    
            // Act - run the code under test / do thing we're testing
            let testClass = 'Intern';
    
            //Assert - make sure we got what we expected
            expect(test.constructor.name).toBe(testClass);
        })});

describe('New Intern Creation Validation', () => {
    it('Testing to make sure all the Intern attributes are being created properly', () => {
        // Arrange - Define the variables we will be using
        let test = new Intern("Garrett", 2, 'email@email.com', 'U of M')

        // Act - run the code under test / do thing we're testing
        let testName = "Garrett";
        let testId = 2;
        let testEmail = "email@email.com";
        let testRole = "Intern";
        let testSchool = 'U of M';

        //Assert - make sure we got what we expected
        expect(test.name).toBe(testName);
        expect(test.id).toBe(testId);
        expect(test.email).toBe(testEmail);
        expect(test.role).toBe(testRole);
        expect(test.school).toBe(testSchool);
    })});

    describe('New Intern Creation Validation', () => {
        it('Testing to make sure all the Intern get methods are being working properly', () => {
            // Arrange - Define the variables we will be using
            let test = new Intern("Garrett", 2, 'email@email.com', 'U of M')
    
            // Act - run the code under test / do thing we're testing
            let checkName = "Garrett";
            let checkId = 2;
            let checkEmail = "email@email.com";
            let checkRole = "Intern";
            let checkSchool = 'U of M';

            //Assert - make sure we got what we expected
            expect(test.getName()).toBe(checkName);
            expect(test.getId()).toBe(checkId);
            expect(test.getEmail()).toBe(checkEmail);
            expect(test.getRole()).toBe(checkRole);
            expect(test.getSchool()).toBe(checkSchool);
        })});


});