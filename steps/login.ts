import {
  browser,
  element,
  by,
  By,
  $,
  $$,
  ExpectedConditions,
} from "protractor";
import { ZtrainLoginPage } from "../pageObjectModel/ztrainLoginPage";
const { Given, When, Then } = require("@cucumber/cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const loginPage: ZtrainLoginPage = new ZtrainLoginPage();

When(/^I click on login button$/, async () => {
  await loginPage.clickButton.click();
});
