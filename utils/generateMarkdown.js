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






module.exports = generateMarkdown;
