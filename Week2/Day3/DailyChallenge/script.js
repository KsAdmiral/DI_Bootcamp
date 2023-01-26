// // Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by youself, without looking at the answers on the internet.
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *

let stars = "";
for (let i = 0; i < 6; i++) {
  stars = stars + " * ";
  console.log(stars);
}

// for (let i = 0; i <= 6; i++) {
//   let stars = i + 1;
//   let lineStars = "";
//   for (let j = 0; j < stars; j++) {
//     lineStars = lineStars + " * ";
//   }
//   console.log(lineStars);
// }
