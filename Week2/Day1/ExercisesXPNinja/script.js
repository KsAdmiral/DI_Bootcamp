// 🌟 Exercise 1 : Evaluation
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// Evaluate the comparisons found below:

// Look at this link for help

5 >= 1;
// Prediction: True
// Actual: True
0 === 1;
// Prediction: False
// Actual: False
4 <= 1;
// Prediction: False
// Actual: False
1 != 1;
// Prediction: False
// Actual: False
"A" > "B";
// Prediction: False
// Actual: False
"B" < "C";
// Prediction: True
// Actual: True
"a" > "A";
// Prediction: True
// Actual: True
"b" < "A";
// Prediction: False
// Actual: False
true === false;
// Prediction: False
// Actual: False
true != true;
// Prediction: False
// Actual: False

// 🌟 Exercise 2 : Ask For Numbers
// Instructions
// Ask the user for a string of numbers separated by commas
// Console.log the sum of the numbers.
// Hint: use some string methods
// Examples
// "2,3"➞ 5

let num1 = prompt("Choose few numbers separated by coma");
let newnum = num1.split(",");
console.log(newnum);
const sumArray = newnum.reduce((a, b) => parseInt(a) + parseInt(b), 0);
console.log(sumArray);

// / 🌟 Exercise 3 : Find Nemo
// Instructions
// Hint: if statement (tomorrow’s lesson)

// Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
// Find the word “Nemo”
// Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
// If you can’t find Nemo, console.log “I can’t find Nemo”.
// Some examples:

//     "I love the movie named Nemo" ➞ "I found Nemo at 5"
//     "Nemo is a cute fish" ➞ "I found Nemo at 0"
//     "My fish is called Nemo, I love it" ➞ "I found Nemo at 4"

// let sentence = prompt("Enter a sentence containing the word “Nemo”");
// console.log(sentence);
// let index = sentence.indexOf("Nemo");
// if (index === -1) {
//   console.log("I can't find Nemo");
// } else {
//   console.log("I found Nemo at " + index);
// }

// 🌟 Exercise 4 : Boom
// Instructions
// Hint: if statement (tomorrow’s lesson)

// Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:

// If the number given is less than 2 : return “boom”
// If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
// If the number given is evenly divisible by 2, add a exclamation mark to the end.
// If the number given is evenly divisible by 5, return the string in ALL CAPS.
// If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
// Examples
// 4 ➞ "Boooom!"
// // There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)
// 1 ➞ "boom"
// // 1 is lower than 2, so we return "boom"

let num = prompt("Choose a number");
num = Number(num);
console.log(num);
let boom = "boom";
if (num > 2) {
  boom = "b" + "o".repeat(num) + "m";
}
if (num % 2 === 0) {
  boom += "!";
}
if (num % 5 === 0) {
  boom = boom.toUpperCase();
}
console.log(boom);
