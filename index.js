 // index.js runs the application


const inquirer = require('inquirer');
const fs = require('fs');



// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number:

inquirer
  .prompt([
    {
      type: 'input',
      name: 'manager_name',
      message: 'Hello !!  What is your name?'
    },
    {
        type: "input",
        name: 'employee_id',
        message: "What is your employee ID number?"  
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
        
    },
    {
        type: 'input',
        name: 'office_number',
        message: "What is your office number?"  
    },

    // WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team:
    {
        type: 'list',
        name: 'team',
        message: "Select an employee by job title to add to your team, or select 'Team is Complete'",
        choices: [' 👓  Engineer', ' 🎓 Intern', ' ✅ Team is Complete !!']  
    }

//     WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu



// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu



// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated -->

  ])
  .then((data) => {

    console.log('Success!')
    console.log (data)

   // TODO: write data to html file:

// function writeToFile(fileName, data) {


//     fs.writeFile( fileName, data, {},()=>{

//         console.log("i am done writing");
//     }) ;


// }




  });