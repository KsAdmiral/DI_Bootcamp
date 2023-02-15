// 🌟 Exercise 1: Conversion ----------------------------------------------------------------
// Instructions
// Convert the below promise into async await:

fetch("https://www.swapi.tech/api/starships/9/")
  .then(response => response.json())
  .then(objectStarWars => console.log(objectStarWars.result));

async function boo() {
  const response = await fetch("https://www.swapi.tech/api/starships/9/");
  const data = await response.json();
  // const result = await data.result;
  console.log(data);
}
boo();

// 🌟 Exercise 2: Analyze ----------------------------------------------------------------
// Instructions
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();
// Analyse the code provided above before executing it - what will be the outcome?
// Calling and then resolved
