/**
 * Makes a single API request to retrieve upcoming ISS fly over times the for the given lat/lng coordinates.
 * Input:
 *   - An object with keys `latitude` and `longitude`
 *   - A callback (to pass back an error or the array of resulting data)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly over times as an array of objects (null if error). Example:
 *     [ { risetime: 134564234, duration: 600 }, ... ]
 */

const request = require("request");

const fetchISSFlyOverTimes = function (coords, callback) {
  request(
    `https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`,
    (error, response, body) => {
      if (error) {
        callback(error, null);
      }

      if (response.statusCode !== 200) {
        callback(
          Error(
            `Status Code ${response.statusCode} when fetching Coordinates for : ${body}`
          ),
          null
        );
      }
      const result = JSON.parse(body);
      callback(null, result.response);
    }
  );
};

module.exports = { fetchISSFlyOverTimes };
