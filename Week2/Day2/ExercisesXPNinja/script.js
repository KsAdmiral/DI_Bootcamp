// Exercise 1 : Age Difference
// Instruction
// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY

// let olderPerson = Number(prompt("Enter the birth year of the older person:"));
// let youngerPerson = Number(
//   prompt("Enter the birth year of the younger person:")
// );
// let ageDifference = olderPerson - youngerPerson;
// console.log(ageDifference);
// let halfAgeDifference = ageDifference / 2;
// console.log(halfAgeDifference);
// let halfAgeYear = youngerPerson + halfAgeDifference;
// console.log(halfAgeYear);
// console.log(
//   "The younger person will be half the age of the older person in the year " +
//     halfAgeYear
// );

// Exercise 2 : Zip Codes
// Instruction
// Harder exercise
// Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions

// While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
// Zip codes consists of 5 numbers
// Must only contain numbers
// Must not contain any whitespace (spaces)
// Must not be greater than 5 digits in length

// Ask the user for their zip code
// let zipCode = prompt("Enter your zip code:");
// let zipCodeRegex = /^\d{5}$/;

// if (zipCodeRegex.test(zipCode)) {
//   console.log("success");
// } else {
//   console.log("error: zip code should be 5 digits in length and should not contain any whitespace.");
// }

// Exercise 3 : Secret Word
// Instruction
// Harder exercise
// Hint : Use Regular Expressions

// Prompt the user for a word and save it to a variable.
// Delete all the vowels of the word and console.log the result.
// Bonus: Replace the vowels with another character and console.log the result
// a = 1
// e = 2
// i = 3
// o = 4
// u = 5

// // Ask the user for a word
// let word = prompt("Enter a word:");

// // Delete all the vowels of the word using regular expression
// let newWord = word.replace(/[aeiou]/gi, "");
// console.log("Word without vowels: " + newWord);

// // Bonus: Replace the vowels with numbers
// newWord = word.replace(/a/gi, "1").replace(/e/gi, "2").replace(/i/gi, "3").replace(/o/gi, "4").replace(/u/gi, "5");
// console.log("Word with replaced vowels: " + newWord);
