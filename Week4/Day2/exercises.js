// Exercise 1 : guess what will be console.logged ---------------------------------------------
// function setObj(person) {
//   person.age = 25;
//   return person;
// }

// let personObj1 = {
//   name: "Alex",
//   age: 30,
// };

// let personObj2 = setObj(personObj1);

// console.log(personObj1); // -> {name: 'Alex',age: 25};
// console.log(personObj2); // -> {name: 'Alex',age: 25};

// Exercise 2 guess what will be console.logged ---------------------------------------------
// function setObj(person) {
//   person = {
//     name: "John",
//     age: 50,
//   };
//   return person;
// }

// let personObj1 = {
//   name: "Alex",
//   age: 30,
// };

// let personObj2 = setObj(personObj1);

// console.log(personObj1); // -> {name: 'Alex',age: 30};
// console.log(personObj2); // -> {name: 'John',age: 50};

// IIFE FUNCTIONS
// Add in your html file a div with an id of container
// Create a self invoking function that takes one parameter the name of the user
// When invoked, the function adds the name of the user in a sentence in the div
// New

// (function (username) {
//   const container = document.getElementById("container");
//   const text = document.createTextNode(`Hello ${username}`);
//   container.appendChild(text);
// })(prompt("Your name"));

// NESTED FUNCTIONS
// Create a function named starWars that takes no parameter.
// The function should declare a variable characters equal to an empty array
// In the startWars function, create a function named createCharacter. It receives two parameters, the first name and last name of a character. If the character doesn't have a last name, the default should be "Smith" and push it to the characters array.
// In the startWars function, create a function named displayCharacter should display in the body the fullname of the characters,
// Call the createCharacter function a few times inside the starWars function and call the displayCharacter function once
// white_check_mark
// eyes
// raised_hands

// function startWars() {
//   const characters = [];

//   function createCharacter(fname, lname = "Smith") {
//     const fullname = `${fname} ${lname}`;
//     characters.push(fullname);
//   }

//   function displayCharacter() {
//     const container = document.getElementById("container");
//     characters.forEach(person => {
//       const para = document.createElement("p");
//       const text = document.createTextNode(person);
//       para.appendChild(text);
//       container.appendChild(para);
//     });
//   }
//   createCharacter("Chubaka");
//   createCharacter("Han", "Solo");
//   displayCharacter();
// }
// startWars();

// function starWars() {
//   const characters = [];
//   function createCharacter(fname, lname = "Smith") {
//     //statement
//     characters.push(fname + lname);
//     const container = document.getElementById("container");
//     const text = document.createTextNode(characters);
//     container.appendChild(text);
//   }
//   createCharacter("John", " Man");
//   createCharacter("John", " 23213an");
// }
// starWars();

// Exercise ------------------------------------------------------------------------------------------
// Analyse this code before executing it. Write explanatory comments. What will be the output ?

// function add() {
//   let counter = 0;
//   function plus() {
//       counter += 1;
//       console.log(counter) ; //1
//   }
//   plus();
// }

// add()

// Exercise ------------------------------------------------------------------------------------------
// Analyse this code before executing it. Write explanatory comments. What will be the output ?

// let add = (function () {
//   let counter = 0;
//   function calculus() {
//     counter += 1;
//     return counter;
//   }
//   return calculus;
// })();

// console.log(add()); //1
// console.log(add()); //2
// console.log(add()); //3

// Exercise ------------------------------------------------------------------------------------------
// Analyse this code before executing it. Write explanatory comments

// const g = n => n + 1;
// const f = n => n * 2;
// //            42:21:20
// const h = x => f(g(x));

// console.log(h(20)); //=> 42

// Exercise ------------------------------------------------------------------------------------------
// Analyse the code before executing it. What will be the output

// const person = {
//   name: 'Lydia',
//   age: 21,
// };

// for (const item in person) {
//   console.log(item);
// }
// name, age

// Exercise ------------------------------------------------------------------------------------------
// Analyse the code before executing it. What will be the output

// let c = { greeting: 'Hey!' };
// let d;

// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting); // hello
