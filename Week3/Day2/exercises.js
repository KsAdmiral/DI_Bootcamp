// Exercise 1 - basic addEventListener
// Create two buttons - id of "red", id of "blue"
// // When we click on the red button -> Change the backgroundcolor of the page to red
// // When we click on the blue button -> Change the backgroundcolor of the page to blue
// const buttonRed = document.querySelector("#red");
// const buttonBlue = document.querySelector("#blue");

// buttonRed.addEventListener("click", changeBackground);
// buttonBlue.addEventListener("click", changeBackground);

// function changeBackground(e) {
//   document.body.style.backgroundColor = e.target.value;
// }

// // Exercise 2 - using the event object
// const colors = ["blue", "yellow", "green", "pink"];

// // Add inside the HTML file a div of id "container" (do it directly in the HTML)
// // Using a loop, add one button per color inside the div container (do it directly in the JS)
// // Each button should have an "click" event listener that changes the background color of the document, to the color of the button (do it directly in the JS)

// function addButtons() {
//     const container = document.querySelector("#container");
//   for (const color of colors) {
//     const buttonDiv = document.createElement("button");
//     const colorText = document.createTextNode(`Change color to: ${color}`);
//     buttonDiv.setAttribute("value", color);
//     buttonDiv.appendChild(colorText);
//     buttonDiv.addEventListener("click", changeBackground);
//     container.appendChild(buttonDiv);
//   }
// }

// addButtons();

// Exercise 1 ------------------------------------------------------------------------
// Create a structured HTML file, and add the code below in the body.

// In a JS file, write a JavaScript function to add rows to a table. Use the code below as a base

// <table id="sampleTable" border="1">
// <tr>
//     <td>Row1 cell1</td>
//     <td>Row1 cell2</td>
// </tr>
// <tr>
//     <td>Row2 cell1</td>
//     <td>Row2 cell2</td>
// </tr>
// </table>

// <input type="button" onclick="insertRow()" value="Insert row">

// const table = document.getElementById("sampleTable");
// const numOfCells = 2;

// function insertRow() {
//   let row = table.insertRow(-1);

//   for (let i = 0; i < numOfCells; i++) {
//     let cell = row.insertCell(i);
//     cell.innerHTML = "Row" + table.rows.length + " Cell" + (i + 1);
//   }
// }

// Exercise 2  ------------------------------------------------------------------------
// Add a few event listener to the button. The event listeners should change the style of the button
// <button id="jsstyle">Style</button>

// const button = document.querySelector("#jsstyle");

// button.addEventListener("mouseover", function () {
//   button.style.backgroundColor = "lightblue";
//   button.style.color = "white";
// });

// button.addEventListener("mouseout", function () {
//   button.style.backgroundColor = "";
//   button.style.color = "";
// });

// button.addEventListener("mousedown", function () {
//   button.style.backgroundColor = "darkblue";
//   button.style.color = "white";
// });

// button.addEventListener("mouseup", function () {
//   button.style.backgroundColor = "lightblue";
//   button.style.color = "white";
// });

// Exercise 3  ------------------------------------------------------------------------
// Add a click event listener to the div

// Add a few event listeners to the button. With at least one click event. The event listeners should change the style of the button

// Check how the propagation works and try to prevent it

// const btn = document.querySelector('#jsstyle');
// const container = document.querySelector('#container');

// btn.addEventListener('click', (event) => {
// event.stopPropagation();
// btn.style.backgroundColor = 'blue';
// btn.style.color = 'white';
// });

// container.addEventListener('click', (event) => {
// console.log('Container was clicked');
// });

// Exercise 1 ------------------------------------------------------------------------
// Create a structured HTML file, and add the code below in the body.

// In a JS file, write a JavaScript function to get the values of First and Last name of the following form

//     <form id="form1" onsubmit="getvalue()">
//         <label>First name: </label><input type="text" name="fname" value="David"><br>
//         <label>Last name: </label><input type="text" name="lname" value="BenGurion"><br>
//         <input type="submit" value="Submit">
//      </form>
// function getvalue(event) {
//   event.preventDefault();
//     const form = document.getElementById("form1");
//     const fname = form.elements.fname.value;
//     const lname = form.elements.lname.value;
//     console.log(`First name: ${fname}`);
//     console.log(`Last name: ${lname}`);
//   }

//   Exercise 2   ------------------------------------------------------------------------
// Create a structured HTML file, and add the code below in the body.

// In a JS file, write a JavaScript function to :

// Get the value of the 2nd Option
// Add a new option with the value 'Work' at the end of the select form
// Add a new option with the value 'Primary School' at the beginning of the select form
// Change 'College' as selected. Use the 3 properties we learned above
// Add a button that alert the choice selected
// <select id="select1">
//     <option value="apple">Middle School</option>
//     <option value="pear">University</option>
//     <option value="banana">College</option>
// </select>

const dropdown = document.getElementById("select1");
dropdown.selectedIndex = 1;
// const secondOption = dropdown.options[1].value;
// console.log("Second option value: ", secondOption);
console.log(dropdown.value);

// const option = document.createElement("Option");
// option.setAttribute("value", "work")
// option.textContent = "Work"
// dropdown.appendChild(option);
const workOption = new Option("Work", "Work");
dropdown.appendChild(workOption);
const primarySchoolOption = new Option("Primary School", "PrimarySchool");
dropdown.insertBefore(primarySchoolOption, dropdown.firstChild);

dropdown.value = "banana";

const button = document.querySelector("#submitBtn");
button.addEventListener("click", () => {
  const selectedOption = dropdown.options[dropdown.selectedIndex];
  alert("Selected Option: " + selectedOption.textContent);
  alert("Selected Option: " + dropdown.value);
});
