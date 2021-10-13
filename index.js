//Pull in file system and utilize inquirer package
const fs = require("fs");
const inquirer = require("inquirer");

//Pulls in library
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const genFile = require("./src/template");

//Pulls in questions as to not clutter index file
const quest = require("./lib/questions");

//Holder array for added members
const team = [];

//Write the file check for errors
function writeToFile(fileName, f) {
  fs.writeFile(fileName, f, (error) => {
    error ? console.log(error) : console.log("Check out your HTML file!");
  });
}
