const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("getName", () => {
    it("Make sure it's setting the Engineer name and pulling it as well.", () => {
      const name = "Tim";
      const nameTest = new Engineer(name, 32, "email", "github");
      expect(nameTest.getName()).toBe(name);
    });
  });
  describe("getID", () => {
    it("Make sure it's setting the Engineer ID and pulling it as well.", () => {
      const eId = "32";
      const idTest = new Engineer("Tim", eId, "email", "github");
      expect(idTest.getId()).toBe(eId);
    });
  });
  describe("getEmail", () => {
    it("Make sure it's setting the Engineer E-mail and pulling it as well.", () => {
      const email = "tim@gmail.com";
      const emailTest = new Engineer("Tim", 32, email, "github");
      expect(emailTest.getEmail()).toBe(email);
    });
  });
  describe("getGithub", () => {
    it("Make sure it's setting the Engineer E-mail and pulling it as well.", () => {
      const github = "timdavidson2";
      const githubTest = new Engineer("Tim", 32, "email", github);
      expect(githubTest.getGithub()).toBe(github);
    });
  });
  describe("getRole", () => {
    it("Make sure it's setting the role and pulling it as well.", () => {
      const roleString = "Engineer";
      const roleTest = new Engineer("Tim", 1, "tim@gmail.com", "github");
      expect(roleTest.getRole()).toBe(roleString);
    });
  });
});
