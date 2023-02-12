// Instructions
// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
// The output should be:
// output
// https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%205/Day%201/Daily%20Challenge/FireShot%20Capture%20173%20-%20Form%20-%20.png

const form = document.forms[0];
const output = document.getElementById("output");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = e.target.elements.fname.value;
  const lastName = e.target.elements.lname.value;
  const data = { firstName, lastName };
  const jsonData = JSON.stringify(data);
  output.textContent += jsonData;
});
