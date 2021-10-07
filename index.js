const makeHTML = require("./makefile");
const q = require("./questions");
const inquirerQ = require("./prompts");
const fs = require("fs");

async function init() {
  const answerArr = [];
  try {
    let answerManager = await inquirerQ(q.managerQuestions);
    answerArr.push(answerManager);
    answerResults(answerArr);
  } catch (error) {
    console.error(error);
  }
}

async function answerResults(answerArr) {
  try {
    let select = await inquirerQ(q.selectMem);
    switch (select.choice) {
      case "Add an Engineer":
        let answerEngineer = await inquirerQ(q.engineerQuestions);
        answerArr.push(answerEngineer);
        answerResults(answerArr);
        break;
      case "Add an Intern":
        let answerIntern = await inquirerQ(q.internQuestions);
        answerArr.push(answerIntern);
        answerResults(answerArr);
        break;
      case "Finish Building Team":
        const templateData = await makeHTML(answerArr);
        writeToFile(templateData);
        break;
    }
  } catch (error) {
    console.error(error);
  }
}

function writeToFile(data) {
  console.log("Writing file now");
  fs.writeFileSync(`./index.html`, data);
}

init();
