const Employe = require('./Employe') 

class Engineer extends Employe {  
    constructor(name, id,email,Github) 
    { 
        super(name,id,email); 
        this.Github = Github;
    } 
    
    getGithub() 
    { 
        return this.Github; 
    }

    getRole() 
    { 
        return "Engineer"
    }
    
} 

module.exports = Engineer;