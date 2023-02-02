// // Exercise 1
// <html>
// <body>
//   <div>Users:</div>
//   <ul>
//     <li>John</li>
//     <li>Pete</li>
//   </ul>
// </body>
// </html>
// For each of the questions, find 2 WAYS of accessing :

// // 1. The div DOM node?
// const divWayOne = document.body.children[0];
// const divWaytwo = document.body.firstElementChild;
// // 2. The ul DOM node?
// const ulWayOne = document.body.children[1];
// const ulWayTwo = divWayOne.nextElementSibling;
// // 3. The second li (with Pete)?
// const liPeteOne = ulWayOne.lastElementChild;
// const liPeteTwo = ulWayOne.children[1];
// const liWayThree = document.body.children[1].children[1];

// // Exercise 2 -------------------------------------------------------------------
// // <html>
// // <body>
// //   <div id="container">Users:</div>
// //   <ul class="list">
// //     <li>John</li>
// //     <li>Pete</li>
// //   </ul>
// //   <ul class="list">
// //     <li>Sarah</li>
// //     <li>Dan</li>
// //   </ul>
// // </body>
// // </html>
// // For each of the questions, find 2 WAYS to access :

// // 1. The div node
// const divOne = document.body.children[0];
// const divTwo = document.getElementById("container");
// // 2. The ul nodes, and render all of it's children one by one
// const ulOne = document.querySelectorAll(".list");
// ulOne.forEach(function (ulOne) {
//   const children = ulOne.children;
//   Array.from(children).forEach(function (child) {
//     console.log(child.textContent);
//   });
// });

// const ulTwo = document.getElementsByClassName("list");
// for (let i = 0; i < ulTwo.length; i++) {
//   let children = ulTwo[i].children;
//   for (let j = 0; j < children.length; j++) {
//     console.log(children[j].textContent);
//   }
// }
// // 3. The first li of each ul
// const liOne = ulOne.forEach((list) =>
//   console.log(list.firstElementChild.textContent)
// );
// const liTwo = document.getElementsByClassName("list");
// for (let i = 0; i < liTwo.length; i++) {
//   console.log(liTwo[i].firstElementChild.textContent);
// }

// Exercise 1 ------------------------------------------------------------------------------------

{/* <html>
<body> 
    <p>
        <a id="dI" type="text/html" hreflang="en-us" rel="nofollow" target="_self" href="https://developers.institute/">Developers Institute</a>
    </p> 
</body>
</html> 
Write variables to get the value of the attributes of the specified link :

href
hreflang
rel
target
type  */}
// 
// }
// const id = document.getElementById("dI")
// const href = dI.getAttribute('href')
// const hreflang = dI.getAttribute('hreflang')
// const rel = dI.getAttribute('rel')
// const target = dI.getAttribute('target')
// const type = dI.getAttribute('type')

// Exercise 2 ------------------------------------------------------------------------------------
// <html>
// <body> 
//     <p id ='text'>DOM Attributes! Yeahhh !!</p>  
// </body> 
// </html> 

// Modify the style of the paragraph text (such as fontSize, fontFamily, color, etc. )through javascript  code

const para = document.getElementById("text")
para.style.fontSize = "x-large" 
para.style.fontFamily = "Impact,Charcoal,sans-serif";
para.style.color = "red "