// Exercise 1 : Checking The BMI
// Instructions
// Hint:
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// Create two objects, each object should hold a person’s details. Here are the details:
// FullName
// Mass
// Height

// Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person

// Outside of the objects, create a JS function that compares the BMI of both objects.

// // Display the name of the person who has the largest BMI.

// const person1 = {
//   FullName: "Niv Lugasi",
//   Mass: 75,
//   Height: 1.82,
//   BMI: function () {
//     return this.Mass / (this.Height * this.Height);
//   },
// };
// const person2 = {
//   FullName: "Leonardo DiCaprio",
//   Mass: 87,
//   Height: 1.83,
//   BMI: function () {
//     return this.Mass / (this.Height * this.Height);
//   },
// };

// function compareBMI() {
//   let person1BMI = person1.BMI();
//   let person2BMI = person2.BMI();
//   console.log(person1BMI, person2BMI);
//   if (person1BMI > person2BMI) {
//     return `${person1.FullName} has a higher BMI of ${person1BMI}`;
//   } else {
//     return `${person2.FullName} has a higher BMI of ${person2BMI}`;
//   }
// }

// console.log(compareBMI());

// Exercise 2 : Grade Average
// Instructions
// Hint:
// - This Exercise is trickier then the others. You have to think about its structure before you start coding.
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

// Create a function called findAvg(gradesList) that takes an argument called gradesList.

// Your function must calculate and console.log the average.

// If the average is above 65 let the user know they passed

// If the average is below 65 let the user know they failed and must repeat the course.
// Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
// Hint One function must call the other.
const grades = [100, 90, 80, 70, 60, 50, 40];

function findAvg() {
  let sum = 0;
  for (const grade of grades) {
    sum += grade;
  }
  let average = sum / grades.length;
  console.log(average, sum);
  return average;
}

function passOrFail() {
  average = findAvg();
  if (average > 65) {
    console.log(`You passed`);
  } else {
    console.log(`You failed`);
  }
}

passOrFail();
