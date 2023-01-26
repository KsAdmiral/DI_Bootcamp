// Exercise 1
// You are the manager of the chocolate factory, in order to make your clients happy you will send them a gift depending on their quantity of chocolate box they ordered.

// Create a function named checkQuantityOrder, that takes one parameter, the quantity the user ordered.

// If the client ordered more between 5 and 10 boxes (included) console.log "Dear client, you won a bouquet of flowers"
// If the client ordered more between 10 and 20 boxes (included) console.log "Dear client, you won a bottle of wine"
// If the client ordered more than 20 boxes (included) console.log "Dear client, you won a trip to Paris"
// Call the function a few times,

// checkQuantityOrder(8);
// checkQuantityOrder(15);
// checkQuantityOrder(30);

// BONUS : add a parameter to the function, the name of the client. If you don't know the name of the client, call him/her "client"

// If the client ordered more between 5 and 10 boxes (included) console.log "Dear <name_client>, you won a bouquet of flowers"
// If the client ordered more between 10 and 20 boxes (included) console.log "Dear <name_client>, you won a bottle of wine"
// If the client ordered more than 20 boxes (included) console.log "Dear <name_client>, you won a trip to Paris"
// Call the function a few times,

// function checkQuantityOrder(quantity, nameUser = "client") {
//   if (quantity > 5 && quantity <= 10) {
//     console.log(`Dear ${nameUser}, you won a bouquet of flowers`);
//   } else if (quantity > 10 && quantity <= 20) {
//     console.log(`Dear ${nameUser}, you won a bottle of wine`);
//   } else if (quantity > 20) {
//     console.log(`Dear ${nameUser}, you won a trip to Paris`);
//   }
// }

// // checkQuantityOrder(8);
// // checkQuantityOrder(15);
// // checkQuantityOrder(30);
// checkQuantityOrder(8, "John");
// checkQuantityOrder(15);
// checkQuantityOrder(30, "David");

// Exercise 1
// 1. Create a structured HTML file linked to a JS file

// 2. Write a Javascript function that takes a parameter: myAge

// 3. In the function, console.log the age of my mum and my dad. My mum is twice my age, and my dad is 1.2 the age of my mum.

// 4. Call the function.

// function age(myAge) {
//   const momAge = myAge * 2;
//   console.log(`My mum age is ${momAge} and my dad age is ${momAge * 1.2}`);
// }
// age(20);

// Exercise 2
// 1. Create a structured HTML file linked to a JS file

// 2. Write a Javascript function that takes a parameter: myAge

// 3. In the function, return the age of my mum (my mum is twice my age)

// 4. Call the function

// 5. In the global scope, console.log the result of the function

// function age(myAge) {
//   let momAge = myAge * 2;
//   return momAge;
// }

// console.log(age(prompt("Your age")));

// AI
// // Create a function that takes a parameter "myAge"
// function getMumAge(myAge) {
//     // Return the age of my mum (my mum is twice my age)
//     return myAge * 2;
//   }

//   // Call the function
//   let myAge = prompt("Enter your age:");
//   let mumAge = getMumAge(myAge);

//   // Console.log the result
//   console.log("My mum's age is " + mumAge);

// Solution Exercise

function checkQuantityOrder(qtyUser) {
  if (qtyUser > 5 && qtyUser <= 10) {
    return `bouquet of flowers`;
  } else if (qtyUser > 10 && qtyUser <= 20) {
    return `bottle of wine`;
  } else if (qtyUser > 20) {
    return `trip to Paris`;
  }
}

function sendGift(qtyUser, nameUser = "client") {
  let gift = checkQuantityOrder(qtyUser);
  console.log(`Dear ${nameUser}, you won a ${gift}`);
}

sendGift(23, "John");
sendGift(7, "Tom");
sendGift(7);

// New Exercise
// Modify the function checkQuantityOrder, so that instead of console logging "Dear client, you won a ..." it will return the gift.
// Create a function sendGift, it retrieves the return value of the function checkQuantityOrder and console log "Dear client, you won a ..."
