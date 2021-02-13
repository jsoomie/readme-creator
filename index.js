// importing required 
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter project's name: "
    },
    {
        type: "input",
        name: "name",
        message: "Enter author's name: "
    },
    {
        type: "input",
        name: "github",
        message: "Enter project's GitHub URL: "
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project: "
    },
    {
        type: "input",
        name: "usage",
        message: "Enter how to use the project: "
    },
    {
        type: "input",
        name: "license",
        message: "Enter project licenses: ",
        choices: ["MIT", "Otheres", "None"]
    },
    {
        type: "input",
        name: "credit",
        message: "Enter needed credit for project: "
    },
    
];

// write to file name (name, data to be written) into path (current working directory, name) 
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
      console.log("Generating README...");
      writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    })
  }

// function call to initialize program
init();
