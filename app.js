const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];

function initApp() {
    startHtml();
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
        .then (function({roleInfo, moreMembers}) {
            let newMember;
            if (role === "Engineer") {
                newMember = new Engineer(name, id, email, roleInfo);
            }
            if (role === "Intern") {
                newMember = new Intern(name, id, email, roleInfo);
            }
            if (role === "Manager") {
                newMember = new Manager(name, id, email, roleInfo);
            }

            employees.push(newMember);
            addHtml(newMember)
            .then (function() {
                if (moreMembers === "yes") {
                    addMember();
                }
                finishHtml();
            })
        });
    });
}

function startHtml() {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
    </head>
    <body>
        <h1>Team Profile</h1>
        <div>`;
            fs.writeFile("./output/team.html", html, function (err) {
                if (err) {
                    console.log(err);
                }
            });
        console.log("start");
        `</div>`;
}


    `</body>
    </html>`;