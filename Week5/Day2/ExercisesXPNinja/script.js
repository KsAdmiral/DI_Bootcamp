// Exercise 1 : Giphy API #3
// Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
// Create a program to fetch gifs.
// Create an input and a button, which will allow the user to search for a specific type/category of gif.
// Append the relevant gifs to the page. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to remove all of the GIFs by clicking a delete button

const categoryInput = document.forms[0].categoryInput;
const container = document.getElementById("container");

document.forms[0].searchBtn.addEventListener("click", onBtnClick);
document.forms[0].deleteAllBtn.addEventListener("click", onDeleteAllBtnClick);

function onBtnClick(evt) {
  evt.preventDefault();
  getData();
}

function getData() {
  const xhr = new XMLHttpRequest();
  const query = category.value;
  xhr.open(
    "GET",
    `https://api.giphy.com/v1/gifs/search?q=${query}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
  );
  xhr.send();
  xhr.onload = function () {
    if (xhr.status !== 200) console.log("ERROR!!!");
    else {
      const response = JSON.parse(xhr.response);
      const data = response.data;
      data.forEach(gif => {
        const gifElement = document.createElement("img");
        gifElement.src = gif.images.downsized.url;
        container.appendChild(gifElement);
      });
      category.value = "";
    }
  };
}

function onDeleteAllBtnClick() {
  container.innerHTML = "";
}
