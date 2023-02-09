// // Exercise 1 ----------------------------------------------------------------------------------
// const famousPeople = [
//   {
//     name: "Angelina Jolie",
//     job: "actor",
//     age: 80,
//   },
//   {
//     name: "Georges Clooney",
//     job: "actor",
//     age: 2,
//   },
//   {
//     name: "Paris Hilton",
//     job: "actor",
//     age: 5,
//   },
//   {
//     name: "Kayne West",
//     job: "singer",
//     age: 16,
//   },
//   {
//     name: "Britney Spears",
//     job: "singer",
//     age: 100,
//   },
// ];
// // Using the array above, use the map method, to create a new array that contains only the name of the people
// // Use the map method, to create a new array, that contains objects, each object contains the name of the actor, and it's job
// // BONUS: Using the array you get from question2, use the for each method, to add the names and the job of the actors on the DOM (in a paragraph, appended to a div with an id "container")

// const names = famousPeople.map(elem => elem.name);
// console.log(names);
// let object = famousPeople.map(elem => ({
//   name: elem.name,
//   job: elem.job,
// }));
// console.log(object);

// const container = document.getElementById("container");
// const p = document.createElement("p");
// p.createTextContent();
// container.appendChild(p);
// object.forEach(elem => {});

// var my_array = [1,3,5,2,4];

// my_array.map(function(item,index,arr) {
//   console.log("item: " + item + " at index: " + index + " in the array: " + arr);
// });

// Exercise ----------------------------------------------------------------------------------
// Anayse this code before executing it. What will be the output ?

// myArr = [10, 20, 30, 40];

// let newArr = myArr.map((val, i, arr) => {
//   return {
//     value: val,
//     index: i,
//   };
// });
// console.log(newArr);
// newArr = [{
//     value: 10,
//     index: 0,
//   },
//   {
//     value: 20,
//     index: 1,
//   }]

// Exercise ----------------------------------------------------------------------------------
// Use the reduce() method to sum up all the calories of every desert, except Apple Pie.

// The output should be 85

// let party = [
//   {
//     desert: "Chocolate Mousse",
//     calories: 30,
//   },
//   {
//     desert: "Apple Pie",
//     calories: 15,
//   },
//   {
//     desert: "Croissant",
//     calories: 50,
//   },
//   {
//     desert: "Strawberry Icecream",
//     calories: 5,
//   },
// ];
// const calories = party.reduce(
//   (acc, calorie) =>
//     calorie["desert"] === "Apple Pie" ? acc : acc + calorie["calories"],
//   0
// );
// console.log(calories);

// Exercise ----------------------------------------------------------------------------------
// Anayse this code before executing it. What will be the output ?

// let prices = [12, 20, 18];
// let newPriceArray = [...prices];
// console.log(newPriceArray);
// // newPriceArray[12, 20, 18]

// let alphabets = ["A", ..."BCD", "E"];
// console.log(alphabets);
// // alphabets = ["A", "B", "C", "D", "E"]

// let newArray = [2, 3, 4, 5, 6];

// newArray.forEach(function(number, i) {
//     newArray[i] = newArray[i]*2;
// });
// console.log(newArray);

// let newArray = [2, 3, 4, 5, 6];

// newArray.forEach(function(number, i) {
//     newArray[i] = number * 2;
// });
// console.log(newArray);
