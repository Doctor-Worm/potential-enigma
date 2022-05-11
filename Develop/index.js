// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: title => {
            if (title) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project. (Required)',
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log('Please provide a description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (Required)',
        validate: installation => {
            if (installation) {
                return true;
            } else {
                console.log('Please provide a installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed. (Required)',
        validate: usage => {
            if (usage) {
                return true;
            } else {
                console.log('Please provide usage information!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmContribute',
        message: 'Would you like others developers to know how to contribute to your application or package?',
        default: true
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide guidelines for how to contribute:',
        when: ({ confirmContribute }) => {
            if (confirmContribute) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTest',
        message: 'Do you have a way test your application?',
        default: true
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please explain how to test your application:',
        when: ({ confirmTest }) => {
            if (confirmTest) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Do you have a license for your application?',
        default: true
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which license do you have? (Choose One)',
        choices: ['MIT', 'BSD', 'GPL', 'Apache'],
        when: ({ confirmLicense }) => {
            if (confirmLicense) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub Username? (Required)',
        validate: username => {
            if (username) {
                return true;
            } else {
                console.log('Please provide your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide your email address so that other developers can contact you with additional questions.',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please provide your email address!');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions);
};

// Function call to initialize app
init()
    .then(data => {
        return generateMarkdown(data)
    })
    .then(markdown => {
        return writeToFile(markdown);
    })
    .catch(err => {
        console.log(err);
    });
