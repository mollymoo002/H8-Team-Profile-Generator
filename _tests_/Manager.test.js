const Manager = require("../lib/Manager");

test("Should set the office number from constructor", () => {
    const testVal = 100;
    const e = new Manager("Molly", 1, "test@test.com", testVal);
    expect (e.officeNumber).toBe(testVal);
});

test("Should have getRole() return Manager", () => {
    const testVal = "Manager";
    const e = new Manager("Molly", 1, "test@test.com", 100);
    expect(e.getRole()).toBe(testVal);
});

test("Should get office number from getOffice()", () => {
    const testVal = 100;
    const e = new Manager("Molly", 1, "test@test.com", testVal);
    expect(e.getOfficeNumber()).toBe(testVal);
});