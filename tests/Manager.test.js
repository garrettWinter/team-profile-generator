const NewManager = require('../lib/Manager.js');

describe('Test', () => {
    describe('Test', () => {
    it('Testing to make sure we can pass a test.', () => {
        // Arrange - Define the variables we will be using
        let one = 1;

        // Act - runt he code under test / do thing we're testing
        let testMe = one === 1;

        //Assert - make sure we got what we expected
        expect(testMe).toBe(true);
    })});


});