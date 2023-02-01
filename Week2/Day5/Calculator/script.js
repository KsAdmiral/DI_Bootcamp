// Make A Complete Calculator In Javascript.
// Introduction:
// Today we will be creating a fully functional calculator. In order to do this, we must have our HTML and Javascript files interact with each other.
// We will be using Javascript to dynamically calculate the outcome of the buttons that were clicked on the HTML.
// We will be adding an attribute called onclick to each button. The onclick attribute allows us to call a function from our Javascript file when the button is clicked.
// For example, if you click on the number 2 on the calculator (ie. seen below in the assets), the function number(2) will be called. The argument is the value of the button.

// Use HTML CSS for the visual.

// Instructions:
// Create a HTML file for your calculator and a JS file for the calculator’s functionality.
// You must create 3 functions in the js file:
// number(num)
// operator(operator)
// equal()
// Hint : you can use the eval() method to help with your calculations.
// Before coding, take your time to understand all the parts to the exercise and their process. You can write it down somewhere if it helps (recommended).
// Bonus : create the RESET and CLEAR buttons.

// Assets
// Use this code for the base :

// <!DOCTYPE html>
// <html lang="en" dir="ltr">
//   <head>
//     <meta charset="utf-8">
//     <title></title>
//     <link rel="stylesheet" href="css/style.css">
//     <style>
//       button {
//         width:70px;
//         height:70px;
//       }
//     </style>
//   </head>
//   <body>
//     <button type="button" name="button" onclick="number(1);">1</button>
//     <button type="button" name="button" onclick="number(2);">2</button>
//     <button type="button" name="button" onclick="number(3);">3</button>
//     <br>
//     <button type="button" name="button" onclick="number(4);">4</button>
//     <button type="button" name="button" onclick="number(5);">5</button>
//     <button type="button" name="button" onclick="number(6);">6</button>
//     <br>
//     <button type="button" name="button" onclick="number(7);">7</button>
//     <button type="button" name="button" onclick="number(8);">8</button>
//     <button type="button" name="button" onclick="number(9);">9</button>
//     <button type="button" name="button" onclick="number(0);">0</button>
//     <br>
//     <button type="button" name="button" onclick="operator('+');">+</button>
//     <button type="button" name="button" onclick="operator('-');">-</button>
//     <button type="button" name="button" onclick="operator('*');">*</button>
//     <button type="button" name="button" onclick="operator('/');">/</button>
//     <button type="button" name="button" onclick="equal();">=</button>
//     <script src="js/main.js" charset="utf-8"></script>
//   </body>
// </html>
// const input = document.querySelector(".input").value
let numbers = [];
let currentNumber = "";
let currentOperator = undefined;
let input = document.querySelector(".input");

function number(num) {
  input.value += num;
  currentNumber += num;
}

function operator(operator) {
  input.value += operator;
  finishNumber();
  currentOperator = operator;
}

function reset() {
  input.value = "";
  numbers = [];
  currentOperator = undefined;
  currentNumber = "";
}

function equal() {
  let result;
  finishNumber();
  switch (currentOperator) {
    case "+":
      result = numbers[0] + numbers[1];
      break;
    case "-":
      result = numbers[0] - numbers[1];
      break;
    case "*":
      result = numbers[0] * numbers[1];
      break;
    case "/":
      result = numbers[0] / numbers[1];
      break;
  }
  input.value += `=${result}`;
  numbers = [];
}

function finishNumber() {
  numbers.push(Number(currentNumber));
  currentNumber = "";
}
