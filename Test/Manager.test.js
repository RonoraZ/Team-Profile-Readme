//Creating a test for Intern to pass . 

const Manager = require("../Library/Manager");
 

test("Inplementing a Office Number", () => { 
    const emp = new Manager("x",1,"exam@exam.com",testValue); 
    const testValue = 100;
    expect(emp.OfficeNumber).toBe("testValue"); 
});   

test("Obtaining a Office Number via getOffice() ", () => { 
    const emp = new Manager ("x",1,"exam@exam.com",testValue); 
    const testValue = 100;
    expect(emp.getOfficeNumber).toBe("testValue");
});  

test('getRole() should return"Manager"',() => { 
    const emp = new Manager ("x",1,"exam@exam.com",100); 
    const testValue = "Manager";
    expect(emp.getRole()).toBe("testValue");
});