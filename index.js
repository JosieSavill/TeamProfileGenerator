 // runs the application
 const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'checkbox',
      message: 'Select Job Title',
      name: 'stack',
      choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'Email: '
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });