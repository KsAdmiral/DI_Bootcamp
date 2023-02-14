// 🌟 Exercise 1 : Comparison ---------------------------------------------------------
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10.
// Test:

//In the example, the promise should reject
// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

// //In the example, the promise should resolve
// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

// function compareToTen(num) {
//   return new Promise((resolve, reject) => {
//     if (num < 10) {
//       resolve(`The promised task was performed successfully.`);
//     } else {
//       reject(`'The promised task was not performed.`);
//     }
//   });
// }

// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.error(error));
// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.error(error));

// 🌟 Exercise 2 : Promises ---------------------------------------------------------
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(`Success`), 4000);
// });

// promise
//   .then(res => console.log(res))
//   .catch(err => console.error(`Ooops something went wrong`, err));

// 🌟 Exercise 3 : Resolve & Reject ---------------------------------------------------------
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

const resolve = Promise.resolve(3);
const reject = Promise.reject(`Boo!`);

resolve.then(res => console.log(res)).catch(err => console.error(err));
reject.then(res => console.log(res)).catch(err => console.error(err));
