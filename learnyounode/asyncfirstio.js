// Load global modules
var fs = require('fs');

// Define function
fs.readFile(process.argv[2], 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data.split('\n').length - 1); // Count the lines
})