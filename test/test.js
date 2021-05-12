const bjx = require("../");
const { assert, expect } = require("chai");

describe("bjx() API", function () {
  it("bjx().length should be either 1 or 2", function () {
    expect(bjx().length).to.be.within(1, 2);
  });

  it("bjx.list should has member bjx()", function () {
    expect(bjx.list).to.include.members([bjx()]);
  });
});

describe("bjx.list API", function () {
  it("bjx.list should be an array", function () {
    assert.typeOf(bjx.list, "array");
  });

  it("bjx.list.length should return 503", function () {
    assert.deepStrictEqual(bjx.list.length, 503);
  });

  it("the first surname should be 赵", function () {
    assert.deepStrictEqual(bjx.list[0], "赵");
  });

  it("the third surname should be 李", function () {
    assert.deepStrictEqual(bjx.list[3], "李");
  });
});
