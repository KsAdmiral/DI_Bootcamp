// Exercise 1: Sum Elements ---------------------------------------------------------------------
// Instructions
// Write a JavaScript program to find the sum of all elements in an array.
// const array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
// const result = sumArray(array);
// console.log(result);

// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// //   Exercise 2 : Remove Duplicates ----------------------------------------------------------
// // Instructions
// // Write a JavaScript program to remove duplicate items in an array.

// uniq = [...new Set(array)]
// console.log(uniq);

// Exercise 3 : Remove Certain Values ----------------------------------------------------------
// Instructions
// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

// const array = [NaN, 0, 15, false, -22, '',undefined, 47, null]

// function removeUnique(arr) {
// 	let newArr = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		let count = 0;
// 		for (let j = 0; j < arr.length; j++) {
// 			if (arr[j] == arr[i]) {
// 				count++;
// 			}
// 		}
// 		if (count < 2 && !(count === 0)) {
// 			newArr.push(arr[i]);
// 		}
// 	}
//     return newArr;
// }
// console.log(removeUnique([NaN, 0, 15, false, -22, '',undefined, 47, null]));
// const array = [NaN, 0, 15, false, -22, "", undefined, 47, null];
// const result = removeValues(array);
// console.log(result); // Output: [15, -22, 47, 0]

// function removeValues(arr) {
//   return arr.filter(
//     value =>
//       value !== null &&
//       value !== "" &&
//       value !== false &&
//       value !== undefined &&
//       !Number.isNaN(value) &&
//       value !== 0
//   );
// }

// Exercise 4 : Repeat Please ! ----------------------------------------------------------
// Instructions
// Write a JavaScript function to concatenate a given string n times (default is 1).
// Create the repeat function yourself:
// console.log(repeat('Ha!',3));
// // "Ha!Ha!Ha!"
// function repeat(str, n = 1) {
//   let result = "";
//   for (let i = 0; i < n; i++) {
//     result += str;
//   }
//   return result;
// }
// console.log(repeat("Ha!", 5)); // Output: "Ha!Ha!Ha!"

// Exercise 5 : Turtle & Rabbit ----------------------------------------------------------
// For this exercise, look at the lesson More JS methods.

// Using this code :

const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';
// Line up the Turtle and the Rabbit at the start line.
// Expected Output:

//     When you write:

    // console.log(startLine);
    // console.log(turtle);
    // console.log(rabbit);

//     It should look like this:

//     '     ||<- Start line'
//     '       🐢'
//     '       🐇'

turtle = turtle.padStart(9, ' ');
rabbit = rabbit.padStart(9, ' ');

console.log(startLine);
console.log(turtle);
console.log(rabbit);

// What happens when you run turtle = turtle.trim().padEnd(9, '='); ?
turtle = turtle.trim().padEnd(9, '=');
console.log(turtle);