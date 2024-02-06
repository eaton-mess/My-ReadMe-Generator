const fs = require("fs");
let IconUsage;

// function to allow certain badges to be used depending on User's choice of License 
function generateLicense(data) {
  if (data.license === 'MIT') {
    IconUsage = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (data.license === 'GNU General Public v2.0') {
    IconUsage = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  } 
    else if (data.license === 'Apache 2.0') {IconUsage = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  return IconUsage;
}

// function to generate markdown for README
function generateMarkdown(data) {

  generateLicense(data);

  return markdownData = (

    `# ${data.title}
${IconUsage}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
This project is licensed under the ${data.license} License.

## Questions
If you have any queries, please do feel free to reach out on ${data.email}.\ 
If you have a spare moment, please check out my GitHub for all my other works! [GitHub profile](https://github.com/${data.username}).`
  )
}

module.exports = generateMarkdown;
