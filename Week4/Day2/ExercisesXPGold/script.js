// Exercise 1 : Nested Functions
// Using the code below, and before executing it, predict the outcome and explain how you came to this conclusion.

// Change the code below to nested arrow functions.
// let landscape = function () {
//   let result = "";
//   let flat = function (x) {
//     for (let count = 0; count < x; count++) {
//       result = result + "_"; // ____ ____
//     }
//   };
//   let mountain = function (x) {
//     result = result + "/"; // ____/
//     for (let counter = 0; counter < x; counter++) {
//       result = result + "'"; // ____/''''
//     }
//     result = result + "\\"; // ____/''''\____
//   };
//   flat(4);
//   mountain(4);
//   flat(4);
//   return result;
// };
// console.log(landscape());

// let landscape = () => {
//   let result = "";

//   let flat = x => {
//     for (let count = 0; count < x; count++) {
//       result = result + "_";
//     }
//   };

//   let mountain = x => {
//     result = result + "/";
//     for (let counter = 0; counter < x; counter++) {
//       result = result + "'";
//     }
//     result = result + "\\";
//   };

//   flat(4);
//   mountain(4);
//   flat(4);

//   return result;
// };

// landscape();

// Exercise 2 : Closure ----------------------------------------------------------------
// Instructions
// Analyse the code below, and before executing it, predict the outcome of the last line.
// const addTo = x => y => x + y;
//               3   10    3  10
// console.log(addTo);
// const addToTen = addTo(10);
// console.log(addToTen);
// console.log(addToTen(3));
// The function addTo takes an argument x and returns a new function that takes an argument y. This new function returns the sum of x and y.

// When addTo(10) is called, it returns the inner function that takes y as its argument and adds it to 10. This returned inner function is stored in addToTen.

// Finally, when addToTen(3) is called, it returns the result of 10 + 3, which is 13.

// Exercise 3 : Currying ----------------------------------------------------------------
// Instructions
// Analyse the code below, and before executing it, predict the outcome of the last line.

// const curriedSum = (a) => (b) => a + b
// //                 30      1     30  1
// console.log(curriedSum(30)(1))
// The code defines a function called curriedSum that takes one argument a. It returns another function that takes one argument b and returns the sum of a and b.

// When curriedSum(30)(1) is called, a is set to 30 and a function is returned that takes b as an argument. This returned function is then immediately called with b equal to 1, so a + b is calculated and returns 31.

// Exercise 4 : Currying ----------------------------------------------------------------
// Analyse the code below, and before executing it, predict the outcome of the last line.
// const curriedSum = (a) => (b) => a + b
// //                 5      12     5   12
// const add5 = curriedSum(5)
// console.log(add5(12))

// Exercise 5 : Composing ----------------------------------------------------------------
// Analyse the code below, and before executing it, predict the outcome of the last line.
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
console.log(compose(add1, add5)(10))

