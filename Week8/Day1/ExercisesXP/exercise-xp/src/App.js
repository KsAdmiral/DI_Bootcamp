import React from "react";
import { UserFavoriteColors } from "./UserFavoriteColors";
import Red from "./Exercise4";

// Exercise 1 : No JSX ---------------------------------------------------------------
// Instructions
// Create an element without JSX and render it. The element should be an <h1> with the content “I do not use JSX”

// function App() {
//   return <h1>I do not use JSX</h1>;
// }

// export default App;

// Exercise 2: With JSX ---------------------------------------------------------------
// Instructions
// Display a “Hello World!” message on the page.
// Create a constant variable with JSX const myelement = <h1>I Love JSX!</h1>;, and render it on the page.
// Create a constant variable named sum, which value is 5 + 5. Render on the page, the following sentence "React is <sum> times better with JSX"

// function App() {
//   const sum = 5 + 5
//   return <h1>React is {sum} times better with JSX</h1>;
// }

// export default App;

// Exercise 3 : Object  ---------------------------------------------------------------
// Instructions
// Using the following object:
const user = {
  firstName: "Bob",
  lastName: "Dylan",
  favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
};
// In the React App, render the first name and the last name of the user in two <h3>.
// In a separate Javascript file, create a new Component called UserFavoriteColors. Use props to pass the fav_animals array to the UserFavoriteColors component.
// In the UserFavoriteColors component, use the map function to create a new array of <li>‘s.
// Each <li> corresponds to one animal from the fav_animals array.
// Display the <li>‘s. Tip : You can use the second parameter of the map function as a key to uniquely identify each HTML item

// function App() {
//   return (
//     <>
//       <h3>{user.firstName}</h3>
//       <h3>{user.lastName}</h3>
//       <UserFavoriteColors favorites={user.favAnimals} />
//     </>
//   );
// }
// export default App;

// Exercise 4 : HTML Tags In React ---------------------------------------------------------------
// Instructions
// PART I:
// In a separate Javascript file, create a new Component called Exercise4 that contains some HTML tags.
// create a <h1> tag and set its color to red, and the background color to lightblue.
// create a paragraph, a link, a form, an image and a list.
// Import Exercise4 to the App.js file and display it.
// Expected Output:(without the grey border)

function App() {
  return (
    <>
      <Red />;
    </>
  );
}
export default App;

// PART II:
// Add the below object to the component Exercise4. Use this object to style the <h1>.
// const style_header = {
//   color: "white",
//   backgroundColor: "DodgerBlue",
//   padding: "10px",
//   fontFamily: "Arial"
// };

// PART III:
// Create a new css file named Exercise4.css and import it in your Exercise4 component.
// Add the following CSS properties to the CSS file, and apply them to the paragraph tag:
// .para {
//   background-color: #282c34;
//   color: white;
//   padding: 40px;
//   font-family: Arial;
//   text-align: center;
// }
