const Engineer = require('../lib/Engineer.js');

describe('Test', () => {
    describe('New Engineer Creation', () => {
        it('Testing to make sure the object is was created by the Engineer class', () => {
            // Arrange - Define the variables we will be using
            let test = new Engineer()
    
            // Act - run the code under test / do thing we're testing
            let testClass = 'Engineer';
    
            //Assert - make sure we got what we expected
            expect(test.constructor.name).toBe(testClass);
        })});

describe('New Engineer Creation Validation', () => {
    it('Testing to make sure all the Engineer attributes are being created properly', () => {
        // Arrange - Define the variables we will be using
        let test = new Engineer("Garrett", 2, 'email@email.com', 'garrettWinter')

        // Act - run the code under test / do thing we're testing
        let testName = "Garrett";
        let testId = 2;
        let testEmail = "email@email.com";
        let testRole = "Engineer";
        let testGithub = 'garrettWinter';

        //Assert - make sure we got what we expected
        expect(test.name).toBe(testName);
        expect(test.id).toBe(testId);
        expect(test.email).toBe(testEmail);
        expect(test.role).toBe(testRole);
        expect(test.gitHub).toBe(testGithub);
    })});

    describe('New Engineer Creation Validation', () => {
        it('Testing to make sure all the Engineer get methods are being working properly', () => {
            // Arrange - Define the variables we will be using
            let test = new Engineer("Garrett", 2, 'email@email.com', 'garrettWinter')
    
            // Act - run the code under test / do thing we're testing
            let checkName = "Garrett";
            let checkId = 2;
            let checkEmail = "email@email.com";
            let checkRole = "Engineer";
            let checkGithub = 'garrettWinter';

            //Assert - make sure we got what we expected
            expect(test.getName()).toBe(checkName);
            expect(test.getId()).toBe(checkId);
            expect(test.getEmail()).toBe(checkEmail);
            expect(test.getRole()).toBe(checkRole);
            expect(test.getGithub()).toBe(checkGithub);
        })});


});