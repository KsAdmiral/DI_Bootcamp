// Exercise 1 : Select A Kind Of Music  -------------------------------------------------------------
// Instructions
// <select id="genres">
//   <option value="rock">Rock</option>
//   <option value="blues" selected>Blues</option>
// </select>

// // Display the value of the selected option.
// const dropdown = document.getElementById("genres")

// dropdown.addEventListener("change", () => {
//     const selectedValue = dropdown.value;
//     console.log(`Selected genre: ${selectedValue}`);
//   });
// // Add an additional option to the select tag:
// // <option value="classic">Classic</option>
// const classicOption = new Option("Classic", "classic");
// dropdown.appendChild(classicOption);
// // The newly added option should be selected by default.
// dropdown.value = "classic"

// Exercise 2: Delete Colors --------------------------------------------------------
// Instructions
// <form>
//     <select id="colorSelect">
//         <option>Red</option>
//         <option>Green</option>
//         <option>White</option>
//         <option>Black</option>
//     </select>
//     <input type="button" value="Select and Remove">
// </form>

// Add a click event listener to the <input type="button">. When clicked on, it should call a function named : removecolor() that removes the selected color from the dropdown list.

// const button = document.querySelector('input')
// button.addEventListener("click", removecolor)

// function removecolor(){
//     const select = document.getElementById("colorSelect");
//     const selectedIndex = select.selectedIndex;
//     select.remove(selectedIndex);
// }

// Exercise 3 : Create A Shopping List  -------------------------------------------------------------
// Instructions
// For this exercise, you need to work on your js file.
// The one and only element on your HTML file should be:

// <div id="root"></div>
// In your js file:
// Create an empty array. For example: let shoppingList=[].
// Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.
// Type what you need to buy in the text input field, then add the new item to the array as soon as you click on the “AddItem” button (Hint: create a function named addItem()).
// Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() function (see below).
// Create a function named clearAll() that should clear out all the items in the shopping list.

let shoppingList = [];
let form = document.createElement("form");
let inputField = document.createElement("input");
inputField.type = "text";
let addItemButton = document.createElement("button");
addItemButton.textContent = "Add Item";

form.appendChild(inputField);
form.appendChild(addItemButton);

document.getElementById("root").appendChild(form);

addItemButton.addEventListener("click", (event) => {
  event.preventDefault();
  addItem();
});

function addItem() {
  let item = inputField.value;
  shoppingList.push(item);
  inputField.value = "";
  console.log(shoppingList);
}

let clearAllButton = document.createElement("button");
clearAllButton.textContent = "Clear All";

document.getElementById("root").appendChild(clearAllButton);

clearAllButton.addEventListener("click", clearAll);

function clearAll() {
  shoppingList = [];
  console.log(shoppingList);
}

