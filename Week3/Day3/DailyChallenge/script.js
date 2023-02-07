// Instructions
// Daily Challenge : Show Only The Letters
// Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)

// Hint: use one of the following events to remove any character that is not a letter

// keyup event
// or keypress event
// or keydown event
// or input event

// Hint : Check out keycodes in Javascript or Regular Expressions

let inputField = document.getElementById("input-field");

inputField.addEventListener("input", function (event) {
  let value = event.target.value;
  let newValue = "";
  for (let i = 0; i < value.length; i++) {
    if (/[a-zA-Z]/.test(value[i])) {
      newValue += value[i];
    }
  }
  event.target.value = newValue;
});
