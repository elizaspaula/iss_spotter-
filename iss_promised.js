const request = require("request-promise-native");

const fetchMyIP = function () {
  return request("https://api.ipify.org?format=json")
    .then(JSON.parse)
    .then((body) => body.ip);
};

const fetchCoordsByIP = function (ip) {
  return request(`https://freegeoip.app/json/${ip}`)
    .then(JSON.parse)
    .then((body) => ({ latitude: body.latitude, longitude: body.longitude }));
};

const fetchISSFlyOverTimes = function ({ latitude, longitude }) {
  const url = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;
  return request(url)
    .then(JSON.parse)
    .then((body) => body.response);
};

const nextISSTimesForMyLocation = function () {
  return fetchMyIP().then(fetchCoordsByIP).then(fetchISSFlyOverTimes);
};

module.exports = { nextISSTimesForMyLocation };
// module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
