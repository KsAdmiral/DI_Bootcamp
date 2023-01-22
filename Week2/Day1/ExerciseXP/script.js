// 🌟 Exercise 1: Your Favorite Food
// Instructions
// Store your favorite food into a variable.

// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

// Console.log I eat <favorite food> at every <favorite meal>
// For example

// If your favorite food is "chocolate",
// and your favorite meal of the day is "dinner",
// you will console.log
// I eat chocolate at every dinner

const favoriteFood = "Eggs";
const favoriteMeal = "Dinner";
console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`);

// 🌟 Exercise 2 : Series
// Instructions
// Part I
// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory

// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = `${myWatchedSeries[0]}, ${myWatchedSeries[1]} and ${myWatchedSeries[2]}}`;
console.log(myWatchedSeriesLength, myWatchedSeriesSentence);
console.log(
  `I watched ${myWatchedSeriesLength} series : ${myWatchedSeriesSentence}`
);

myWatchedSeries.splice(2, 1, "friends");
myWatchedSeries.push("breaking bad");
myWatchedSeries.unshift("vikings");
myWatchedSeries.splice(1, 1);
const moneyHeist = myWatchedSeries[1];
console.log(moneyHeist[2]);
console.log(myWatchedSeries);

// 🌟 Exercise 3 : The Temperature Converter
// Instructions
// Store a celsius temperature into a variable.

// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

const celsiusTemperature = 22;
const fahrenheitTemperature = (celsiusTemperature / 5) * 9 + 32;
console.log(`${celsiusTemperature}°C is ${fahrenheitTemperature}°F`);

// 🌟 Exercise 4 : Guess The Answers #1
// Using the code below:

let c;
let a = 34;
let b = 21;

console.log(a + b); //first expression
// Prediction: 55
// Actual: 55

a = 2;

console.log(a + b); //second expression
// Prediction: 23
// Actual: 23

// What will be the outcome of a + b in the first expression ?
// What will be the outcome of a + b in the second expression ?
// What is the value of c? UNDEFINED

// Analyse the code below, what will be the outcome?
console.log(3 + 4 + "5");
// Prediction: 5 is a string not a number so - 7 5

// 🌟 Exercise 5 : Guess The Answers #2
// What is the output of each of the expressions below?

typeof 15;
// Prediction: Number
// Actual: Number

typeof 5.5;
// Prediction: Number
// Actual: Number

typeof NaN;
// Prediction: Nan
// Actual: Number

typeof "hello";
// Prediction: String
// Actual: String

typeof true;
// Prediction: Boolean
// Actual: Boolean

typeof (1 != 2);
// Prediction: True
// Actual: True

"hamburger" + "s";
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s";
// Prediction: hamburger
// Actual: Nan

"1" + "3";
// Prediction: 13
// Actual:

"1" - "3";
// Prediction: NaN
// Actual: -2

"johnny" + 5;
// Prediction: jonny5
// Actual: jonny5

"johnny" - 5;
// Prediction: NaN
// Actual: NaN

99 * "hello";
// Prediction: NaN
// Actual: NaN

1 != 1;
// Prediction: False
// Actual: False

1 == "1";
// Prediction: True
// Actual: True

1 === "1";
// Prediction: False
// Actual: False

// 🌟 Exercise 6 : Guess The Answers #3
5 + "34";
// Prediction: 534
// Actual: 534

5 - "4";
// Prediction: 1
// Actual: 1

10 % 5;
// Prediction: 0
// Actual: 0

5 % 10;
// Prediction: 2
// Actual: 5

"Java" + "Script";
// Prediction: JavaScript
// Actual: JavaScript

" " + " ";
// Prediction:
// Actual:

" " + 0;
// Prediction:  0
// Actual:  0

true + true;
// Prediction: true
// Actual: 2

// TRUE = 1
// FALSE = 0

true + false;
// Prediction: 1
// Actual: 1

false + true;
// Prediction: 1
// Actual: 1

false - true;
// Prediction: -1
// Actual: -1

!true;
// Prediction: false
// Actual: false

3 - 4;
// Prediction: -1
// Actual: -1

"Bob" - "bill";
// Prediction: NaN
// Actual: NaN
