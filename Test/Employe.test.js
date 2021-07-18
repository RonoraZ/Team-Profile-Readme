//Creating a test to make sure employe passes
const Employe = require('../Library/Employe') 

test("Representing employe ", () => { 
    const emp = new Employe(); 
    expect(typeof(emp)).toBe("object");
}); 

test("Inplementing a name ", () => { 
    const emp = new Employe(name); 
    const name = "Rick";
    expect(emp.name).toBe("name");
}); 

test("Inplementing an id", () => { 
    const emp = new Employe("x",testValue); 
    const testValue = 100;
    expect(emp.id).toBe("testValue");
}); 

test("Inplementing an email ", () => { 
    const emp = new Employe("x",1,testValue); 
    const testValue= "exam@exam.com";
    expect(emp.email).toBe("testValue");
}); 

test("Obtaining a name via getName() ", () => { 
    const emp = new Employe(testValue); 
    const testValue = "Rick";
    expect(emp.getName).toBe("testValue");
}); 

test("Obtaining an id via getID()", () => { 
    const emp = new Employe("x",testValue); 
    const testValue = 100;
    expect(emp.getID).toBe("testValue");
}); 

test("Obtaining an id via getEmail()", () => { 
    const emp = new Employe("x",1,testValue); 
    const testValue = "exam@exam.com";
    expect(emp.getEmail).toBe("testValue");
}); 

test("getRole() should return\"Employe\"",() => { 
    const emp = new Employe("Rick",1,"exam@exam.com"); 
    const testValue = "Employe"
    expect(emp.getRole()).toBe("testValue");
})