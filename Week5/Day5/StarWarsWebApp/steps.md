# HTML

- container
- button
- title
  ​

# CSS

- flex to have all in the middle of the page
  ​

# JS

​
API: https://www.swapi.tech/api/people/3
API: https://www.swapi.tech/api/people/<random number>
​

- button add event listener of click
- when the btn is clicked we call the function retrieveData()


# REQUIREMENTS

# USE ASYNC AWAIT

# OBJECT DESTRUCTURING/ARRAY DESTRUCTURING

​

## function async retrieveData()

- call the function createRandomNumber() and retrieve the number
- `await fetch(url)`
- check the status, if everything is ok :
  - use the `json()` that we need to `await`
  - we retrieve the data about the person
- call the retrieveWorld()
- call the displayData()
  ​

## function retrieveWorld() (look like this: "https://www.swapi.tech/api/planets/8")

--> fetch the homeworld api
​

## function createRandomNumber()

--> random number 1 and 83
​

## function displayData()

--> append the data on the page
​
​
for the progress spin: use the icon for font awesome
after we click, we make the icon appear
once the date is displayed, we make icon disappear
