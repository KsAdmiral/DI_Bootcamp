// Exercise 1 : guess what will be console logged, and explain why -------------------------------
// let text = "Hello";

// function checkText() {
//   console.log("In the function", text); // Hello
//   text += " World";
//   console.log("Still in the function", text); // Hello World
// }

// console.log("before the function", text); // Hello

// checkText();

// console.log("after the function", text); // Hello World

// // Exercise 2 : guess what will be console logged, and explain why -----------------------------
// let friend = "Harry";

// function checkfriend (){
// 	let friend = "Alice";
// 	console.log("In the function",friend); // Alice
// 	friend += " Smith"; // Alice Smith
// 	console.log("Still in the function",friend); // Alice Smith
// }

// console.log("before the function", friend); // Harry

// checkfriend()

// console.log("after the function", friend); // Harry

// Exercise 1:  -------------------------------------------------------------------------------
// Greet the user with his name, the user's name is a parameter. Do this exercise,
// first by using function declarations
// then function expression,
// then arrow function
// const username = prompt("Whats your name?");

// function greet(name) {
//   console.log("Welcome", name);
// }
// const greet2 = function (name) {
//   console.log("Welcome", name);
// };
// const greet3 = name => console.log("Welcome", name);

// greet(username);
// greet2(username);
// greet3(username);

// Exercise 1  -------------------------------------------------------------------------------
const prices = [10, 23, 5];
// 1. Using a normal for loop, find the sum of the array
// 2. Using the for each method, find the sum of the array
let sum = 0;
// for (const price of prices) {
//   sum += price;
// }

prices.forEach((price) => (sum += price));
console.log(sum);

// Exercise 2  -------------------------------------------------------------------------------
const ageClient = [5, 8, 40, 18];
// Use the some method to check if there is at least one adult in the array (ie. age bigger or equal to 18)
// If there is, alert him that he is in charge of the others
// Use the every method to check if all the users are adults (ie. age bigger or equal to 18)
// If there not, alert them that they have a price reduction

ageClient.some((age) => {
  if (age >= 18) {
    console.log(`You are in charge`);
    console.log(age);
    return age;
  }
});

ageClient.every((age) => {
  if (!(age >= 18)) {
    console.log(`You have a price reduction`);
  }
});

const isBelowThreshold = (currentValue) => currentValue >= 18;
const array1 = [5, 8, 40, 18];
console.log(array1.some(isBelowThreshold));
