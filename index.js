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
            message:
            "Add a description. Include motivation, reason for building, what problem it solved, and, what you learned",
        },
        {
            type: "checkbox",
            name: "toc",
            message:
            "What will be added with table of contents",
            choices: [
                {
                    name: "installTOC",
                    value: "- [Installation](#installation)",
                },
                {
                    name: "usageTOC",
                    value: "- [Usage](#usage)",
                },
                {
                    name: "creditsTOC",
                    value: "- [Credits](#credits)",
                },
                {
                    name: "licenseTOC",
                    value: "- [License](#license)",
                },
            ]

        },
        {
            type: "input",
            name: "install",
            message: "How can the project be installed/used",
        },
        {
            type: "input",
            name: "screen",
            message: "Add you screenshot path(./assets/images/screenshot.png)",
        },
        {
            type: "input",
            name: "credits",
            message: "Add any credits",
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

const generateReadme = ({title, description, installation, screen, credits, license, installationTOC: installationTOC, usageTOC, creditsTOC, licenseTOC }) =>
`
# ${title}
## Description
${description}
## Table of Contents
${installationTOC}  
${usageTOC}
${creditsTOC}
${licenseTOC}
## Installation
${installation}
## Usage
![alt text](${screen})
## Credits
${credits}
## License
${license}
`

startPrompt();

// const init = () => {
//   startPrompt()
    
// };

// init();