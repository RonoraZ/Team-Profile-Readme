//Generating a template for the team  

const generateTeam = team => { 

//Generating an html template for manager 

const generateManager = manager =>{ 
    
    return`
    
<div class=" card employee-ids"> 
    <h5 class="card-header">${manager.getName()}<br /><br />${manager.getRole()}</h5> 
    <ul class="list-group list-group-item">  
        <li class="list-group-item">ID:${manager.getID()}</li>
        <li class="list-group-item">Email Address:${manager.getEmail()}</li>
        <li class="list-group-item">Office Number:${manager.getOfficeNumber()}</li>

    </ul>
</div>
    `; 
}   


//Generating an html template for engineer  

const generateEngineer = Engineer =>{ 
   
    return`

<div class=" card employee-ids"> 
    <h5 class="card-header">${Engineer.getName()}<br /><br />${Engineer.getRole()}</h5> 
    <ul class="list-group list-group-item">  
     <li class="list-group-item">ID:${Engineer.getID()}</li>
     <li class="list-group-item">Email Address:${Engineer.getEmail()}</li>
     <li class="list-group-item">Github:${Engineer.getGithub()}</li>

    </ul>
</div> 
  `;
}
   

 //Generating an html template for intern 

 const generateIntern = Intern => {
   
      return`
   
   <div class=" card employee-ids"> 
      <h5 class="card-header">${Intern.getName()}<br /><br />${Intern.getRole()}</h5> 
       <ul class="list-group list-group-item">  
         <li class="list-group-item">ID:${Intern.getID()}</li>
         <li class="list-group-item">Email Address:${Intern.getEmail()}</li>
         <li class="list-group-item">School:${Intern.getSchool()}</li>

        </ul>
    </div>
     `;
  }

   //Creating a function in order to push each html through each Manager,Engineer,Intern . 

   const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");
} 
 
//Creating a function in order to generate the entire page  

module.exports = team =>{ 
    return`  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title> 
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">  
        <link rel="stylesheet" href="./style.css">
    </head>
    <body> 
    
    <nav class=" navbar-blue bg-blue mb-10"> 
        <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
    </nav>  
    
    <div class="container"> 
        <div class="row">  
            <div class="team-crew col-10 d-flex justify-content-center">  
            ${generateTeam(team)}
            
            </div>
        </div>    
    </div>   
    
    </body>
    </html>`; 

  
}
