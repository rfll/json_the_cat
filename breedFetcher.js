const request = require('request');

// Get breed from command line arg
const breedArg = process.argv[2];

// URL with command line arg in breed search
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedArg}`;

// Request function
request(URL, (error, response, body) => {
  
  // Log error to console
  if (error) {
    console.log(`Error in request ${error}`);
    return error;
  }

  // JSON data to object
  const data = JSON.parse(body);
  // Access object with breeds
  const breed = data[0];

  // String log if the command line breed doesn't exist
  if (!breed) {
    console.log(`${breedArg} not found.`);
  // If breed is found, log the description
  } else {
    console.log(data[0].description);
  }
  // console.log(typeof data);
});