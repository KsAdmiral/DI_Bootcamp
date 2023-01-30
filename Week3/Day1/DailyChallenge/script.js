// Instructions
// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

const solarSystemPlanets = [
  { name: "Mercury", moons: 0 },
  { name: "Venus", moons: 0 },
  { name: "Earth", moons: 1 },
  { name: "Mars", moons: 0 },
  { name: "Jupiter", moons: 2 },
  { name: "Saturn", moons: 3 },
  { name: "Uranus", moons: 4 },
  { name: "Neptune", moons: 0 },
];

const colors = [
  "orange",
  "yellow",
  "blue",
  "red",
  "green",
  "brown",
  "pink",
  "purple",
];
const section = document.querySelector(".list-planets");

solarSystemPlanets.forEach((planet, index) => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("planet");
  newDiv.style.backgroundColor = colors[index];
  newDiv.textContent = planet["name"];

  for (let i = 0; i < planet["moons"]; i++) {
    const moonDiv = document.createElement("div");
    moonDiv.classList.add("moon");
    moonDiv.style.left = i * 20 + "px";
    newDiv.appendChild(moonDiv);
  }

  section.appendChild(newDiv);
  console.log(newDiv);
});
