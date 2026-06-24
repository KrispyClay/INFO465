const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];

function askNumber() {

    rl.question("Enter an integer (or q to quit): ", function(input) {

        if (input.toLowerCase() === "q") {

            if (numbers.length === 0) {
                console.log("No numbers entered.");
                rl.close();
                return;
            }

            let count = numbers.length;
            let sum = numbers.reduce((a, b) => a + b, 0);
            let mean = sum / count;

            let sorted = [...numbers].sort((a, b) => a - b);
            let median;

            if (count % 2 === 0) {
                median = (sorted[count / 2 - 1] + sorted[count / 2]) / 2;
            } else {
                median = sorted[Math.floor(count / 2)];
            }

            let min = Math.min(...numbers);
            let max = Math.max(...numbers);

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

        let number = Number(input);

        if (!Number.isInteger(number)) {
            console.log("Error: Please enter a valid integer.");
        } else {
            numbers.push(number);
        }

        askNumber();
    });
}

askNumber();