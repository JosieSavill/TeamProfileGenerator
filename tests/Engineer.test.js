 //jest tests

const Engineer = require('../lib/Engineer')

const person = new Engineer("Greg", 23, "greg@gmail.com",)

test("Checking Engineer Class", () => {
   expect(person.getName()).toBe("Greg")
})