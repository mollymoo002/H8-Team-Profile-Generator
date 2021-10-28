const Engineer = require("../lib/Engineer");

test("Should set Github account from the constructor", () => {
  const testVal = "mollymoo002";
  const e = new Engineer("Molly", 1, "test@test.com", testVal);
  expect(e.github).toBe(testVal);
});

test("Should have getRole() return Engineer", () => {
  const testVal = "Engineer";
  const e = new Engineer("Molly", 1, "test.test.com", "mollymoo002");
  expect(e.getRole()).toBe(testVal);
});

test("Should get username via getGithub()", () => {
  const testVal = "mollymoo002";
  const e = new Engineer("Molly", 1, "test@test.com", testVal);
  expect(e.getGithub()).toBe(testVal);
});
