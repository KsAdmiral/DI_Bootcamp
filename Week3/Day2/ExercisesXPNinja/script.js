// Exercise 1 : Calculate The Tip --------------------------------------------------------
// Instructions
// Clone or Download this repository.
// Follow the instructions below :
// In this exercise you will calculate how much your tip would be after eating in a restaurant.

// First Part :
// Create a js file name main.js.

// Create a function called calculateTip() that takes no parameter.

// Create a variable called billAmount that fetches the value of the input, which id is billAmt (check the HTML file) –> It’s the amount of the bill.

// Create a variable called serviceQuality that fetches the value of the input, which id is serviceQual (check the HTML file) –> It’s the quality of the service.

// Create a variable called numberOfPeople that fetches the value of the input, which id is numOfPeople (check the HTML file) –> It’s the number of people sitting at the table.

// Create a condition :
// If serviceQuality is equal to zero, or billAmount is empty, alert the user to enter these values.

// Create another condition after the first one :
// If the input numberOfPeople is empty or is smaller than 1, set a default value of 1 to numberOfPeople and make sure that the tag which id is each, is not displayed (check the end of the HTML file).

// Create a variable named total: the value should be ( billAmount * serviceQuality ) / numberOfPeople (the outcome is the average tip each person should pay)

// Use the toFixed method to round total to two decimal points.

// Add the CSS property “display:block” to the tag which id is totalTip.

// Display the variable total in the tag which id is tip.

// Second Part:
// To avoid displaying the total if the function calculateTip() is not called, add the CSS property “display:none” to the tag which id is totalTip.
// Call the function calculateTip() when the tag which id is calculate is clicked.
// Hint : use the method onclick.
// let totalTip = document.getElementById("totalTip");
// totalTip.style.display = "none";
// const calculate = document.getElementById("calculate");
// calculate.addEventListener("click", calculateTip);

// function calculateTip() {
//   const billAmount = document.getElementById("billamt").value;
//   let serviceQuality = document.getElementById("serviceQual").value;
//   let numberOfPeople = document.getElementById("peopleamt").value;
//   const small = document.getElementById("each");
//   const total = (billAmount * serviceQuality) / numberOfPeople;
//   const tip = document.getElementById("tip");
//   total.toFixed(2);
//   totalTip.style.display = "block";
//   tip.innerHTML = total;
//   console.log(tip.value);

//   if (serviceQuality === 0 || billAmount === "") {
//     alert("Enter values please");
//   }
//   if (numberOfPeople === "" || numberOfPeople < 1) {
//     numberOfPeople = 1;
//     small.style.display = "none";
//   } else {
//     small.style.display = "block";
//   }
// }

// Exercise 2 : Validate The Email --------------------------------------------------------
// Instructions
// We will create a form that ask the user for their email. Then, using a function we will check the validity of the user’s input.

// Add an input that has a type="email" to your form.
// Write your own javascript validation function to check if the entered value is a valid email address. The address should contain some valid characters, and the @ sign, more characters then a . (period) and some more characters.
// On “submit”, the validation function should run and validate the email address.
// Try to do this exercise twice : with and without regex.

// const form = document.createElement("form")
// const input = document.createElement("input")
// input.setAttribute("type", "email")
// input.setAttribute("id", "emailInput")
// let submitBtn = document.createElement("button");
// submitBtn.setAttribute("type", "submit");
// submitBtn.textContent = "Submit";

// form.appendChild(input)
// form.appendChild(submitBtn);
// document.body.appendChild(form)

// submitBtn.addEventListener("click", function(event) {
//     event.preventDefault();
//     let email = document.getElementById("emailInput").value;
//     let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (regex.test(email)) {
//       alert("Valid email format");
//     } else {
//       alert("Invalid email format");
//     }
//   });

// let form = document.createElement("form");
// form.setAttribute("id", "emailForm");
// document.body.appendChild(form);

// let emailInput = document.createElement("input");
// emailInput.setAttribute("type", "email");
// emailInput.setAttribute("placeholder", "Enter email");
// emailInput.setAttribute("id", "emailInput");
// form.appendChild(emailInput);

// let submitBtn = document.createElement("button");
// submitBtn.innerHTML = "Submit";
// submitBtn.setAttribute("type", "submit");
// form.appendChild(submitBtn);

// submitBtn.addEventListener("click", function(event) {
//   event.preventDefault();
//   let email = document.getElementById("emailInput").value;
//   let emailParts = email.split("@");
//   if (emailParts.length !== 3) {
//     alert("Invalid email format");
//   } else if (emailParts[0].length === 0 || emailParts[1].length === 0) {
//     alert("Invalid email format");
//   } else if (!email.includes(".")) {
//     alert("Invalid email format");
//   } else {
//     alert("Valid email format");
//   }
// });

// Exercise 3 : Get The User’s Geolocation Coordinates  --------------------------------------------------  
// Instructions
// Hint/tip

// Use HTML5 and Javascript for this exercise.
// Use everything we learned in class, and use all the resources linked in the course.
// This exercise is a bit tricky, search Google how to work with HTML5 and the navigator’s geolocation.
// Create a button
// For example, after the user clicks on the button, the output of your code should be as seen below :

// Latitude: 32.179346699999996
// Longitude: 34.871555
let button = document.createElement("button");
button.innerHTML = "Get Coordinates";
document.body.appendChild(button);

button.addEventListener("click", function(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      console.log("Latitude: " + position.coords.latitude);
      console.log("Longitude: " + position.coords.longitude);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
});
