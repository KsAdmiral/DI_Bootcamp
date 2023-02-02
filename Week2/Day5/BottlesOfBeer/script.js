// Instructions
// Have you heard the infamous song “99 Bottles of Beer?”
// In this exercise you need to console.log the lyrics of our own 99 Bottles of Beer song.

// ==============================
// Example
// ==============================

// 99 bottles of beer on the wall
// 99 bottles of beer
// Take 1 down, pass it around
// 98 bottles of beer on the wall

// 98 bottles of beer on the wall
// 98 bottles of beer
// Take 2 down, pass them around
// 96 bottles of beer on the wall

// 96 bottles of beer on the wall
// 96 bottles of beer
// Take 3 down, pass them around
// 93 bottles of beer on the wall

// ect …

// ==============================

// Prompt the user for a number to begin counting down bottles.

// In the song, everytime a bottle drops,
// the subtracted number should go up by 1.
// For example,

//     We start the song at 99 bottles
//     -> Take _1_ down, pass it around
//     -> we have now 98 bottles

//     -> then, Take _2_ down, pass them around
//     -> we have now 96 bottles

//     -> then, Take _3_ down, pass them around
//     -> we have now 93 bottles

//     ... ect

// 3. The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”.

// 4. Note : Make sure you get the grammar correct.

// For 1 bottle, you pass “it” around.
// For more than one bottle, you pass “them” around.

let numberOfBeers = getUserInput();
let numberOfBeersToTakeAway = 1;

function getUserInput() {
  const answer = prompt("How many bottles?");
  if (answer == "") return alert("Please enter something");
  const number = Number(answer);
  if (Number.isNaN(number)) return alert("Please enter a number");
  return number;
}

while (numberOfBeers > 0) {
  const stanza = makeStanza(numberOfBeers, numberOfBeersToTakeAway);
  console.log(stanza);
  numberOfBeers -= numberOfBeersToTakeAway;
  numberOfBeersToTakeAway++;
}

function makeStanza(num, counter) {
  const bottleOrBottles = getBottleOrBottles(num);
  const bottlesToTakeAway = getSmallerNumber(counter, num);
  const remainingBottles = GetBiggerNumber(num - counter, 0);
  const remainingBottlesOrBottles = getBottleOrBottles(remainingBottles);

  const stanza = `${num} ${bottleOrBottles} of beer on the wall
    ${num} ${bottleOrBottles} of beer
    take ${bottlesToTakeAway} down, pass it around
    ${remainingBottles} ${remainingBottlesOrBottles} of beer on the wall`;

  return stanza;
}

function GetBiggerNumber(a, b) {
  return a > b ? a : b;
}

function getSmallerNumber(a, b) {
  return a < b ? a : b;
}

function isPlural(num) {
  return num > 1;
}

function getBottleOrBottles(num) {
  return isPlural(num) ? "bottles" : "bottle";
}
