const Intern = require("../lib/Intern");

test("Should set school from constructor", () => {
    const testVal = "Rider";
    const e = new Intern("Molly", 1, "test@test.com", testVal);
    expect(e.school).toBe(testVal);
});

test("Should have getRole() return Intern", () => {
    const testVal = "Intern";
    const e = new Intern("Molly", 1, "test@test.com", "Rider");
    expect(e.getRole()).toBe(testVal);
});

test("Should get school from getSchool()", () => {
    const testVal = "Rider";
    const e = new Intern("Molly", 1, "test@test.com", testVal);
    expect(e.getSchool()).toBe(testVal);
});