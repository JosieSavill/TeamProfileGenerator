 //jest tests
 const Intern = require('../lib/Intern')


const person =  new Intern("Greg", 23, "sue@gmail.com", "Harvard")

test("Checking Intern Class", () => {
   expect(person.getName()).toBe("Greg")
})