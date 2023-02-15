// // Create two functions.Each function should return a promise.
// // The first function called makeAllCaps(), takes an array of words as an argument
// // If all the words in the array are strings, resolve the promise.The value of the resolved promise is the array of words uppercased.
// // else, reject the promise with a reason.
// function makeAllCaps(wordsArr) {
//   return new Promise((resolve, reject) => {
//     if (wordsArr.every(word => typeof word === "string")) {
//       resolve(wordsArr.map(word => word.toUpperCase()));
//     } else {
//       reject("Only strings");
//     }
//   });
// }
// // The second function called sortWords(), takes an array of words uppercased as an argument
// // If the array length is bigger than 4, resolve the promise.The value of the resolved promise is the array of words sorted in alphabetical order.
// // else, reject the promise with a reason.
// function sortWords(sortArr) {
//   return new Promise((resolve, reject) => {
//     if (sortArr.length > 4) {
//       resolve(sortArr.sort());
//     } else {
//       reject("Array too short");
//     }
//   });
// }
// //in this example, the catch method is executed
// makeAllCaps([1, "pear", "banana"])
//   .then(arr => sortWords(arr))
//   .then(result => console.log(result))
//   .catch(error => console.eroor(error));
// //in this example, the catch method is executed
// makeAllCaps(["apple", "pear", "banana"])
//   .then(arr => sortWords(arr))
//   .then(result => console.log(result))
//   .catch(error => console.error(error));
// //in this example, you should see in the console,
// // the array of words uppercased and sorted
// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//   .then(arr => sortWords(arr))
//   .then(result => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//   .catch(error => console.error(error));

// 2nd Daily Challenge ---------------------------------------------------------------

// Create three functions. The two first functions should return a promise..
// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

function toJs() {
  return new Promise((resolve, reject) => {
    let morseObj = JSON.parse(morse);
    if (morse.length === 0) {
      reject("Empty string");
    } else {
      resolve(morseObj);
    }
  });
}

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value["....", ".", ".-..", ".-..", "---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    let userWord = prompt("Enter a word or a sentence").toLowerCase();
    userWord = userWord.replace(/\s/g, ""); // to remove spaces in case string is a sentence and not just a word
    let arr = userWord.split("");
    let availableChars = Object.keys(morseJS);
    if (arr.every(char => availableChars.includes(char))) {
      let morseTranslatedArr = arr.map(char => morseJS[char]);
      resolve(morseTranslatedArr);
    } else {
      reject(
        "ERROR, the promise rejects because the character doesn't exist in the morse javascript object"
      );
    }
  });
}

// The third function called joinWords(morseTranslation), takes one argument: the morse translation array
// this function joins the morse translation by using line break and display it on the page(ie.On the DOM)

function joinWords(morseTranslation) {
  const container = document.getElementById("container");
  const div = document.createElement("div");
  const p = document.createElement("p");
  const text = document.createTextNode(morseTranslation.join(" "));
  p.appendChild(text);
  div.appendChild(p);
  container.appendChild(div);
}
toJs()
  .then(morseObj => toMorse(morseObj))
  .then(resOne => joinWords(resOne))
  .catch(err => console.error(err));

// Chain the three functions.
// Example:
// "Hello" gives you
// ....
// .
// .-..
// .-..
// ---
