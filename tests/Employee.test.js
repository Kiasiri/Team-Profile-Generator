const { test, it } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe("Employee test", () => {
  //test 1
  describe("Made an Employee object", () => {
    it("Makes an object", () => {
      const empObject = new Employee();
      expect(typeof empObject).toBe("object");
    });
  });
  //test 2
  describe("Set name of employee", () => {
    it("should set name", () => {
      const name = "Steve";
      const empObject = new Employee("Steve");
      expect(empObject.name).toBe(name);
    });
  });
  //Test 3
  describe("Set id of Employee", () => {
    const testID = 42;
    const empObject = new Employee("Steve", 42);
    expect(empObject.id).toBe(testID);
  });
  //Test 4
  describe("Set Email of Employee", () => {
    const testEmail = "email@email.com";
    const empObject = new Employee("Steve", 42, testEmail);
    expect(empObject.email).toBe(testEmail);
  });
  //Test 5
  describe("Gets name by getName()", () => {
    const name = "Steve";
    const empObject = new Employee(name);
    expect(empObject.getName()).toBe(name);
  });
  //Test 6
  describe("Gets id by getId()", () => {
    const testID = 42;
    const empObject = new Employee("Steve", 42);
    expect(empObject.getId()).toBe(testID);
  });
  //7
  describe("Gets email by getEmail()", () => {
    const testEmail = "email@email.com";
    const empObject = new Employee("Steve", 42, testEmail);
    expect(empObject.getEmail()).toBe(testEmail);
  });
  //8
  describe("Gets role by getRole()", () => {
    const role = "Employee";
    const empObject = new Employee("Steve", 42, "email@email.com");
    expect(empObject.getRole()).toBe(role);
  });
});
