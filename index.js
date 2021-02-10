// importing required 
const fs = require("fs");
const inquirer = require("inquirer");

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
        message: "Enter project licenses: "
    },
    {
        type: "input",
        name: "credit",
        message: "Enter needed credit for project: "
    },
    
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
