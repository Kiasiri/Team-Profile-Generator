const { test, expect, it } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

describe("Engineer test", () => {
  describe("Gets GIThub account", () => {
    it("gets username", () => {
      const userName = "GithubUser";
      const empObject = new Engineer("Steve", 42, "email@emailcom", userName);
      expect(empObject.github).toBe(userName);
    });
  });

  describe("getRole() functions", () => {
    it("should return role as engineer", () => {
      const role = "Engineer";
      const empObject = new Engineer(
        "Steve",
        42,
        "email@email.com",
        "GithubUser"
      );
      expect(empObject.getRole()).toBe(role);
    });
  });
  describe("github() functions", () => {
    it("should return username of object", () => {
      const userName = "githubUser";
      const empObject = new Engineer("Steve", 42, "email@email.com", userName);
      expect(empObject.getGithub()).toBe(userName);
    });
  });
});
