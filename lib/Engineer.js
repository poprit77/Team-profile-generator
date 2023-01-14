const Employee = require('./Employee')
class Engineer extends Employee{
  constructor(employeeName, id, email, github) {
    super(employeeName, id, email, github)
    this.github = github;
    this.title = "Engineer";

  }
  getGithub(){
    return this.github;
  }
}

module.exports = Engineer;
