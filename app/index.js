"use strict";

const Generator = require("yeoman-generator");

const chalk = require("chalk");

const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(
        "Welcome to the prime " +
          chalk.red("generator-lazy-gift") +
          " generator!"
      )
    );

    const prompts = [
      {
        type: "input",
        name: "appName",
        message: "What is your project name ?",
        default: "lazy-gift"
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath("umiwithegg/"),

      this.destinationPath("umiwithegg/")
    );
  }
};
