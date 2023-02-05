// Exercise 1 : Menu --------------------------------------------------------------------------
// Instructions
// Using the array below:

// const menu = [
//   {
//     type: "starter",
//     name: "Houmous with Pita",
//   },
//   {
//     type: "starter",
//     name: "Vegetable Soup with Houmous peas",
//   },
//   {
//     type: "dessert",
//     name: "Chocolate Cake",
//   },
// ];
// // Using an array method and ternary operator, check if at least one element in the menu array is a dessert.
// let dessertFind = menu.some(e => e.type === "dessert");
// console.log(dessertFind);
// // Using an array method, check if all the elements in the array are starters.
// let checkStarters = menu.every(e => e.type === "starter");
// console.log(checkStarters);
// // Using an array method, check if there is at least one element in the array that is a main course. If not, add a main course of your choice to the array.
// // Using this array :
// let maincourseFind = menu.some(e => e.type === "maincourse") ? true : menu.push({ type: 'main', name: 'Grilled Chicken with Rice' })
// console.log(menu);

// const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"];
// // Using an array method, add a key “vegetarian” (a boolean) to the menu array. The value of the key should be true if the name of the course contains at least one element from the vegetarian array.
// menu.forEach(e => e.findVeg = vegetarian.some(veg => e.name.toLowerCase().includes(veg)));
// console.log(menu);

// Exercise 2 : Chop Into Chunks --------------------------------------------------------------------------
// Instructions
// Write a JavaScript function that takes 2 parameters: a string and a number.
// The function should chop the string into chunks of your chosen length (the second parameter), and the outcome should be represented in an array.
// Example:

// console.log(string_chop('developers',2));
// ["de", "ve", "lo", "pe", "rs"]

// function chopChop(str, num) {
//   num = ~~num;
//   return num > 0 ? str.match(new RegExp(".{1," + num + "}", "g")) : [str];
// }
// console.log(string_chop("developers", 2));
// function string_chop(str, chunkSize) {
//   let result = [];
//   for (let i = 0; i < str.length; i += chunkSize) {
//     result.push(str.substr(i, chunkSize));
//   }
//   return result;
// }

// Exercise 3 : You Said String ? --------------------------------------------------------------------------
// Instructions
// Write a JavaScript function to find a word within a string.
// "'fox' was found 1 times."
// console.log(search_word('The quick brown fox fox fox', 'fox'));

// function search_word(str, word) {
//   let count = 0;
//   let startIndex = 0;
//   while (startIndex != -1) {
//     startIndex = str.indexOf(word, startIndex);
//     if (startIndex != -1) {
//       count++;
//       startIndex += word.length;
//     }
//   }
//   return `'${word}' was found ${count} times.`;
// }

// Exercise 4 : Reverse Array --------------------------------------------------------------------------
// Instructions
// Write a function called reverseArray which accepts an array and returns the array with all values reversed. See if you can do this without creating a new array!
// Examples:
function reverseArray(arr) {
  console.log(arr.reverse());
}

reverseArray([1, 2, 3, 4, 5]); // [5,4,3,2,1]
reverseArray([1, 2]); // [2,1]
reverseArray([]); // []
reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [10,9,8,7,6,5,4,3,2,1]
