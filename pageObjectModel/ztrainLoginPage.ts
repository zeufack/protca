import {
  browser,
  element,
  by,
  By,
  $,
  $$,
  ExpectedConditions,
  ElementFinder,
} from "protractor";
import { BasePage } from "./basePage";

export class ZtrainLoginPage extends BasePage {
  public emailField: ElementFinder;
  public passwordField: ElementFinder;
  public clickButton: ElementFinder;

  constructor() {
    super("auth/login");
    this.clickButton = $("email_login");
    this.emailField = $("password_login");
    this.passwordField = $("btn_login");
  }

  public fillEmail(email: string): void {
    this.fillTextField(email, this.emailField);
  }
  public fillPassWord(password: string): void {
    this.fillTextField(password, this.passwordField);
  }
}
