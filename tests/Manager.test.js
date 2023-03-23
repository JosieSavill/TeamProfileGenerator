 //jest tests
 const Manager = require('../lib/Manager')

const person =  new Manager("Greg", 23, "greg@gmail.com", "10")

test("Checking Manager Class", () => {
   expect(person.getName()).toBe("Greg")
})