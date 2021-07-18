//Creating a test for Intern to pass . 

const Intern = require("../Library/Intern") 

test("Inplementing a School", () => { 
    const emp = new Intern("x",1,"exam@exam.com",testValue); 
    const testValue = "UPen";
    expect(emp.school).toBe("testValue"); 
});   

test("Obtaining a School via getSchool() ", () => { 
    const emp = new Intern ("x",1,"exam@exam.com",testValue); 
    const testValue = "School";
    expect(emp.getSchool).toBe("testValue");
});  

test("getRole() should return\"Intern\"",() => { 
    const emp = new Intern ("x",1,"exam@exam.com","UPen"); 
    const testValue = "Intern"
    expect(emp.getRole()).toBe("testValue");
});