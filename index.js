const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "Description",
        message: "Provide a short description of your project"
    }
{
        type: "input",
        name: "Installation",
        message: "How do users install your application?",
    }
{
        type: "input",
        name: "Usage",
        message: "Describe the Usage of your applicaiton:",
    }
{
        type: "list",
        name: "License",
        message: "Choose a license for your project:",
        choices: ["MIT", "GNU GPLv3", "Apache 2.0", "ISC", "None"]
    }
{
        type: "input",
        name: "Contributing",
        message: "Input the contributing users",
    }
{
        type: "input",
        name: "Tests",
        message: "n/a",
    }
{
        type: "input",
        name: "Questions",
        message: "n/a",
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
inquirer.prompt(questions)
.then((answers)) => 
    //writing it to the text or md file
}


// function call to initialize program
init();
