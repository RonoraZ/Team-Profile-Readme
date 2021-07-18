//Creating the different requirements in order to pull from each 
const Manager = require('./Library/Manager');
const Engineer = require('./Library/Engineer');
const Intern = require('./Library/Intern'); 
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs'); 
const util = require('util'); 

const mkdirAsync = util.promisify(fs.mkdir); 
const writeFileAsync = util.promisify(fs.writeFile); 

const OUTPUT_DIR = path.resolve(__dirname,'output'); 
const outputPath = path.join(OUTPUT_DIR, 'team.html'); 

const render = require('./SRC/pageTemplate'); 

/*Creating questions and inquirer to create information 
on the team and each objective for them .*/ 

const Employe = require('./Library/Employe'); 

const questions = [ 
    { 
        name:'name', 
        message:"What is the employe's name?" 
    }, 

    { 
        name:'id', 
        message:"What is the employe's id?" 
    }, 

    { 
        name:'email', 
        message:"What is the employe's email?" 
    }, 

    { 
        type:'list', 
        name:'role', 
        message:"Employe's role in team?", 
        choices: ['Manager','Engineer','Intern'],
    },
]; 

//Constructing questions for each role  

const questionForManager = [ 
    { 
        name:'OfficeNumber', 
        message:"What is the manager's office number?" 
    },
]; 

const questionForEngineer = [ 
    { 
        name:'Github', 
        message:"What is the engineer's Github?" 
    },
]; 

const questionForIntern = [ 
    { 
        name:'School', 
        message:"What's the Intern school?" 
    },
]; 

//Implementing continuation to add more information 

const confirm = [ 
    { 
        type:'confirm', 
        name:'adding', 
        message:"Input more employee Information?",
    }
]; 

const init = async () => { 
    const employe = []; 
    let addMore = true ; 
    
    //This will decode name,id,email,role from the answer. 

    while(addMore){ 
        const{ 
            name,id,email,role
        } = await inquirer.prompt(questions); 

        if (role === 'Manager'){ 
            const{ 
                OfficeNumber
            } = await inquirer.prompt(questionForManager); 
            //Making new manager object to be able to push employe array
            employe.push(new Manager(name ,id,email,OfficeNumber));
        } 
           else if(role ==='Engineer'){ 
            const{ 
                Github
            } = await inquirer.prompt(questionForEngineer);
            //Making new engineer object to be able to push employe array 
            employe.push(new Engineer(name ,id,email,Github));

        } else if (role === 'Intern'){ 
            const {School 
            } = await inquirer.prompt(questionForIntern); 
            //Making new intern object to be able to push employe array
            employe.push(new Intern(name,id,email,School));
        } 
        //Make sure the user implements the employe information 
        const {adding} = await inquirer.prompt(confirm); 

        addMore = adding;
    } 
    //Creating a function that will generate and return the block of html for each employe. 

    const html = render(employe);  

    //Connecting the outpath that way the information can be created in that location . 

    // if(!fs.existsSync(outputPath)){ 
    //     const error = await mkdirAsync(OUTPUT_DIR); 
    //    error && console.error(error);
    // } 
    //If the outputpath is not met it will throw an error until the writeFileAsync is connected .
    const error = await writeFileAsync(outputPath,html); 
       error && console.error(error);
}; 

init();