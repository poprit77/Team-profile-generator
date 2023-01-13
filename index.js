const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require('./Tests/Employee.test');
const role = [
  {
    type: "list",
    name: "role",
    choices: ["Engineer", "Intern", "Manager"],
    message: "what kind of Employee are you?",
  },
];

function init() {
  inquirer.prompt(role).then((SelectedRole) => 
    console.log(SelectedRole));
    inquirer.prompt(Employee)
  }


init();
