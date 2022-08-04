const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  // URL with command line arg in breed search
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  // Request function
  request(URL, (error, response, body) => {
  
    // Log error to console
    if (error) {
      callback(error, null);
      return;
    }

    // JSON data to object
    const data = JSON.parse(body);
    // Access object with breeds
    const breed = data[0];

    // If the command line breed doesn't exist
    if (!breed) {
      callback(`${breedName} not found.`, null);
    } else {
      // If breed is found, log the description
      callback(null, data[0].description);
    }
    // console.log(typeof data);
  });
};


module.exports = { fetchBreedDescription };
