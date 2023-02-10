// Exercise1 ----------------------------------------------------------------------------
// Part I
// What does the following code return/print?
// const facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// const { numPlanets, yearNeptuneDiscovered } = facts;

// console.log(numPlanets); // 8
// console.log(yearNeptuneDiscovered); // 1846

// Exercise2 ----------------------------------------------------------------------------
// What does the following code return/print?
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659,
// };

// let { numPlanets, ...discoveryYears } = planetFacts;

// console.log(discoveryYears); // { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// Exercise3 ----------------------------------------------------------------------------
// Modify the code below, and destructure the object in the parameter (ie. you should have 3 parameters : name, house and goodstudents)
// function getDetails({ name, house, goodstudent }) {
//   console.log(name, house, goodstudent);
// }

// getDetails({ name: "Harry Potter", house: "Gryfindor", goodstudent: false });

// Exercise4 ----------------------------------------------------------------------------
// Modify the code below, and destructure the object in the parameter (ie. you should have 4 parameters : name, house, friendName and age)
// function getMoreDetails({ name, house, friend: { friendName, age } }) {
//   console.log(name, house, friendName, age);
// }

// getMoreDetails({
//   name: "Hermione Granger",
//   house: "Gryfindor",
//   friend: {
//     friendName: "Harry Potter",
//     age: 20,
//   },
// });

// Exercise5 ----------------------------------------------------------------------------
// Modify the code below, and destructure the object in the parameter (ie. you should have 4 parameters : firstname, lastname, locationOne, locationTwo, valueHouses)
// const elonPerson = {
//   first: "Elon",
//   last: "Musk",
//   housesLocation: ["new york", "paris"],
//   twitter: "@elonmusk",
//   company: "Space X",
//   houses: {
//     amount: 2,
//     value: "5Million",
//   },
// };

// function getElonMuskDetails({
//   first: firstname,
//   last: lastname,
//   housesLocation: [locationOne, locationTwo],
//   houses: { value: valueHouses },
// }) {
//   console.log(firstname, lastname);
//   console.log(locationOne, locationTwo, valueHouses);
// }

// getElonMuskDetails(elonPerson);

// Exercise 6 ----------------------------------------------------------------------------
// Display in the body of the document, the name, email and phone of every employee. Use a loop and object destructuring
// const employees = [
//   { name: "Anne", email: "Anna@example.com", phone: "0000–000–0000" },
//   { name: "Tom", email: "Tom@gmail.com", phone: "0111–111–1111" },
// ];
// const container = document.getElementById("container");

// function displayEmploee() {
//   for (const emp of employees) {
//     const { name, email, phone } = emp;
//     const text = document.createTextNode(`${name} - ${email} - ${phone}`);
//     container.appendChild(text);
//   }
// }
// displayEmploee();

// Exercise 2 : USE OBJECT DESTRUCTURING ----------------------------------------------------------------------------
// const studentsFootball = [
//   { name: "Rich", score: 33 },
//   { name: "Peter", score: 55 },
// ];

// // const studentsNew = studentsFootball.map(elem => {
// //   const { score } = elem;
// //   const isAboveAverage = score > 50 ? true : false;
// //   // const isAboveAverage = score > 50
// //   const newObj = { ...elem, isAboveAverage };
// //   // its the same as above because key and variable have the same name
// //   // const newObj = {...elem, isAboveAverage : isAboveAverage}
// //   return newObj;
// // });

// // console.log(studentsNew);

// const studentsNew = studentsFootball.map(elem => ({
//   ...elem,
//   isAboveAverage: elem.score > 50,
// }));

// console.log(studentsFootball);
// console.log(studentsNew);

// Exercise 1 ----------------------------------------------------------------------------
// Part I
// Create a TV function constructor with 3 parameters : brand, channel and volume Channel should be 1 by default. Volume should be 50 by default.
// Create properties brandTV, channelTV and volumeTV equal to the 3 parameters value.
// Add methods to increase and decrease volume. When the methods are called it will increase or decrease the volume by 1.
// Create an object for the LG TV
// Call the inscrease method, and check if the volume changed
// Part II
// Create a subclass for Smart TV
// It overrides the method increase, so it increase the volume by 10 and not by 1
// Add a attribute of Netflix that should be equal to true by default
// Part III: Modify the TV class
// Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
// It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".

// class Television {
//   constructor(brand, channel = 1, volume = 50) {
//     this.brandTV = brand;
//     this.channelTV = channel;
//     this.volumeTV = volume;
//   }

//   increase() {
//     if (this.volumeTV < 100) this.volumeTV++;
//   }

//   decrease() {
//     if (this.volumeTV > 0) this.volumeTV--;
//   }
//   setChannel() {
//     if (channelTV > 0 && channelTV <= 50) this.channelTV = channel;
//   }
//   resetTV() {
//     this.channelTV = 1;
//     this.volumeTV = 50;
//   }
//   statusTV() {
//     console.log(`${this.brandTV} at channel ${this.channelTV}, volume ${this.volumeTV}`);
//   }
// }

// const LGTV = new Television("LG", 34, 20);
// LGTV.increase();
// console.log(LGTV.volumeTV);

// class SmartTV extends Television {
//   constructor(tvBrand, tvChannel, tvVolume, netflixValue = true) {
//     super(tvBrand, tvChannel, tvVolume);
//     this.Netflix = netflixValue;
//   }
//   increase() {
//     this.volumeTV += 10;
//   }
// }

// const smartLG = new SmartTV("LG", 34, 20);
// smartLG.increase();
// console.log(smartLG.volumeTV);
// smartLG.decrease();
// console.log(smartLG.volumeTV);
// LGTV.statusTV();

// Exercise ----------------------------------------------------------------------------
// Use the methods above to :

// Count how many keys and values are in the object below
// Display : "The x# key is : --- The x# value is : ---".
// let myObj = {
//   name: "John",
//   lastName: "Doe",
//   age: 25,
//   friends: ["Mark", "Lucie", "Ana"],
// };
// console.log(`The x# key is: ${Object.keys(myObj).length}, The x# value is :  ${Object.values(myObj).length}`);
// // console.log(Object.entries(myObj).length);

// Exercise ----------------------------------------------------------------------------
// Analyse this code before executing it. What will be the output ?

// const user = { name: "Lydia", age: 21 };
// const admin = { admin: true, ...user };
// console.log(admin);
// // {admin: true, name: 'Lydia', age: 21}

// Exercise ----------------------------------------------------------------------------
// Analyse the code below. Display the type of each rabbit and make them speak

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
killerRabbit.speak(`IAMKILLER`);
blackRabbit.speak(`IAMBLACK`);
