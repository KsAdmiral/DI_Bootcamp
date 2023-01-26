// Instructions
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

// stars and words

// Hint
// The number of stars that wraps the sentence, must depend on the length of the longest word.

// Requirements
// To do this challenge you only need Javascript(No HTML and no CSS)

let sentence = prompt(
  `Please, enter several words (separated by commas and space)`
);
sentence = sentence.split(" ");
console.log(sentence);
let longest = 0;
// let arr = ["Hello", "myfriend", "by"]
for (let word of sentence) {
  if (word.length > longest) {
    longest = word.length;
  }
}
let div;
for (let i = -1; i <= sentence.length; i++) {
  if (i < 0 || i === sentence.length) {
    div = "";
    div = div.padEnd(longest + 4, "*");
    console.log(div);
  } else {
    div = "";
    div =
      "* " + sentence[i] + div.padEnd(longest - sentence[i].length, " ") + " *";
    console.log(div);
  }
}
// -----------------------------------------------------------------------------------------------------------------------------------
let userAnswer = prompt("Please give us several words");
const myArray = userAnswer.split(" ");

function findlongest() {
  let longest = 0;
  for (let word of myArray) {
    if (word.length > longest) {
      longest = word.length;
    }
  }
  return longest;
}

function addstarsTopBottom() {
  const longestnum = findlongest();
  console.log("*".repeat(longestnum + 5));
}

function addwords() {
  const longestword = findlongest();
  for (let i = 0; i < myArray.length; i++) {
    console.log(
      `* ${myArray[i]} ${" ".repeat(longestword - myArray[i].length)} *`
    );
  }
}

addstarsTopBottom();
addwords();
addstarsTopBottom();
