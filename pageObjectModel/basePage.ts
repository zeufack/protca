import { ProtractorBrowser, Browser, browser, ElementFinder } from "protractor";

export class BasePage {
  private browser: ProtractorBrowser = browser;
  private baseUrl: string = "https://ztrain-web.vercel.app/";
  constructor(url: string) {
    this.baseUrl = this.baseUrl + url;
  }

  public fillTextField(text: string, textField: ElementFinder): void {
    textField.sendKeys(text);
  }
  public naviguate() {
    this.browser.get(this.baseUrl);
  }
}
