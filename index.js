const list = require("./bjx.json");
const { RandomInteger } = require("@rsonglab/random-generator");

/**
 * Returns a random Surnames
 * @returns {String} Surnames
 */
module.exports = function () {
  return list[RandomInteger(0, list.length - 1)];
};

/**
 * A JSON array with all the Surnames
 */
module.exports.list = list;
