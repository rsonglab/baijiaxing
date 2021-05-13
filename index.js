const bjx = require("./bjx.json");

/**
 * Returns a random number
 * @returns {Number} random number
 */
function random(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

/**
 * Parameter handler
 * @param {Object} val
 * @param {Object} type
 */
function parameterHandler(val, type) {
  if (val === undefined) {
    throw new Error("missing a parameter");
  }

  if (type === Number && typeof val !== "number") {
    throw new Error("need to be a number");
  }

  if (type === String && typeof val !== "string") {
    throw new Error("need to be a string");
  }
}

/**
 * Returns a random Surnames
 * @returns {String} Surnames
 */
module.exports.random = function () {
  return Object.keys(bjx)[random(0, Object.keys(bjx).length - 1)];
};

/**
 * Returns an id based on surname
 * @returns {Number} id [Required]
 */
module.exports.getID = function (name) {
  parameterHandler(name, String);

  const index = Object.keys(bjx).indexOf(name);
  if (index === -1) {
    throw new Error(`surname '${name}' does not exist`);
  }
  return index + 1;
};

/**
 * Returns a surname based on id
 * @returns {String} name [Required]
 */
module.exports.getName = function (val) {
  const REGEX = /(\p{Script=Hani})+/gu;
  var result = Object;

  if (REGEX.test(val)) {
    parameterHandler(val, Number);
  } else if (typeof val === "number") {
    result = Object.keys(bjx)[val - 1];
  } else if (typeof val === "string") {
    result = Object.keys(bjx).find((key) => bjx[key] === val);
  }
  if (!result) {
    throw new Error(`'${val}' does not exist`);
  }
  return result;
};

module.exports.getPinyin = function (name) {
  parameterHandler(name, String);

  const pinyin = bjx[name];
  if (!pinyin) {
    throw new Error(`surname '${name}' does not exist`);
  }
  return pinyin;
};

/**
 * A JSON array with all the Surnames
 */
module.exports.list = Object.keys(bjx);

/**
 * A JSON object with all the Surnames
 */
module.exports.object = bjx;
