// Instructions
// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// Some Help

// What is an anagram?
// An anagram is another word or phrase formed by rearranging letters of the first word or phrase.

// Example of anagrams

// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"

// Do we need to consider whitespace?
// Trim whitespace prior to comparison.

// function anagram(a, b) {
//   const aSpread = a;
//   const bSpread = [...b].sort();
//   //   aSpread.flat(1).join(" ");
//   bSpread.flat(1).join(" ");
//   console.log(aSpread);
//   console.log(bSpread);
//   console.log(aSpread.includes(bSpread));
// }
// anagram("Astronomer", "Moon starer");

function isAnagram(string1, string2) {
  string1 = string1.toLowerCase().replace(/\s/g, "");
  string2 = string2.toLowerCase().replace(/\s/g, "");

  if (string1.length !== string2.length) return false;

  let string1Chars = {};
  let string2Chars = {};

  for (let char of string1) string1Chars[char] = (string1Chars[char] || 0) + 1;

  for (let char of string2) string2Chars[char] = (string2Chars[char] || 0) + 1;

  for (let char in string1Chars) {
    if (string1Chars[char] !== string2Chars[char]) return false;
  }
  return true;
}

console.log(isAnagram("Astronomer", "Moon starer"));
console.log(isAnagram("School master", "The classroom"));
console.log(isAnagram("The Morse Code", "Here come dots"));
console.log(isAnagram("The Morse Code", "Here come dots321321"));
