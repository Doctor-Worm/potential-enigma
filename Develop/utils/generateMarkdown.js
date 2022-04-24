const renderLicenses = require('./renderLicenses');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (!data.confirmLicense) {
    return '';
  }
  return `
  ![DUB](https://img.shields.io/badge/license-${data.license}-blue?style=for-the-badge)
  `;
};

const contribute = contribute => {
  if (!contribute) {
    return '';
  }
  return `
## How to Contribute:
${contribute}
  `;
};

const tableContentContribute = (data) => {
  if (!data.confirmContribute) {
    return '';
  }
  return `
- [How to Contribute](#how-to-contribute)
  `;
};

const test = test => {
  if (!test) {
    return '';
  }
  return `
## Tests:
${test}
  `;
};

const tableContentTest = (data) => {
  if (!data.confirmTest) {
    return '';
  }
  return `
- [Tests](#tests)
  `;
};

const license = data => {
  if (!data.confirmLicense) {
    return '';
  }
  return `
## License:
${renderLicenses(data)}
  `;
};

const tableContentLicense = (data) => {
  if (!data.confirmLicense) {
    return '';
  }
  return `
- [License](#license)
  `;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderLicenseBadge(data)}
# ${data.title}
  
## Description:
${data.description}

<br>

## Table of Contents:
- [Installation Instructions](#installation-instructions)
- [Usage Information](#usage-information)
${tableContentContribute(data)}
${tableContentTest(data)}
${tableContentLicense(data)}
- [Questions](#questions)

___

<br>

## Installation Instructions:
${data.installation}

<br>

## Usage Information:
${data.usage}

<br>

${contribute(data.contributing)}

<br>

${test(data.test)}

<br>

${license(data)}

___

<br>

## Questions:
Feel free to contact me through one of the ways below -
- **[Contact me through GitHub.](https://github.com/${data.username}/)**
- **[Email me.](mailto:${data.email})**
`;
}

module.exports = generateMarkdown;