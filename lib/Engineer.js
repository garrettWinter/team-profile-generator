const NewEmployee = require('./Employee')

class NewEngineer extends NewEmployee{
    constructor (github){
        this.github = github;
        
        getGithub()
        getRole() // Overridden to return 'Engineer'

    }
}

module.exports = NewEngineer;