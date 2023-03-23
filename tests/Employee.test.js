 //jest tests
const Employee = require('../lib/Employee')

const person = new Employee("Greg", 23, "greg@gmail.com",)

 test("Checking Employee Class", () => {
    expect(person.getName()).toBe("Greg")
 })

//  test("Checking Employee Class", () => {
//     expect(person.getName()).toBe("Greg")
//  })