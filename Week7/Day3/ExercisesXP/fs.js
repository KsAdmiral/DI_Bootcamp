const fs = require("fs");

fs.readFile("./hey.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

fs.writeFile("data.txt", "blabla", err => {
  if (err) {
    console.error(err);
  }
});

fs.appendFile("data.txt", "\nBuy orange juice", err => {
  if (err) {
    console.error(err);
  }
});

fs.unlink("data.txt", err => {
  if (err) {
    console.error(err);
  }
});
