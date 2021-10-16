const inquirer = require("inquirer");
const fs = require("fs");

const startPrompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the projects title?",
        },
        {
            type: "input",
            name: "description",
            message: "Add a description. Include motivation, reason for building, what problem it solved, and, what you learned",
        },
        {
            type: "list",
            name: "toc",
            message: "Do you want a table of contents",
            choices: [{name: "yes", value: "## Table of Contents<br>- [Description](#description)<br>- [Installation](#installation)<br>- [Contact Me](#contact)<br>"}, { name: "no", value:""}]
        },
        {
            type: "input",
            name: "installation",
            message: "How can it be installed?",
        },
        {
            type: "list",
            name: "screen",
            message: "Add screenshot? (make sure you have screenshot.png in assets/images)",
            choices: [{name:"yes", value: "![alt text](./assets/images/screenshot.png)"},{name:"no", value:""}]
        },
        {
            type: "input",
            name: "username",
            message: "What is your github username (@user)",
        },
        {
            type: "input",
            name: "email",
            message: "enter a contact email"

        },
        {
            type: "list",
            name: "license",
            choices: [
                {
                    name: "MIT",
                    value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
                },
                {
                    name: "Apache",
                    value: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
                },
                {
                    name: "GNU GPL V3",
                    value: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
                },
                {
                    name: "ISC",
                    value: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
                },
            ],
        },
    ])
    .then((data) => fs.writeFileSync("README.md", generateReadme(data)))
    .then(() => console.log("README.md was created"))
    .catch((err) => console.error(err));
};

const generateReadme = ({title, description, toc, installation, screen, license, username, email,}) =>
`
# ${title}
## License
${license}<br>
${toc}
## Description
${description}<br>
## Installation
${installation}<br>
${screen}
## Contact Me/Contributors <br>
### username: ${username}<br>
### email: ${email}<br>

`


startPrompt();
