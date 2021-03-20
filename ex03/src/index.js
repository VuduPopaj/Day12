// // Only change code below this line
function rangeOfNumbers(startN, endN) {
  if (startN === endN) {
    return [startN];
  } else if (startN > endN) {
    return "The starting number will always be less than or equal to the ending number!";
  } else {
    const numbers = rangeOfNumbers(startN + 1, endN);
    numbers.unshift(startN);
    return numbers;
  }
}
// Only change code above this line

console.log(rangeOfNumbers()); // Change this line
module.exports = rangeOfNumbers;
