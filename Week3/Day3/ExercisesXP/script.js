// 🌟 Exercise 1: Timer -----------------------------------------------------------
// Instructions
// Using this HTML code:

// <!DOCTYPE html>
//     <html>
//     <head>
//         <style>
//         p {
//           background: yellow;
//           color: red;
//         }
//         </style>
//     </head>
//     <body>
//         <div id="container"></div>
//         <button id="clear">Clear Interval</button>
//     </body>
//     </html>

// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

// setTimeout(newPara, 2000);
// function helloWorld () {
//     alert("Hello World")
// }

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// // The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// const container = document.getElementById("container");

// function newPara() {
//   const newP = document.createElement("p");
//   newP.textContent = "Hello World";
//   container.children.length < 5
//     ? container.appendChild(newP)
//     : clearParaInter();
// }

// // Part III
// // In your Javascript file, using setInterval, call a function every 2 seconds.
// // The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// // The interval will be cleared (ie. clearInterval), when the user will click on the button.
// // Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
// const button = document.getElementById("clear");
// const cancelInter = setInterval(newPara, 1000);

// function clearParaInter() {
//   clearInterval(cancelInter);
// }

// button.addEventListener("click", clearParaInter);

// 🌟 Exercise 2 : Move The Box -----------------------------------------------------------
// Instructions
// <!DOCTYPE html>
//     <html>
//     <head>
//         <style>
//         #container {
//           width: 400px;
//           height: 400px;
//           position: relative;
//           background: yellow;
//         }
//         #animate {
//           width: 50px;
//           height: 50px;
//           position: absolute;
//           background-color: red;
//         }
//         </style>
//     </head>
//     <body>
//         <p><button onclick="myMove()">Click Me</button></p>
//         <div id="container">
//           <div id="animate"></div>
//         </div>
//     </body>
//     </html>

// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions

// let distance = 0;
// let interval;

// function myMove() {
//   interval = setInterval(moveRedSquare, 1);
// }

// function moveRedSquare() {
//   const WIDTH_OF_CONTAINER = 400;
//   const WIDTH_OF_SQAURE = 50;

//   if (distance === WIDTH_OF_CONTAINER - WIDTH_OF_SQAURE)
//     return clearInterval(interval);
//   distance += 1;
//   const redSquare = document.getElementById("animate");
//   redSquare.style.left = distance + "px";
// }

// 🌟 Exercise 3: Drag & Drop -----------------------------------------------------------
// Instructions
// <!DOCTYPE html>
//     <html>
//     <head>
//         <style>
//         #target {
//           width: 200px;
//           height: 200px;
//           position: relative;
//           background: yellow;
//         }
//         #box {
//           width: 50px;
//           height: 50px;
//           position: absolute;
//           background-color: red;
//         }
//         </style>
//     </head>
//     <body>
//         <div id="target"></div>
//         <br>
//         <div id="box"></div>
//     </body>
//     </html>

// Copy the code above, to a structured HTML file.
// In your Javascript file add the functionality which will allow you to drag the box and drop it into the target. Check out the Course Notes named DOM animations.

const yellowBox = document.getElementById("target");
const redBox = document.getElementById("box");

yellowBox.addEventListener("dragover", handleDragEnter);
yellowBox.addEventListener("dragenter", handleDragEnter);
yellowBox.addEventListener("dragleave", handleDragleave);
yellowBox.addEventListener("drop", handleDrop);

function handleDragleave(event) {
  event.preventDefault();
  yellowBox.classList.remove("is-hovered");
}

function handleDragEnter(event) {
  event.preventDefault();
  yellowBox.classList.add("is-hovered");
}

function handleDrop(event) {
  yellowBox.classList.remove("is-hovered");
  yellowBox.append(box);
}
