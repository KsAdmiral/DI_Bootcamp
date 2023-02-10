// Exercise 1 : Bird Class
// Instructions
// Analyze the code below, what will be the output?
class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}

const pet = new Flamingo();
// 1 - I'm pink. 🌸
// 2 - I'm a bird. 🦢
