const request = require('request');
const url = "https://api.thecatapi.com/v1/breeds/search?q=";


const fetchBreedDescription = function(breedName, callback) {
  request(url + breedName, (error, response, body) => {
  
    if (error) {
      callback(error, null);
      return;
    }

    const [data] = JSON.parse(body);
    const breed = data;
    if (breed) {
      callback(null, data.description);
    } else {
      callback("No description for breed", null);
    }
  });
};

module.exports = {fetchBreedDescription};

