const { expect } = require("chai");
const HomePage = require("./../pages/home.page");

describe("Tests over home page", function () {
  it("Home page load", async function () {
    await HomePage.open();
    await expect(await HomePage.mainTitle.isDisplayed()).to.be.equal(true);
    await expect(await browser.getUrl()).to.be.include(
      "http://uitestingplayground.com/",
      "Home page is not loading correctly"
    );
  });
});
