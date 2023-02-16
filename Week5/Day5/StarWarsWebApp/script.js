// Instructions
// You should use this API: https://www.swapi.tech/ to get the data and update it “randomly” in your website by clicking a button.
// Note: The API contains 83 different characters
// Create your HTML file, and add the relevant elements.
// In your JS file, create your functions :
// to retrieve the elements from the DOM.
// to get the data from the API (star wars characters).
// to display the info on the DOM: the name, height, gender, birth year, and home world of the character.
// Display the data using AJAX. Make sure to display a loading message as follows:
// You can use any of these animation icons for the loading message.
// 4. If there is an error getting the data, display a message as follows:
// 5. You can use your own css to style the website as you see fit

const container = document.getElementById("container");
let nameId = document.getElementById("name");
let heightId = document.getElementById("height");
let genderId = document.getElementById("gender");
let birthyear = document.getElementById("birthyear");
let button = document.getElementById("button");
let home = document.getElementById("home");

button.addEventListener("click", retrieveData);

async function retrieveData() {
  updateWithLoading();
  const url = `https://www.swapi.tech/api/people/${createRandomNumber()}`;
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error("Couldnt find a number");
    }
    const data = await response.json();
    displayData(data.result.properties);
  } catch (error) {
    container.textContent = `Oh No! That person isnt available.`;
    container.style.fontSize = "30px";
    console.error(error);
  }
}

function createRandomNumber() {
  return Math.floor(Math.random() * 84);
}

async function retrieveWorld(worldURL) {
  const url = worldURL;
  const response = await fetch(url);
  const data = await response.json();
  const planetName = await data.result.properties.name;
  return planetName;
}

async function displayData(properties) {
  const { name, height, gender, birth_year } = properties;
  const world = await retrieveWorld(properties.homeworld);
  nameId.textContent = name;
  heightId.textContent = `Height: ${height}`;
  genderId.textContent = `Gender: ${gender}`;
  birthyear.textContent = `Birth Year: ${birth_year}`;
  home.textContent = `Home World: ${world}`;
}

function updateWithLoading() {
  nameId.innerHTML =
    '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';
  heightId.textContent = "";
  genderId.textContent = "";
  birthyear.textContent = "";
  home.textContent = "";
}
