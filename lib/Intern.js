const Employee = require('./Employee')
class Intern extends Employee{
    constructor(employeeName, id, email, school){
        super(employeeName, id, email, school)
        this.school = school;
        this.title = "Intern";

    }
      getSchool(){
        return this.school;
      }

}

module.exports = Intern;