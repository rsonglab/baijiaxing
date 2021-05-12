const list = require("./bjx.json");

/**
 * Returns a random number
 * @returns {Number} random number
 */
function random(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

/**
 * Returns a random Surnames
 * @returns {String} Surnames
 */
module.exports = function () {
  return list[random(0, list.length - 1)];
};

/**
 * A JSON array with all the Surnames
 */
module.exports.list = list;
