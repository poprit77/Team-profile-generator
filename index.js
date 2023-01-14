const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./Template/htmltenplate");

const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamMemebers = [];
let draft = ``;

async function main() {
  try {
    await prompt();

    for (let i = 0; i < teamMemebers.length; i++) {
      draft = draft + html.generateCard(teamMemebers[i]);
    }

    let finalHTML = html.generateHTML(draft);

    writeFileAsync("./result/index.html", finalHTML);
  } catch (err) {
    return console.log(err);
  }
}

async function prompt() {
  let responseDone = "";
  let response2 = "";
  let response3 = "";
  do {
    try {
      response = await inquirer.prompt([
        {
          type: "list",
          name: "Manager",
          message: "Are you team manager?: ",
          choices: ["Yes", "other"],
        },
      ]);

      if (response.Manager === "Yes") {
        response2 = await inquirer.prompt([
          {
            type: "input",
            name: "employeeName",
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
        ]);

        responseDone = await inquirer.prompt([
          {
            type: "list",
            name: "finish",
            message: "Do you want to continue?: ",
            choices: ["Yes", "No"],
          },
        ]);
        const manager = new Manager(
          response2.name,
          response2.id,
          response2.email,
          response2.office
        );
        teamMemebers.push(manager);
       if (response.Manager === "other") {
        response3 = await inquirer.prompt([
          {
            type: "list",
            name: "type",
            message: "what kind of employee are you?",
            choices: ["Intern", "Engineer"]
          },
        ]);
      }}

      if (response3.type === "Engineer") {
        response2 = await inquirer.prompt([
          {
            type: "input",
            name: "employeeName",
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
            name: "GHUser",
            message: "What is the employee's github username?:",
          },
        ]);
        const engineer = new Engineer(
          response.employeeName,
          response.id,
          response.email,
          response2.GHUser
        );
        teamMemebers.push(engineer);
      } else if (response3.type === "Intern") {
        response4 = await inquirer.prompt([
          {
            type: "input",
            name: "employeeName",
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
            name: "education",
            message: "What school is the employee attending?:",
          },
        ]);
        const intern = new Intern(
          response.name,
          response.id,
          response.email,
          response4.education
        );
        teamMemebers.push(intern);
      }
    } catch (err) {
      return console.log(err);
    }
    console.log(teamMemebers);
  } while (responseDone.finish === "Yes");
}

main();
