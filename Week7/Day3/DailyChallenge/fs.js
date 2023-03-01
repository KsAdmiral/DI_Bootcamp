const fs = require("fs");
const characters = fs.readFileSync("RightLeft.txt", "utf-8").split("");
const AUTHORIZED_CHARACTERS = ["<", ">"];
let position = 0;
let stepOfFirstMinusOne = null;

characters.forEach((character, step) => {
  if (!AUTHORIZED_CHARACTERS.includes(character))
    return console.log("wrong character");
  incrementPosition(character);
  checkStepOfFirstMinusOne(step);
});

function incrementPosition(character) {
  const difference = character === "<" ? -1 : 1;
  position += difference;
}

function checkStepOfFirstMinusOne(step) {
  if (position === -1 && stepOfFirstMinusOne === null) {
    stepOfFirstMinusOne = step;
    console.log(`hit -1, current step is ${stepOfFirstMinusOne}`);
  }
}

let leftOrRight = sayLeftOrRight(position);

console.log(`${Math.abs(position)} steps to the ${leftOrRight}`);

function sayLeftOrRight(position) {
  if (position === 0) return "";
  return position > 0 ? "to the right" : "to the left";
}
