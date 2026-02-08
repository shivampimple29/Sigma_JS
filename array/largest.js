let arr = [];
let n = parseInt(prompt("How many elements do you want to enter?"));

for (let i = 0; i < n; i++) {
  arr[i] = prompt(`Enter element ${i + 1}:`);
}
largest = arr[0];
for (let i = 0; i < n; i++) {
  if (largest < arr[i]) {
    largest = arr[i];
  }
}
console.log(`largest element is ${largest}`);
