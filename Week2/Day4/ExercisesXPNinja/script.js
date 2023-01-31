// // Exercise 1: Random Number --------------------------------------------------------------------
// // Instructions
// // Get a random number between 1 and 100.
// // Console.log all even numbers from 0 to the random number.

// const randomNum = Math.floor(Math.random() * 101);
// for (let i = 0; i <= randomNum; i++) {
//   if (i % 2 === 0) console.log(i);
// }

// Exercise 2: Capitalized Letters --------------------------------------------------------------------
// Instructions
// Create a function that takes a string as an argument.
// Have the function return:
// The string but all letters in even indexes should be capitalized.
// The string but all letters in odd indexes should be capitalized.
// Note:

// Index 0 will be considered even.
// The argument of the function should be a lowercase string with no spaces.
// For example,

// capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']

// function capitalize(str) {
//   let even = "";
//   let odd = "";
//   for (let i = 0; i < str.length; i++) {
//     if (i % 2 === 0) {
//       even += str[i].toUpperCase();
//     } else {
//       even += str[i];
//     }
//     if (i % 2 !== 0) {
//       odd += str[i].toUpperCase();
//     } else {
//       odd += str[i];
//     }
//   }
//   return [even, odd];
// }

// console.log(capitalize("abcdef")); // ['AbCdEf', 'aBcDeF']

// Exercise 3 : Is Palindrome? --------------------------------------------------------------------
// Instructions
// Write a JavaScript function that checks whether a string is a palindrome or not.
// Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, e.g., madam, bob or kayak.

// function isPalindrome(str) {
//   let reversed = str.split("").reverse().join("");
//   return str === reversed;
// }

// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("bob")); // true
// console.log(isPalindrome("kayak")); // true
// console.log(isPalindrome("hello")); // false

// Exercise 4 : Biggest Number --------------------------------------------------------------------
// Instructions
// Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
// Note : This function should work with any array;
// // Example:
// const array = [-1, 0, 3, 100, 99, 2, 99]; // should return 100
// const array2 = ["a", 3, 4, 2]; // should return 4
// const array3 = []; // should return 0

// function biggestNumberInArray(arrayNumber) {
//   let biggest = 0;
//   for (const biggestNum of arrayNumber) {
//     if (biggest < biggestNum) biggest = biggestNum;
//   }
//   console.log(biggest);
// }

// biggestNumberInArray(array);
// biggestNumberInArray(array2);
// biggestNumberInArray(array3);

// Exercise 5: Unique Elements --------------------------------------------------------------------
// Instructions
// Write a JS function that takes an array and returns a new array with only unique elements.
// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]
// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]
const array = [1, 2, 3, 3, 3, 3, 4, 5];
const array2 = [1, 2, 3, 4, 4, 5, 6, 6];

function uniqueElements(array) {
  return Array.from(new Set(array));
}
console.log(uniqueElements(array));
console.log(uniqueElements(array2));

