let id = setInterval(() => {
  console.log("trident industries");
}, 2000);

console.log("Welcome to");


setTimeout(() => {
  clearInterval(id);
  console.log("Stopped the interval.");
}, 10000);
