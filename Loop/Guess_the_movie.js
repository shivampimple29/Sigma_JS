let movie = "dune";
guess = prompt("Guess the movie name");
while (guess != movie && guess != "quit") {
    console.log("Wrong guess ! Please try again.");
    guess = prompt("Guess the movie name");
}
if (guess == movie) {
  console.log("Perfect guess! Congrats!");
} else {
  console.log("You quit.\ncorrect answer is", movie);
}
