const bjx = require("../");
const { assert, expect, should } = require("chai");

describe("bjx.random() API", function () {
  it("bjx.random().length should be either 1 or 2", function () {
    expect(bjx.random().length).to.be.within(1, 2);
  });

  it("bjx.list should has member bjx.random()", function () {
    expect(bjx.list).to.include.members([bjx.random()]);
  });
});

describe("bjx.getName() API", function () {
  it("bjx.getName(118) should return '宋'", function () {
    assert.equal(bjx.getName(118), "宋");
  });

  it("bjx.getName(118) should be an string", function () {
    assert.typeOf(bjx.getName(118), "string");
  });

  it("bjx.getName() should throw an error", function () {
    try {
      bjx.getName();
    } catch (error) {
      assert.equal(error.message, "missing a parameter");
    }
  });

  it("bjx.getName('宋') should throw an error", function () {
    try {
      bjx.getName("宋");
    } catch (error) {
      assert.equal(error.message, "need to be a number");
    }
  });

  it("bjx.getName(800) should throw an error", function () {
    try {
      bjx.getName(800);
    } catch (error) {
      assert.equal(error.message, "'800' does not exist");
    }
  });

  it("bjx.getName('abc') should throw an error", function () {
    try {
      bjx.getName("abc");
    } catch (error) {
      assert.equal(error.message, "'abc' does not exist");
    }
  });
});

describe("bjx.getID() API", function () {
  it("bjx.getID('宋') should return 118", function () {
    assert.equal(bjx.getID("宋"), 118);
  });

  it("bjx.getID('宋') should be an number", function () {
    assert.typeOf(bjx.getID("宋"), "number");
  });

  it("bjx.getID() should throw an error", function () {
    try {
      bjx.getID();
    } catch (error) {
      assert.equal(error.message, "missing a parameter");
    }
  });

  it("bjx.getID(118) should throw an error", function () {
    try {
      bjx.getID(118);
    } catch (error) {
      assert.equal(error.message, "need to be a string");
    }
  });

  it("bjx.getID('肖') should throw an error", function () {
    try {
      bjx.getID("肖");
    } catch (error) {
      assert.equal(error.message, "surname '肖' does not exist");
    }
  });
});

describe("bjx.getPinyin() API", function () {
  it("bjx.getPinyin('宋') should return 'song'", function () {
    assert.equal(bjx.getPinyin("宋"), "Song");
  });

  it("bjx.getPinyin('人') should be an number", function () {
    try {
      bjx.getPinyin("人");
    } catch (error) {
      assert.equal(error.message, "surname '人' does not exist");
    }
  });
});

describe("bjx.list API", function () {
  it("bjx.list should be an array", function () {
    assert.typeOf(bjx.list, "array");
  });

  it("bjx.list.length should return 503", function () {
    assert.deepStrictEqual(bjx.list.length, 504);
  });

  it("the first surname should be 趙", function () {
    assert.deepStrictEqual(bjx.list[0], "趙");
  });

  it("the third surname should be 李", function () {
    assert.deepStrictEqual(bjx.list[3], "李");
  });
});

describe("bjx.object API", function () {
  it("bjx.object should be an object", function () {
    assert.typeOf(bjx.object, "object");
  });

  it("bjx.object['趙'] should return zhao", function () {
    assert.deepStrictEqual(bjx.object["趙"], "Zhao");
  });
});
