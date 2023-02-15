// EXERCISE 1 ----------------------------------------------------------------------------------
// Create a function that takes in a single parameter and returns a new promise.
// Using setTimeout, after 5000 milliseconds, the promise will either resolve or reject.
// If the input is a string, the promise resolves with that same string uppercased.
// If the input is anything but a string it rejects with that same input.
// Use then to repeat the string twice use catch to console.log the error finally call a function that console.log ("congratulation")

// function single(a) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a === "string") {
//         resolve(a.toUpperCase());
//       } else {
//         reject(a);
//       }
//     }, 5000);
//   });
// }

// single("hello")
//   .then(resOne => {
//     // console.log(resOne.repeat(2));
//     console.log("IN THE THEN");
//     console.log(resOne);
//     return resOne;
//   })
//   .then(resTwo => {
//     console.log("IN THE SECOND THEN");
//     console.log(resTwo);
//   })
//   .catch(err => {
//     console.log("THE ERROR IN THE CATCH IS");
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("congratulation");
//   });

// Exercise : use fetch
// PART I
// Use fetch to fetch one 1 random gif with the category of "sun", then append the gif to the page. Use this documentation https://developers.giphy.com/docs/api/endpoint#random https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Part II
// Instead of having a fixed category of gif. First, fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1 You will then fetch 1 random gif, depending on the word. The word will be the gif category Display the word and the gif on the page
// For example: you will fetch the random-word-api. This api will return a random word - for example : "happy" Using this word as a category, you will fetch one random gif with the category of "happy" and display it on the page
// Part III
// If the giphy API doesn't find a gif (because the word can be strange) - display a gif that says "404 ERROR"

function randomWord() {
  fetch("http://random-word-api.herokuapp.com/word?number=1")
    .then(resOne => {
      if (resOne.status !== 200) {
        throw new Error("Couldnt find a word");
      }
      return resOne.json();
    })
    .then(resTwo => {
      fetchTheFetch(resTwo);
    })
    .catch(err => {
      const errorGif =
        "https://media.giphy.com/media/rZYf7RpRvRWOaMCCZz/giphy.gif";
      displayGif(`ERROR WORD NOT FOUND ${err}`, errorGif);
    });
}

function fetchTheFetch(word) {
  fetch(
    `https://api.giphy.com/v1/gifs/random?tag=${word}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
  )
    .then(resOne => {
      if (resOne.status !== 200) {
        throw new Error("Couldnt find a word");
      }
      return resOne.json();
    })
    .then(resTwo => {
      if (resTwo.data.length === 0) {
        throw new Error("Couldnt find a gif");
      } else {
        displayGif(resTwo.data.images.original.url);
      }
    })
    .catch(error => {
      const errorGif =
        "https://media.giphy.com/media/rZYf7RpRvRWOaMCCZz/giphy.gif";
      displayGif(`ERROR WORD NOT FOUND ${error}`, errorGif);
    });
}

function displayGif(gif) {
  const section = document.getElementById("container");
  const img = document.createElement("img");
  img.setAttribute("src", gif);
  //   img.src = gif
  section.appendChild(img);
}

randomWord();
