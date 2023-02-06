// Instructions
// Using this object :

let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    payed: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};
// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.
const displayGroceries = (() =>
  groceries["fruits"].forEach(fruit => console.log(fruit)))();
// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// Primitive value does change
// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// Yes, its a reference value change in heap (object), they both point to it
// Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?
// Same as before
// Invoke the cloneGroceries function.

const cloneGroceries = (() => {
  const user = client;
  client = "Betty";
  console.log(client);
  const shopping = groceries;
  shopping["totalPrice"] = "35$";
  shopping["other"]["payed"] = false;
  console.log(shopping);
  console.log(groceries);
})();
