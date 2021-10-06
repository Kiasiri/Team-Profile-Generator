const Manager = require("../lib/Manager");

describe("Manager test", () => {
  describe("Set office number", () => {
    it("Sets office number via console", () => {
      const testOfficeNumber = 10;
      const empObject = new Manager(
        "Steve",
        42,
        "email@emailcom",
        testOfficeNumber
      );
      expect(empObject.officeNumber).toBe(testOfficeNumber);
    });
  });

  describe("getRole() functions", () => {
    it("should return role as Manager", () => {
      const role = "Manager";
      const empObject = new Manager("Steve", 42, "email@email.com", 100);
      expect(empObject.getRole()).toBe(role);
    });
  });
  describe("github() functions", () => {
    it("should return username of object", () => {
      const testOfficeNumber = 100;
      const empObject = new Manager(
        "Steve",
        42,
        "email@email.com",
        testOfficeNumber
      );
      expect(empObject.getOfficeNumber()).toBe(testOfficeNumber);
    });
  });
});
