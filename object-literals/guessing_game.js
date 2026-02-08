const max = parseInt(prompt("Generate a maximum number:"));
const random = Math.floor(Math.random() * max + 1);

let guess = prompt("Guess the number (or type 'quit' or 'hint'):");

while (true) {
    if (guess === "quit") {
        console.log("Closing......");
        console.log("Closed");
        break;
    }

    if (guess === "hint") {
        const prevGuess = parseInt(prompt("Enter your last guess for hint:"));
        if (isNaN(prevGuess)) {
            console.log("Please enter a valid number to get a hint.");
        } else if (random > prevGuess) {
            console.log("Random number is greater than your guess.");
        } else if (random < prevGuess) {
            console.log("Random number is smaller than your guess.");
        } else {
            console.log("You already guessed the correct number!");
        }
        guess = prompt("Guess again:");
        continue;
    }

    if (parseInt(guess) === random) {
        console.log("Correct!");
        break;
    } else {
        guess = prompt("Wrong guess. Please try again (or type 'hint' or 'quit'):");
    }
}


