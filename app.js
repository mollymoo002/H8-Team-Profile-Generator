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
        let roleInfo = "";
        if (role === "Engineer") {
            roleInfo = "Github username";
        }
        if (role === "Intern") {
            roleInfo = "school name";
        }
        if (role === "Manager") {
            roleInfo = "office phone number";
        }

        inquirer.prompt([{
            message: `Enter member's ${roleInfo}`,
            name: "roleInfo"
        },
        {
            type: "list",
            message: "Would you like to add another member?",
            choices: [
                "yes",
                "no"
            ],
            name: "moreMembers"
        }])
    })
}