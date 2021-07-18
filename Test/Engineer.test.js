//Creating a test for Engineer to pass . 

const Engineer = require("../Library/Engineer") 

test("Inplementing a Github", () => { 
    const emp = new Engineer("x",1,"exam@exam.com",testValue); 
    const testValue = "GithubUser";
    expect(emp.github).toBe("testValue"); 
});   

test("Obtaining a Github via getGithub() ", () => { 
    const emp = new Engineer ("x",1,"exam@exam.com",testValue); 
    const testValue = "GithubUser";
    expect(emp.getGithub).toBe("testValue");
});  

test("getRole() should return\"Engineer\"",() => { 
    const emp = new Engineer ("x",1,"exam@exam.com","GithubUser"); 
    const testValue = "Engineer"
    expect(emp.getRole()).toBe("testValue");
});