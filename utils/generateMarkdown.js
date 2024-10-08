// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return '';
  }
  const encodedLicense = encodeURIComponent(license); // URL-encode the license name
  return `![License](https://img.shields.io/badge/License-${encodedLicense}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  return `https://opensource.org/licenses/${license}`;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
To install the necessary dependencies, run the following command:

\`\`\`
npm install
\`\`\`

## Usage
To generate a README file, run:

\`\`\`
node index.js
\`\`\`

Follow the prompts to enter project details such as title, description, license, etc.

### Demo Video
[![Watch the demo video](./assets/images/readme-generator-image.jpg)](https://drive.google.com/file/d/1ISjgLDs7bIKPgQ1Ma9K7gRW3QX0DEaa9/view?usp=sharing)

This demo shows the program's features, including generating a README file based on user inputs. Watch a demo by clicking the image above.


## License
${renderLicenseSection(data.license)}

## Contributing
If you'd like to contribute to this project, please fork the repository and submit a pull request. For any major changes, please open an issue first to discuss what you'd like to change.

## Tests
To run tests, use the following command:

\`\`\`
npm test
\`\`\`

## Questions
If you have any questions about the project, feel free to contact me:

- GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
- Email: ${data.email}
`;
}
export default generateMarkdown;
