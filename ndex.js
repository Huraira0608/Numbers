// Function to find the greatest number among the given array
function findGreatestNumber(numbers) {
    let greatest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > greatest) {
            greatest = numbers[i];
        }
    }
    return greatest;
}

// Function to take 10 inputs from the user
function takeInputs() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        let input = prompt("Enter a number:");
        // Convert the input to a number and push it into the numbers array
        numbers.push(parseFloat(input));
    }
    return numbers;
}

// Main function
function main() {
    let numbers = takeInputs();
    let greatestNumber = findGreatestNumber(numbers);
    console.log("The greatest number is: " + greatestNumber);
}

// Call the main function
main();