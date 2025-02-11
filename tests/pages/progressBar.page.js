const Page = require("./page");
class ProgressBarPage extends Page {
  get startButton() {
    return $("#startButton");
  }
  get stopButton() {
    return $("#stopButton");
  }
  get progressBar() {
    return $("#progressBar");
  }
  get result() {
    return $("#result");
  }

  async open() {
    await super.open("progressbar");
  }

  async clickAndWait(percentage) {
    (await this.startButton).click();
    await this.progressBar.waitUntil(
      async function () {
        return (await this.getText()) === `${percentage}%`;
      },
      {
        timeout: 30000,
        timeoutMsg: `Expected to be equal to ${percentage}%`,
        interval: 2,
      }
    );
    await this.stopButton.click();
  }
}

module.exports = new ProgressBarPage();
