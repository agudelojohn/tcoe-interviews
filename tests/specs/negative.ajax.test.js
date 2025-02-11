const { expect } = require("chai");
const AjaxPage = require("./../pages/ajax.page");

describe("Test over ajax page", function () {
  it("Ajax message displayed once", async function () {
    await AjaxPage.open();
    await AjaxPage.clickButtonManyTimes(3);
    expect(await (await AjaxPage.successLabel).length).to.be.equal(
      1,
      "Number of labels is different to expected"
    );
  });
});
