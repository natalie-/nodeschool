// Load global modules
var fs = require('fs');

// Input
var filename = process.argv[2];

// Read the file
file = fs.readFileSync(filename);

// Buffer to string
fileContents = file.toString();

// Count new lines, subtract by one to correct for miscount.
console.log(fileContents.split('\n').length - 1);
