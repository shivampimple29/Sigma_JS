function oddEvenTest(request) {
  if (request === "even") {
    return function (n) {
      console.log(n % 2 === 0);
    };
  } else if (request === "odd") {
    return function (n) {
      console.log(n % 2 !== 0);
    };
  } else {
    console.log("Invalid request");
  }
}

let num = parseInt(prompt("Enter a number."));
let req = prompt("Enter your request (odd/even):");

let tester = oddEvenTest(req);
if (typeof tester === "function") {
  tester(num); 
}
