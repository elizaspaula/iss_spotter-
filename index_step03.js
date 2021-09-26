// index.js

const { fetchISSFlyOverTimes } = require("./iss_step03");

fetchISSFlyOverTimes(
  { latitude: "49.27670", longitude: "-123.13000" },
  (error, flyOverTime) => {
    if (error) {
      console.log("It didn't work!", error);
    }
    // success, print out the deets!
    console.log(flyOverTime);
  }
);
