const Employee = require('./Employee')
class Manager extends Employee{
    constructor(employeeName, id, email, number){
        super(employeeName, id, email, number)
        this.officeNumber = number;
        this.title = "Manager";
    }
    
      getOfficeNumber(){
        return this.officeNumber;
      }

}

module.exports = Manager;