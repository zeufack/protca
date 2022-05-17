import { ZtrainLoginPage } from "../pageObjectModel/ztrainLoginPage";
const { When } = require("@cucumber/cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const loginPage: ZtrainLoginPage = new ZtrainLoginPage();

When("I type email {string}", async (email: string) => {
  await loginPage.fillEmail(email);
});

When("I type password {string}", function (string) {
  return "pending";
});
