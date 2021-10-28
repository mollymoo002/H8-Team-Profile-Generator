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

function addHtml(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = member.getGithub();
            data = `<div class="col-6">
            <div>
            <h5>${name}<br><br>Engineer</h5>
            <ul>
                <li>ID: ${id}</li>
                <li>Email Address: ${email}</li>
                <li>Github: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        } 
        if (role === "Intern") {
            const school = member.getSchool();
            data = `<div
            <div>
            <h5>${name}<br>Intern</h5>
            <ul>
                <li>ID: ${id}</li>
                <li>Email Address: ${email}</li>
                <li>School: ${school}</li>
            </ul>
            </div>
        </div>`;
        }
        if (role === "Manager") {
            const officePhone = member.getOfficeNumber();
            data = `<div>
            <div>
            <h5>${name}<br>Manager</h5>
            <ul>
                <li>ID: ${id}</li>
                <li>Email Address: ${email}</li>
                <li>Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`;
        }
        console.log("adding team member");
        fs.appendFile("./output/team.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}
    `</body>
    </html>`;