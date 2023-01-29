// 🌟 Exercise 1 : Users
// Instructions
// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>

// Add the code above, to your HTML file

// // Using Javascript:
// // Retrieve the div and console.log it
// // Change the name “Pete” to “Richard”.
// // Change each first name of the two <ul>'s to your name.
// // Delete the <li> that contains the text node “Sarah”.

// // Bonus - Using Javascript:
// // Add a class called student_list to both of the <ul>'s.
// // Add the classes university and attendance to the first <ul>.

// const container = document.body.children[0];
// const peteToRichard = (document.body.children[1].children[1].textContent =
//   "Richad");
// const myName = document.querySelectorAll(".list");
// myName.forEach((list) => (list.firstElementChild.textContent = "Niv"));

// myName[1].children[1].remove();

// myName.forEach((list) => list.classList.add("student_list"));
// const firstUl = document.querySelector("ul.list.student_list");
// firstUl.classList.add("university", "attendance");

// 🌟 Exercise 2 : Users And Style --------------------------------------------------------------
// Instructions
// <div>Users:</div>
// <ul>
//     <li>John</li>
//     <li>Pete</li>
// </ul>

// Add the code above, to your HTML file

// Add a “light blue” background color and some padding to the <div>.

// Do not display the <li> that contains the text node “John”.

// Add a border to the <li> that contains the text node “Pete”.

// Change the font size of the whole body.

// // Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

// const div = document.querySelector("div");
// div.style.backgroundColor = "lightblue";
// div.style.padding = "50px";

// const divBackground = getComputedStyle(div).backgroundColor;
// console.log(divBackground);

// const john = document.body.children[1].children[0];
// john.style.display = "none";

// const pete = document.body.children[1].children[1];
// pete.style.border = "2px solid green";

// const body = (document.body.style.fontSize = "x-large");

// if (divBackground === "rgb(173, 216, 230)") {
//   console.log(`Hello ${john.textContent} and ${pete.textContent}`);
// } else {
//   console.log("error");
// // }

// 🌟 Exercise 3 : Change The Navbar --------------------------------------------------------------
// Instructions
// <div id="navBar">
//     <ul>
//         <li><a href="#">Profile</a></li>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">My Friends</a></li>
//         <li><a href="#">Messenger</a></li>
//         <li><a href="#">My Pics</a></li>
//     </ul>
// </div>

// Add the code above, to your HTML file

// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

// Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

// const div = document.getElementById("navBar");
// div.setAttribute("id", "socialNetworkNavigation");

// const ul = div.children[0];
// const newLi = document.createElement("li");
// ul.appendChild(newLi);
// const logout = document.createTextNode("Logout");
// newLi.appendChild(logout);

// const firstLi = ul.firstElementChild;
// const lastLi = ul.lastElementChild;
// console.log(firstLi.textContent);
// console.log(lastLi.textContent);

// Exercise 4 : My Book List --------------------------------------------------------------
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

// const allBooks = [
//   {
    // title: "Songoficeandfire",
    // author: "GeorgeRRMartin",
    // image:
    //   "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg/220px-A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg",
    // alreadyRead: "true",
//   },
//   {
//     title: "HarryPotter",
//     author: "JKRowling",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/6/6e/Harry_Potter_wordmark.svg",
//     alreadyRead: "false",
//   },
// ];

// let htmlString = "";
// for (const book of allBooks) {
//   const rowString = `
//   <tr class="${book.alreadyRead ? is - read : ""}">
//   <td>${book.title} written by ${book.author}</td>
//   <td>
//   <img src="${book.image}")/>
//   </td>
//   <td>Already read: ${book.alreadyRead}</td>
//   </tr>
//   `;
//   htmlString = htmlString + rowString;
// }

// const table = document.createElement("table");
// table.innerHTML = `
// <thead>
// <tr>
// <th colspan="3">My Book List</th>
// </tr>
// </thead>
// <tbody>
// ${htmlString}
// </tbody>
// `;

// const bookListDiv = document.querySelector(".list-books");
// bookListDiv.appendChild(table);

// const allBooks = [
//   {
//     title: "Song of ice and fire",
//     author: "GeorgeRRMartin",
//     image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg/220px-A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg",
//     alreadyRead: true,
//   },
//   {
//     title: "Harry Potter",
//     author: "JKRowling",
//     image: "https://m.media-amazon.com/images/I/51PcUAhn15L._SX498_BO1,204,203,200_.jpg",
//     alreadyRead: false,
//   },
// ];

// const listBooks = document.querySelector(".list-books");

// const table = document.createElement("table");
// listBooks.appendChild(table);

// for (const book of allBooks) {
//   const tr = document.createElement("tr");
//   table.appendChild(tr);

//   const titleTd = document.createElement("td");
//   titleTd.textContent = book.title;
//   tr.appendChild(titleTd);
  
//   const imageTd = document.createElement("td");
//   const image = document.createElement("img");
//   image.src = book.image;
//   image.style.width = "100px";
//   imageTd.appendChild(image);
//   tr.appendChild(imageTd);

//   const authorTd = document.createElement("td");
//   authorTd.textContent = `written by ${book.author}`;
//   tr.appendChild(authorTd);
  
//   if (book.alreadyRead) {
//     titleTd.style.color = "red";
//     authorTd.style.color = "red";
//   }
// }
