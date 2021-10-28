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

    describe("getName", () => {
        it("Should get a name via getName()", () => {
            const testVal = "Molly";
            const e = new Employee(testVal);
            expect(e.getName().toBe(testVal));
        });
    });

    describe("getId", () => {
        it("Should get an id via getId()", () => {
            const testVal = 100;
            const e = new Employee("Olivia", testVal);
            expect(e.getId()).toBe(testVal);
        });
    });

    describe("getEmail", () => {
        it("Should get email via getEmail()", () => {
            const testVal = "test@test.com";
            const e = new Employee("Olivia", 1, testVal);
            expect(e.getEmail()).toBe(testVal);
        });
    });

    describe("getRole", () => {
        it("Should have getRole() return Employee", () => {
            const testVal = "Employee";
            const e = new Employee("Molly", 1, "test@test.com");
            expect(e.getRole()).toBe(testVal);
        });
    });
});