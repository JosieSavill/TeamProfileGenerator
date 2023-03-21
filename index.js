 // index.js runs the application
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const path = require('path')
const render = require('./src/pageTemplate')
const inquirer = require('inquirer');
const fs = require('fs');
const DIST_DIR = path.resolve(__dirname,'dist')
const DIST_PATH = path.join(DIST_DIR,'teamProfile.html')
const teamMembers = []


function teamGenerator() {
    function createManager() {
        console.log('Welcome to the Team Profile Generator!!\nAnswer the following prompts to build your team ...')
        inquirer.prompt([
            {
                type: 'input',
                name: 'manager_name',
                message: 'Hello!!  What is your name?'
            },
            {
                type: "input",
                name: 'manager_id',
                message: "What is your employee ID number?"  
            },
            {
                type: 'input',
                name: 'manager_email',
                message: 'What is your email address?'
            },
            {
                type: 'input',
                name: 'office_number',
                message: "What is your office number?"  
            },
            
        ]) .then((response)=> {
            const manager = new Manager(
                response.manager_name,
                response.manager_id,
                response.manager_email,
                response.office_number
            )
            teamMembers.push(manager)
            nextStep() 
        })
    } 
    function nextStep() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: "Select an employee by job title to add to your team, or select 'Team is Complete'",
                choices: [' 👓  Engineer', ' 🎓 Intern', ' ✅ Team is Complete!!']  
            }
        ])
        .then((response)=> {
            switch(response.choice){
                case ' 👓  Engineer': 
                createEngineer()
                break;
                case ' 🎓 Intern':
                createIntern()
                break;
                default:
                buildTeam() 
            }
        })
    }
    function createEngineer(){
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineers_name',
                message: "What is the engineer's name?" 
            },
        
            {
                type: 'input',
                name: 'engineers_id',
                message: "What is the engineer's ID?" 
            },
        
            {
                type: 'input',
                name: 'engineers_email',
                message: "What is the engineer's email address?" 
            },
        
            {
                type: 'input',
                name: 'engineers_github',
                message: "What is the engineer's GitHub user name?" 
            }
         
        ])
        .then((response)=> {
            const engineer = new Engineer(
                response.engineers_name,
                response.engineeers_id,
                response.engineers_email,
                response.engineers_github

                )
                teamMembers.push(engineer)


        })
    }
    function createIntern(){
        inquirer.prompt([
            {
                type: 'input',
                name: 'interns_name',
                message: "What is the intern's name?" 
            },
        
            {
                type: 'input',
                name: 'interns_id',
                message: "What is the intern's ID?" 
            },
        
            {
                type: 'input',
                name: 'interns_email',
                message: "What is the engineer's email address?" 
            },
        
            {
                type: 'input',
                name: 'interns_school',
                message: "What is the name of the school the intern is currently attending?" 
            }
         
        ])
        .then((response)=> {
            const intern = new Intern(
                response.interns_name,
                response.interns_id,
                response.interns_email,
                response.interns_school

                )
                teamMembers.push(intern)


        })
    }
}
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number:



    // WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team:
   

//     WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
   

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

    {
        type: 'input',
        name: 'intern_name',
        message: "What is the intern's name?" 
    },


    
    {
        type: 'input',
        name: 'intern_id',
        message: "What is the intern's name?" 
    },

    {
        type: 'input',
        name: 'intern_email',
        message: "What is the intern's email address?" 
    },

    {
        type: 'input',
        name: 'intern_school',
        message: "What is the name of the school the intern is attending ?" 
    },


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