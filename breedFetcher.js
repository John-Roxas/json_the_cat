const request = require('request');
const args = process.argv.slice(2);

request('https://api.thecatapi.com/v1/breeds/search?q=' + args, function(error, response, body) {
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
});