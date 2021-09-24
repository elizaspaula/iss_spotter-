const { fetchCoordsByIP } = require("./ISS-step2");

fetchCoordsByIP("162.245.144.188", (error, coordinates) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned Coords", coordinates);
});
