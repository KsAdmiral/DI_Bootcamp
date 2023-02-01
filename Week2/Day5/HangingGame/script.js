// Create A Hangman Game:
// Instructions:
// Create the “Hangman” game. Your game will run in the console.
// You need to guess a hidden word. Each letter you guess will appear in the console. You have 10 chances before you lose the game.

// Check it out here

// Prompt player 1 for a word. The word must have a minimum of 8 letters. Present the word in the console with stars (********).
// At this point continuously prompt player 2 for a letter.
// If the letter is in the word chosen by player 1, display the word in stars again but with the correct letter (*****t**).
// If the letter appears in the word multiple times, make sure it is seen in all the correct places when showing the stars with the correct guesses (***t**t*).
// If player 2 guesses incorrectly 10 times display a message in the console saying YOU LOSE.
// Show a list of all the guesses after each turn. In your code prevent player 2 from guessing the same letter twice.
// If player 1 wins, display a message that says CONGRATS YOU WIN.
// let playerOneAnswer = prompt("Enter a word with minimum of 8 letters");

// function playerOneWord() {
//   while (playerOneAnswer.length <= 7) {
//     playerOneAnswer = prompt("Enter a word with minimum of 8 letters");
//   }
//   console.log("* ".repeat(playerOneAnswer.length));
//   return playerOneAnswer;
// }

// function playerTwoLetter(oneAnswer) {
//   let playerTwoAnswer = prompt("Choose a letter");
//   console.log(playerTwoAnswer);
//   if (oneAnswer.includes(playerTwoAnswer)) {
//     console.log("The word is in the string.");
//   } else {
//     console.log("The word is not in the string.");
//   }
// }

// playerOneWord()
// playerTwoLetter(playerOneAnswer)

function hangmanGame() {
  let playerOneWord = prompt("Enter a word (minimum 8 letters)");
  while (playerOneWord.length < 8) {
    playerOneWord = prompt("Enter a word (minimum 8 letters)");
  }

  let stars = "* ".repeat(playerOneWord.length);
  console.log(stars);
  let guesses = [];
  let missedGuesses = 0;
  
  while (missedGuesses < 10 && stars.indexOf("*") !== -1) {
    const playerTwoLetter = prompt("Enter a letter");
    if (!playerTwoLetter.match(/^[a-zA-Z]$/)) {
      console.log("Enter a valid letter.");
      continue;
    }
    if (guesses.indexOf(playerTwoLetter) !== -1) {
      console.log("You have already guessed this letter.");
      continue;
    }
    guesses.push(playerTwoLetter);

    let newStars = "";
    let found = false;
    for (let i = 0; i < playerOneWord.length; i++) {
      if (playerOneWord[i].toLowerCase() === playerTwoLetter.toLowerCase()) {
        newStars += playerOneWord[i];
        found = true;
      } else {
        newStars += stars[i];
      }
    }

    if (!found) {
      missedGuesses++;
    }

    stars = newStars;
    console.log(stars);
    console.log("Guesses: " + guesses.join(", "));
  }

  if (missedGuesses === 10) {
    console.log("YOU LOSE");
  } else {
    console.log("CONGRATS YOU WIN");
  }
}

hangmanGame();
