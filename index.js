 // index.js runs the application
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const path = require('path')

const inquirer = require('inquirer');
const fs = require('fs');
const DIST_DIR = path.resolve(__dirname,'dist')
const DIST_PATH = path.join(DIST_DIR,'teamProfile.html')
const teamMembers = []


//function teamGenerator() {
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
                choices: ['Engineer', 'Intern', ' ✅ Team is Complete!!']  
            }
        ])
        .then((response)=> {
            switch(response.choice){
                case 'Engineer': 
                createEngineer()
                break;
                case 'Intern':
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
                response.engineers_id,
                response.engineers_email,
                response.engineers_github

                )
                teamMembers.push(engineer)
                nextStep()



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
                message: "What is the intern's email address?" 
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
                nextStep()

        })
    }
    function buildTeam(){
        //teamMembers


        let fileName = "dist/index.html";
        let data = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="../dist/style.css">
        </head>
        <body>
            <h1>My Team</h1>
            <div class="container">`;


        teamMembers.map(t => {

            data += `<div class="card">
                    <h2>${t.name}<br>`
                    
                    

                    switch(t.getRole()){
                        
                        case "Manager": data += `🍵`;  break;
                        case "Intern":  data += `🎓`;  break;
                        case "Engineer":  data += `👓`; break;
                   }
                    
            data += `${t.getRole()}</h2>
                    <p>ID: ${t.id}</p> 
                    <p>EMAIL: <a href="mailto:${t.email}">${t.email}</a></p>
                    <p></p>
                    `;

                    switch(t.getRole()){
                        
                         case "Manager": data += `<p>${t.getOfficeNumber()}</p>`;  break;
                         case "Intern":  data += `<p>${t.school}</p>`;  break;
                         case "Engineer":  data += `<p><a href="http://github.com/${t.github}">${t.github}</a></p>`; break;
                    }

                    // switch case above not working

                    

                   


                     

                     data += `</div>`;
         })

       

         data += `</div>
            </body>
            </html`;

        fs.writeFile( fileName, data, {},()=>{

            console.log("i am done writing");
        }) ;

    }
//}

createManager();






   


    



