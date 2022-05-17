import { Config, browser } from "protractor";
import { Reporter } from "./utils/reporter";
import allureReporter from "./utils/allureReporter";

// path to js reports
const jsonReports = process.cwd() + "/reports/json";
// get the repporter

const reporter: Reporter = Reporter.getReporter();

export const config: Config = {
  // Define framewor as custom for cucumber
  framework: "custom",

  // define selenum address

  seleniumAddress: "http://localhost:4444/wd/hub",

  // require the framework
  frameworkPath: require.resolve("protractor-cucumber-framework"),

  // user .feature file instead of jasmine file
  // specs: ["spec.ts"],
  specs: ["../features/*.feature"],
  // cucumber command line options
  cucumberOpts: {
    require: ["./steps/*.js", "./utils/*.js"], // require step definition files before executing features
    tags: [], // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    // strict: true, // <boolean> fail if there are any undefined or pending steps
    format: ["json:../reports/json/cucumber_report.json"], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    // "dry-run": false, // <boolean> invoke formatters without executing steps
    // compiler: "ts:ts-node/register", // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
  },

  // define a base url[don't like it]
  baseUrl: "https://ztrain-web.vercel.app/auth/login",

  onPrepare: async () => {
    await browser.waitForAngularEnabled(false); // desable wait for angular as we are not going to use only angular app
    browser.manage().window().maximize(); // maximize the browser before executing the feature files
    reporter.createDirectory(jsonReports); // create a folder for report, as build command start by deleting the existing build folder
  },

  onComplete: () => {
    // TODO Refactor code to use allure report in place
    Reporter.createHTMLReport();
  },

  // a global timeout for our kmer slow internet :lol
  getPageTimeout: 10000,
};
