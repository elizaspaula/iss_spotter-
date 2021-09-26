// iss.js

/**
 * Orchestrates multiple API requests in order to determine the next 5 upcoming ISS fly overs for the user's current location.
 * Input:
 *   - A callback with an error or results.
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly-over times as an array (null if error):
 *     [ { risetime: <number>, duration: <number> }, ... ]
 */

const { fetchMyIP } = require("./iss");
const { fetchCoordsByIP } = require("./ISS-step2");
const { fetchISSFlyOverTimes } = require("./iss_step03");

const nextISSTimesForMyLocation = function (callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      callback(error, null);
      return;
    }

    fetchCoordsByIP(ip, (error, coordinates) => {
      if (error) {
        callback(error, null);
        return;
      }
      fetchISSFlyOverTimes(coordinates, (error, flyOverTime) => {
        if (error) {
          callback(error, null);
          return;
        }
        callback(null, flyOverTime);
      });
    });
  });
};

module.exports = { nextISSTimesForMyLocation };
