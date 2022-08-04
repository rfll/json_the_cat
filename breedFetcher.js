const request = require('request');

// // Get breed from command line arg
// const breedArg = process.argv[2];




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

  // String log if the command line breed doesn't exist
  if (!breed) {
    console.log(`${breedName} not found.`);
  // If breed is found, log the description
  } else {
    console.log(data[0].description);
  }
  // console.log(typeof data);
});
};


module.exports = { fetchBreedDescription };
