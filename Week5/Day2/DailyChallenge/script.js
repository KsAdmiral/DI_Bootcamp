// Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
// In the HTML file, add a form, containing an input and a button.
// This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user
// (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it.
// Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.
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
  xhr.open(
    "GET",
    "https://api.giphy.com/v1/gifs/random?tag=" +
      category.value +
      "&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
  );
  xhr.send();
  xhr.onload = function () {
    if (xhr.status !== 200) console.log("ERROR!!!");
    else {
      const data = JSON.parse(xhr.response);
      console.log(data);
      const div = document.createElement("div");
      const img = document.createElement("img");
      img.src = data.data.images.fixed_height.url;
      const delBtn = document.createElement("button");
      const icon = document.createElement("i");
      icon.classList.add("fa-regular", "fa-trash-can");
      delBtn.appendChild(icon);
      delBtn.addEventListener("click", onClickDelete);
      div.appendChild(img);
      div.appendChild(delBtn);
      container.prepend(div);
      category.value = "";
    }
  };
}

function onClickDelete(evt) {
  console.log(evt);
  let div;
  if (evt.target.localName == "i") div = evt.target.parentElement.parentElement;
  else div = evt.target.parentElement;
  div.parentElement.removeChild(div);
}

function onDeleteAllBtnClick() {
  container.innerHTML = "";
}
