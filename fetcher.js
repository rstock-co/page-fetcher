const request = require('request');
const fs = require('fs');

let URL, filePath;

// for easier console logging
const log = (variable) => {
  const key = Object.keys(variable)[0];
  const value = variable[key];
  console.log(`${key}: ${value}`);
};

[URL, filePath] = process.argv.slice(2);

// log({filePath})

request(URL, (error, response, body) => {
  console.log('-------------------')
  log({URL})
  // log({error})
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  if (error) {
    log({error});
    return;
  }
  fs.writeFile(filePath, body, error => {
    let fileSize = body.length;
    console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}.`)
    console.log('-------------------')
  });
});

