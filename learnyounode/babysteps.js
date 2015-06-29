// Initialize variables
var answer = 0;

// Process inputs
for (i = 2; i < process.argv.length; i++) {
    answer += Number(process.argv[i]);
}

// Print the answer
console.log(answer);
