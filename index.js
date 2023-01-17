const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./Template/htmltenplate");
const { createHistogram } = require("perf_hooks");

const writeFileAsync = util.promisify(fs.writeFile);

let teamMemebers = [];
let draft = ``;
function Builder() {
  for (let i = 0; i < teamMemebers.length; i++) {
    draft = draft + html.generateCard(teamMemebers[i]);
  }
  let finalHTML = html.generateHTML(draft);
  console.log(teamMemebers);
  writeFileAsync("./result/index.html", finalHTML);
}

function main() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What type of employee would you like to add to your team?",
        name: "createEmployee",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
          "No more team members are needed.",
        ],
      },
    ])
    .then(function (userInput) {
      switch (userInput.createEmployee) {
        case "Manager":
          createManager();
          break;
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;

        default:
        Builder();
      }
    });
}

function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?: ",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the employee's ID: ",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the employee's email address: ",
      },
      {
        type: "input",
        name: "office",
        message: "What is the employee's office number?:",
      },
    ])
    .then((response2) => {
      const manager = new Manager(
        response2.name,
        response2.id,
        response2.email,
        response2.office
      );
      teamMemebers.push(manager);
      main();
    });
}
function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?: ",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the employee's ID: ",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the employee's email address: ",
      },
      {
        type: "input",
        name: "github",
        message: "What is the employee's github username?:",
      },
    ])
    .then((answer) => {
      const engineer = new Engineer(
        answer.name,
        answer.id,
        answer.email,
        answer.github
      );
      teamMemebers.push(engineer);
      main();
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?: ",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the employee's ID: ",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the employee's email address: ",
      },
      {
        type: "input",
        name: "school",
        message: "What school is the employee attending?:",
      },
    ])
    .then((answer) => {
      const intern = new Intern(
        answer.name,
        answer.id,
        answer.email,
        answer.school
      );
      teamMemebers.push(intern);
      main();
    });
}

main();
