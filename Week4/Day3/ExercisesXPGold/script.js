// Exercise 1 : Analyzing The Map Method
// Instructions
// Analyze this code, what will be the output ?

// [1, 2, 3].map(num => {
//   if (typeof num === 'number') return num * 2;
//   return ;
// });
// // 2 , 4 , 6

// Exercise 2: Analyzing The Reduce Method
// Instructions
// Analyze this code, what will be the output ?

// [
//   [0, 1],
//   [2, 3],
// ].reduce(
//   (acc, cur) => {
//     return acc.concat(cur);
//   },
//   [1, 2]
// );
// [1, 2, 0, 1, 2, 3]

// Exercise 3 : Analyze This Code
// Instructions
// Using this code:

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//   console.log(num, i);
//   alert(num);
//   return num * 2;
// });
// // What is the value of i ?
// // 0,1,2,3,4,5
// console.log(newArray);

// Exercise 4 : Nested Arrays
// Instructions
// Using a method, take this array
const array = [[1], [2], [3], [[[4]]], [[[5]]]];
const flatArray = array.flat(2);
console.log(flatArray);
// and modify it to look like this array: [1,2,3,[4],[5]].
// Bonus Try to do it on one line.

// Using a method, take this array
const greeting = [
  ["Hello", "young", "grasshopper!"],
  ["you", "are"],
  ["learning", "fast!"],
];
// and modify it to look like this array:
// ["Hello young grasshopper!","you are","learning fast!"].
// Turn the greeting array into a string: ‘Hello young grasshopper you are learning fast!’.
const flattenGreeting = greeting.flatMap(subArray => subArray.join(" "));
console.log(flattenGreeting);
const flat2 = greeting.flat(1).join(" ");
console.log(flat2);

// Turn the trapped number 3
// const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
// // into: [3]
const flat3 = trapped.flat(Infinity);
console.log(flat3);
