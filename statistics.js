// Import readline module for user input
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Array to store integers
let numbers = [];

// Function to ask for numbers repeatedly
function askNumber() {

    rl.question("Enter an integer (or q to quit): ", function(input) {

        // Quit condition
        if (input.toLowerCase() === "q") {

            // Check if any numbers were entered
            if (numbers.length === 0) {
                console.log("No numbers entered.");
                rl.close();
                return;
            }

            // Count
            let count = numbers.length;

            // Mean
            let sum = numbers.reduce((a, b) => a + b, 0);
            let mean = sum / count;

            // Median
            let sorted = [...numbers].sort((a, b) => a - b);
            let median;

            if (count % 2 === 0) {
                median =
                    (sorted[count / 2 - 1] + sorted[count / 2]) / 2;
            } else {
                median = sorted[Math.floor(count / 2)];
            }

            // Min and Max
            let min = Math.min(...numbers);
            let max = Math.max(...numbers);

            // Display results
            console.log("\nResults");
            console.log("-------");
            console.log("Count:", count);
            console.log("Mean:", mean);
            console.log("Median:", median);
            console.log("Minimum:", min);
            console.log("Maximum:", max);

            rl.close();
            return;
        }

        // Convert input to number
        let number = Number(input);

        // Error handling
        if (!Number.isInteger(number)) {
            console.log("Error: Please enter a valid integer.");
        } else {
            numbers.push(number);
        }

        askNumber();
    });
}

// Start program
askNumber();