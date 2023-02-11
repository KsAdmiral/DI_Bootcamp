// Instructions
// PART I : The Website
// The webpage displays Cards of Robots with their respective image and information.

// robot project #1

// 2. You have to create the cards by using the values from the array of objects provided in the ASSETS below.

// PART II : The Filter
// When you search for a specific name in the search box, the webpage filters the cards displayed. For example is you write “nic” in the search box, you will display the robot which name contains “nic”, which means only one robot: “Nicholas”.
// robot project #2

// 2. Display the cards in the DOM, using DOM elements and selectors, and filter them with the search box.

// PART II : The Style
// You can use your own images or use this website to generate a new Robot Image.

// Check out those links to generate the correct font
// cdnfonts
// dafont

// You can use those images for the background (click righ on the images below, and “Save image as…” )
// background imagebackground image

// Assets
const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
];

const inputUsername = document.getElementById("username");
const container = document.getElementById("container");

function updateRobots(e) {
  const { value } = e.target;
  const newList = robots.filter(robot =>
    robot.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    eraseContainer();
    displayRobot(newList);
  }
  
  function eraseContainer() {
    container.innerHTML = "";
  }
  
  function displayRobot(robots) {
    robots.forEach(robot => {
      //destructure
      const { name, email, image } = robot;
      //create elements
      const card = document.createElement("div");
      const imageRobot = document.createElement("img");
      const nameP = document.createElement("h4");
      const emailP = document.createElement("p");
      // create values
      const nameValue = document.createTextNode(name);
      const emailValue = document.createTextNode(email);
      nameP.appendChild(nameValue);
      emailP.appendChild(emailValue);
      imageRobot.src = image;
      // imageRobot.setAttribute("src",image);
      
      card.classList.add("cardRobot");
      card.append(imageRobot, nameP, emailP);
      container.appendChild(card);
  });
}

displayRobot(robots);
inputUsername.addEventListener("keyup", updateRobots);
