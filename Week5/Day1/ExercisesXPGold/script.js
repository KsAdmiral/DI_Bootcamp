// Exercise 1 : HTML Form #3
// Instructions
// form

// Create a form like the form provided above. The form should contain three inputs:
// name,
// lastname,
// submit
// Send the data to another HTML file and display the sent data in the body.

const data = JSON.stringify({
  name: `${decodeURIComponent(
    new URLSearchParams(location.search).get("name")
  )}`,
  lastname: `${decodeURIComponent(
    new URLSearchParams(location.search).get("lastname")
  )}`,
});
document.querySelector("#receivedData").innerText = data;
