const { expect, it, describe } = require("@jest/globals");
const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Set school", () => {
    it("Sets school using console", () => {
      const testCollege = "UTSA";
      const empObject = new Intern("Steve", 42, "email@email.com", testCollege);
      expect(empObject.school).toBe(testCollege);
    });
  });
  describe("GetRole()", () => {
    it("getRole() should return Intern", () => {
      const testValue = "Intern";
      const e = new Intern("Steve", 42, "email@email.com", "UTSA");
      expect(e.getRole()).toBe(testValue);
    });
  });
  describe("getSchool()", () => {
    it("get school via getSchool()", () => {
      const testCollege = "UTSA";
      const empObject = new Intern("Steve", 42, "email@email.com", testCollege);
      expect(empObject.getSchool()).toBe(testCollege);
    });
  });
});
