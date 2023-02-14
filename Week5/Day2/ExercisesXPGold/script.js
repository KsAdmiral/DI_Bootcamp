// Exercise 1 : Giphy API #2
// Instructions
// Part I

// Use the Giphy API Documentation for this exercise. Use the API KEY provided in the Exercises XP.
// Create a program to fetch a gif.
// Once the Giphy API has responded with data, append one random GIF to the page.
// Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
const container = document.getElementById("container");
const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  `https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
);
xhr.send();

xhr.onload = function () {
  if (xhr.status !== 200) console.log("ERROR!!!");
  else {
    const response = JSON.parse(xhr.response);
    const data = response.data;
    console.log(data);
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = data[randomNumber()].images.fixed_height.url;
    div.appendChild(img);
    container.prepend(div);
  }
};

function randomNumber() {
  return Math.floor(Math.random() * 50);
}
