const Employee = require('../lib/employee');
const employee = require('../lib/employee');

describe("employee", () => {
    it("Should create a new employee with name, email, Gihtub, and employee ID", () => {
        const e = new Employee();
        expect(typeOf(e)).toBe("object");
    });

    it("Should set the name from constructor arguments", () => {
        const name = "Molly";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it("Should set ID from constructor arguments", () => {
        const testVal = 100;
        const e = new Employee("Olivia", testVal);
        expect(e.id).toBe(testVal);
    });

    it("Should set email from constructor arguments", () => {
        const testVal = "test@test.com";
        const e = new Employee("Olivia", testVal);
        expect(e.id).toBe(testVal);
    });

    
});