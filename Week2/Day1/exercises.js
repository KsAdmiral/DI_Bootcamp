// EXERCISE 1 --------------------------------------
// Create a structured HTML file linked to a JS file

// 1. Create these variables and give them values:

// addressNumber
// addressStreet
// country
// 2. Write a variable named globalAddress, and concatenate inside, the variables:

// addressNumber
// addressStreet
// country
// In order to create a sentence
// 3. Display globalAddress Example: globalAddress should display « I live in BenYehuda 5, in Israel »

const addressNumber = 3;
const addressStreet = "Hanesher";
const country = "Israel";

const globalAddress = `I live in ${addressStreet} ${addressNumber}, in ${country} `;
console.log(globalAddress);

// EXERCISE 2 --------------------------------------
// 1. Store your birth year in a variable.

// 2. Store a future year in a variable.

// 3. Calculate your possible ages for that year based on the stored values.

// 4. Display : "I will be NN in YYYY", substituting the values.

const myBirthYear = 1994;
const futureYear = 2030;

const futureAge = `I will be ${futureYear - myBirthYear} in ${futureYear}`;
console.log(futureAge);

// EXERCISE 3 --------------------------------------
// 1. Create a numerically indexed table (ie. an array): pets, like this ['cat','dog','fish','rabbit','cow']

// 2. Display dog

// 3. Add to the array pets, the pet horse. Remove the pet rabbit

// 4. Display the array length

let pets = ["cat", "dog", "fish", "rabbit", "cow"];
console.log(pets[1]);
pets.splice(3, 1, "horse");
console.log(pets, pets.length);

