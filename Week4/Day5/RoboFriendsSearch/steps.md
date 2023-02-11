# HTML

- navbar --> nav
- icon
- input
  ​
- section for the robots
  ​
  ​

# CSS

- navbar - flex - direction row
  ​
- section - grid - column 3 - row auto
  ​ - inside each robot - flex - direction column - align-items - justify content
  ​

# JAVASCRIPT

- form - event listener "input" -> callback function searchRobot
  ​
- **searchRobot** - filter only the robot that contain this word - transform input and the name of robot to lowercase - includes method to check if it contains the word x.includes("nic")
  x would be the text contained inside the div - depending on the result, we add to the div - display : none - display : block
  ​
  n -> input event will be fired
  ni -> input event will be fired
  nic -> input event will be fired
  ni -> input event will be fired
  n -> input event will be fired
  nothing -> input event will be fired
  ​
- **displayRobot** : IIFE - on the array given, we do a loop - for each robot - create div - give to each div a class - create img - 2 paragraphs - append on the section - _possibility_ : add a class to each element
  ​
  ​
  --- YOU CAN USE CLASSES IF YOU WANT
  ​
  class Game - method filter (method JS) - if you can want, take a look at static method - method displayRobot (method JS) - method createRobot (that will create instances from the ROBOT class) and append them on the page
  ​
  class Robot
- attribute image
- attribute name
- attribute email
- method :
  - method dropdown/modal shows more details
  - add more
