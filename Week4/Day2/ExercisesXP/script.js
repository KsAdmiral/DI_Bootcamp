// 🌟 Exercise 1 : Find The Sum -------------------------------------------------------
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

// let sum = (a,b) => a + b
// console.log(sum(2,3));

// 🌟 Exercise 2 : Kg And Grams -------------------------------------------------------
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.

// function kilosToGrams(kilo) {
//   const grams = kilo * 1000;
//   console.log(grams);
// }
// kilosToGrams(5);

// Then, use function expression and invoke it.

// const kilosToGrams = function (kilo) {
//     const grams = kilo * 1000;
//     console.log(grams);
//   };
//   kilosToGrams(5);

// Write in a one line comment, the difference between function declaration and function expression.
// Can not call function expression before initialization unlike function declaration where you can use whereever you like
// Finally, use a one line arrow function and invoke it.

// const kilosToGrams = kilo => kilo * 1000;
// console.log(kilosToGrams(2));

// 🌟 Exercise 3 : Fortune Teller -------------------------------------------------------
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

// (function (childrenNum, partnerName, location, jobTitle) {
//   const para = document.createElement("p");
//   const container = document.getElementById("container")
//   const text = document.createTextNode(
//     `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${childrenNum} kids.`
//   );
//   para.appendChild(text);
//   container.appendChild(para)
// })(3, "Alice", "Israel", "CEO");

// 🌟 Exercise 4 : Welcome -------------------------------------------------------
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

// (function (name) {
//   const navbar = document.querySelector(".navbar");
//   const div = document.createElement("div");
//   div.innerHTML = `Welcome, ${name} <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png" alt="" width="30px" height="30px">`;
//   navbar.appendChild(div);
// })(prompt("Your name"));

// 🌟 Exercise 5 : Juice Bar -------------------------------------------------------
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

function makeJuice(userAnswer) {
  const ingredients = [];

  function addIngredients(ingredientOne, ingredientTwo, ingredientThree) {
    ingredients.push(ingredientOne, ingredientTwo, ingredientThree);
  }

  addIngredients(
    prompt("Choose an Ingredient"),
    prompt("Choose an Ingredient"),
    prompt("Choose an Ingredient")
  );
  addIngredients(
    prompt("Choose an Ingredient"),
    prompt("Choose an Ingredient"),
    prompt("Choose an Ingredient")
  );
  displayJuice(ingredients);

  function displayJuice(ingredients) {
    let sentence = `The client wants ${userAnswer} drink containing `;
    const isLastElement = (array, index) => index === array.length - 1;
    ingredients.forEach((ingredient, i) => {
      const word = `${ingredient}${isLastElement(ingredients, i) ? "." : ","}`;
      sentence += word;
    });

    const para = document.createElement("p");
    para.innerText = sentence;
    document.body.appendChild(para);
  }
}
makeJuice(prompt("small, medium or large?"));
