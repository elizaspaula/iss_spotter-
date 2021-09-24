//pass through the error to the callback if an error occurs when requesting the IP data
//parse and extract the IP address using JSON and then pass that through to the callback (as the second argument) if there is no error

const { fetchMyIP } = require("./iss");

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned IP:", ip);
});
