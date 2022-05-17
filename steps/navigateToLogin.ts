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

Given(/^I am on "(.*?)" login page$/, async (text) => {
  loginPage.naviguate();
  await expect(browser.getTitle()).to.eventually.equal("");
});
