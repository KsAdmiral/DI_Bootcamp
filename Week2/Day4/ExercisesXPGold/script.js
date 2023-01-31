// Exercise 1 : Is_Blank -----------------------------------------------------------
// Instructions
// Write a program to check whether a string is blank or not.
function isBlank(str) {
  if (str === "") {
    return console.log(true);
  } else {
    console.log(false);
  }
}
isBlank(""); //--> true
isBlank("abc"); //--> false

// Exercise 2 : Abbrev_name -----------------------------------------------------------
// Instructions
// Write a JavaScript function to convert a string into an abbreviated form.
function abbrevName(name) {
  let abbreviatedName = "";
  let nameArray = name.split(" ");
  console.log(nameArray);
  let firstLetter = nameArray[1][0];
  abbreviatedName = nameArray[0] + " " + firstLetter + ".";
  return abbreviatedName;
}

console.log(abbrevName("Robin Singh")); // --> "Robin S."

// Exercise 3 : SwapCase -----------------------------------------------------------
// Instructions
// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example :

// if you input 'The Quick Brown Fox'
// the output should be 'tHE qUICK bROWN fOX'.
function swapCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      console.log(str[i]);
      result += str[i].toLowerCase();
    } else {
      console.log(str[i]);
      result += str[i].toUpperCase();
    }
  }
  return result;
}

console.log(swapCase("The Quick Brown Fox"));

// Exercise 4 : Omnipresent Value -----------------------------------------------------------
// Instructions
// Create a function that determines whether an argument is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.
// To illustrate:

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// // 3 exists in every element inside this array, so is omnipresent.
// Examples
function isOmnipresent(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (!arr[i].includes(val)) {
             return false;
    }
  }
  return true;
}

console.log(
  isOmnipresent(
    [
      [1, 1],
      [1, 3],
      [5, 1],
      [6, 1],
    ],
    1
  )
); // ➞ true
console.log(
  isOmnipresent(
    [
      [1, 1],
      [1, 3],
      [5, 1],
      [6, 1],
    ],
    6
  )
); // ➞ false
