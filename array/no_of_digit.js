let num = prompt("Enter a number:");
num = Math.abs(parseInt(num));
let counter = 0;

if (num === 0) {
    counter = 1;
} else {
    while (num > 0) {
        counter++;
        num = Math.floor(num / 10);
    }
}

console.log("Entered number is", counter, "digit(s) long.");
