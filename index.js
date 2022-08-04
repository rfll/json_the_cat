const { fetchBreedDescription } = require('./breedFetcher');

// Get breed from command line arg
const breedArg = process.argv[2];

fetchBreedDescription(breedArg, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

fetchBreedDescription;