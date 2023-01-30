// 🌟 Exercise 1 : Change The Article
// Instructions
// Copy the code below, into a structured HTML file:

// <article>
//     <h1> Some Facts </h1>
//     <h2> The Chocolate </h2>
//     <h3> History of the chocolate </h3>
//     <p> Chocolate is made from tropical Theobroma cacao tree seeds.
//     Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
//     <p> After the European discovery of the Americas, chocolate became
//     very popular in the wider world, and its demand exploded. </p>
//     <p> Chocolate has since become a popular food product that millions enjoy every day,
//     thanks to its unique, rich, and sweet taste.</p>
// //     <p> But what effect does eating chocolate have on our health?</p>
// // </article>

// // Using a DOM property, retrieve the h1 and console.log it.
// const headerOne = document.body.children[0].children[0];
// console.log(headerOne);
// const article = document.querySelector("article");
// // Using DOM methods, remove the last paragraph in the <article> tag.
// document.body.children[0].lastElementChild.remove();
// // Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
// const headerTwo = document.body.children[0].children[1];
// headerTwo.addEventListener("click", changeBackground);
// // Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
// const headerThree = document.body.children[0].children[2];
// headerThree.addEventListener("click", hideHeader);
// // Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// const button = document.createElement("button");
// const paragraphs = article.querySelectorAll("p");
// button.textContent = "Make paragraphs bold";
// article.appendChild(button);
// button.addEventListener("click", allParaToBold);
// // BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
// headerOne.addEventListener("mouseover", randomFontSize);
// // BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
// // const secondP = document.querySelectorAll("p")[1];
// const secondParagraph = article.querySelectorAll("p")[1];
// secondParagraph.addEventListener("mouseover", fadeOut);

// function fadeOut() {
//   secondParagraph.classList.add("fade-out");
// }
// function changeBackground() {
//   headerTwo.style.backgroundColor = "red";
// }
// function hideHeader() {
//   headerThree.style.display = "none";
// }
// function allParaToBold() {
//   paragraphs.forEach((paragraph) => {
//     paragraph.style.fontWeight = "bold";
//   });
// }
// function randomFontSize() {
//   headerOne.style.fontSize = Math.floor(Math.random() * 100 + 1) + "px";
// }
{
  /* <style>
.fade-out {
    animation: fadeOut 1s;
    animation-fill-mode: forwards;
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}
</style> */
}
// 🌟 Exercise 2 : Work With Forms --------------------------------------------------------------
// Instructions
// Copy the code below, into a structured HTML file:

// <form>
//   <label for="fname">First name:</label><br>
//   <input type="text" id="fname" name="fname"><br>
//   <label for="lname">Last name:</label><br>
//   <input type="text" id="lname" name="lname"><br><br>
//   <input type="submit" value="Submit" id="submit">
// </form>
// // <ul class="usersAnswer"></ul>

// // Retrieve the form and console.log it.
// const form = document.querySelector("form");
// console.log(form);
// // Retrieve the inputs by their id and console.log them.
// const fName = document.querySelector("#fname");
// const lName = document.querySelector("#lname");
// console.log(fName);
// console.log(lName);
// // Retrieve the inputs by their name attribute and console.log them.
// const firstAtt = document.querySelector("[name=fname").value;
// const lastAtt = document.querySelector("[name=lname").value;
// console.log(firstAtt);
// console.log(lastAtt);
// // When the user submits the form (ie. submit event listener)
// // use event.preventDefault(), why ?
// // get the values of the input tags,
// // make sure that they are not empty,
// // create an li per input value,
// // then append them to a the <ul class="usersAnswer"></ul>, below the form.
// // The output should be :
// // <ul class="usersAnswer">
// //     <li>first name of the user</li>
// //     <li>last name of the user</li>
// // </ul>
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const firstName = document.querySelector("[name=fname").value;
//   const lastName = document.querySelector("[name=lname").value;
//   const ul = document.querySelector(".usersAnswer");
//   const firstLi = document.createElement("li");
//   const secondLi = document.createElement("li");

//   if (firstName === "" || lastName === "")
//     return alert("Please fill all fields");
//   ul.innerHTML = "";
//   firstLi.innerText = firstName;
//   secondLi.innerText = lastName;
//   ul.append(firstLi, secondLi);
// });

// 🌟 Exercise 3 : Transform The Sentence --------------------------------------------------------
// Instructions
// Add this sentence to your HTML file then follow the steps :

// <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
// <strong>end</strong> you <strong>will</strong> be great Developers!
// <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>

// // In the JS file:

// // Declare a global variable named allBoldItems.
// let allBoldItems;
// // Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
// function getBoldItems() {
//   allBoldItems = document.getElementsByTagName("strong");
// }
// // Create a function called highlight() that changes the color of all the bold text to blue.
// function highlight() {
//   getBoldItems();
//   for (const boldItem of allBoldItems) {
//     boldItem.style.color = "blue";
//   }
// }
// // Create a function called return_normal() that changes the color of all the bold text back to black.
// function returnNormal() {
//   getBoldItems();
//   for (const item of allBoldItems) {
//     item.style.color = "black";
//   }
// }
// // Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example
// const paragraph = document.querySelector("p");
// paragraph.addEventListener("mouseover", highlight);
// paragraph.addEventListener("mouseout", returnNormal);

// 🌟 Exercice 4 : Volume Of A Sphere ---------------------------------------------------------
// Instructions
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:
// <!doctype html>
// <html lang="en">
//     <head>
//         <meta charset="utf-8">
//         <title>Volume of a Sphere</title>
//         <style>
//             body {
//                 padding-top:30px;
//             }

//             label,input {
//                 display:block;
//             }
//         </style>
//     </head>
//     <body>
//         <p>Input radius value and get the volume of a sphere.</p>
//         <form  id="MyForm">
//             <label for="radius">Radius</label><input type="text" name="radius" id="radius" required>
//             <label for="volume">Volume</label><input type="text" name="volume" id="volume">
//             <input type="submit" value="Calculate" id="submit">
//         </form>
// //     </body>
// // </html>

const form = document.getElementById("my-form");
const radius = document.getElementById("radius");
const volume = document.getElementById("volume");
const numberOfDecimals = 2;
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const r = Number(radius.value);
  if (Number.isNaN(r)) return;
  const v = (4 / 3) * Math.PI * r * 3;
  volume.value = v.toFixed(numberOfDecimals);
}

// Exercise 5 : Event Listeners ---------------------------------------------------------------------
// Instructions
// Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.
// Each listener should do a different thing, for instance - change position x, change position y, change color, change the font size… and more.
form.addEventListener("pointerenter", () => console.log("pointer inside"));
form.addEventListener("mouseover", () => (form.style.backgroundColor = "red"));
