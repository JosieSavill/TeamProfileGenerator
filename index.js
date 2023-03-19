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
      type: 'list',
      message: 'Select Job Title',
      name: 'jobTitle',
      choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email'
    },
  ])
  .then((data) => {

    console.log('Success!')
    console.log (data)

    if {
        
    }
  });