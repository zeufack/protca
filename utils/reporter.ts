import * as reporter from "cucumber-html-reporter";
import * as fs from "fs";
import * as mkdirp from "mkdirp";
import * as path from "path";
const jsonReports = path.join(process.cwd(), "/reports/json");
const htmlReports = path.join(process.cwd(), "/reports/html");
const targetJson = jsonReports + "/cucumber_report.json";

const cucumberReporterOptions = {
  theme: "bootstrap" as const,
  jsonFile: targetJson,
  output: htmlReports + "/cucumber_reporter.html",
  reportSuiteAsScenarios: true,
  launchReport: true,
};

export class Reporter {
  // Use Singleton design pattern to be sure that we only have one instance of reporter in memory
  private static reporter: Reporter;

  /**
   * not instanciable contructor
   */
  private constructor() {}

  /**
   * a getter
   * @returns the current instance of reporter
   */
  public static getReporter(): Reporter {
    if (!Reporter.reporter) {
      Reporter.reporter = new Reporter();
    }

    return Reporter.reporter;
  }

  /**
   * create a directory with given name
   * @param dir: directory name
   */
  public createDirectory(dir: string) {
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  }

  /**
   * create html reporting folder
   */
  public static createHTMLReport() {
    try {
      reporter.generate(cucumberReporterOptions); // invoke cucumber-html-reporter
    } catch (err) {
      if (err) {
        throw new Error("Failed to save cucumber test results to json file.");
      }
    }
  }
}
