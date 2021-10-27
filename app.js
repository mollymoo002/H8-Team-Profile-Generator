const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];

function initApp() {
    startHTML();
    addMember();
}

function addMember() {
    inquirer.prompt([{
        message: "Enter the member's name",
        name: "name"
    },
    {
        type: "list",
        message: "Select the member's role",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        message: "enter the member's ID",
        name: "id"
    },
    {
        message: "Enter member's email",
        name: "email"
    }])
    .then (function({ name, role, id, email}) {
        
    })
}