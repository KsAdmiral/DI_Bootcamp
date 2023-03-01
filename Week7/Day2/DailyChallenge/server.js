const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/form", express.static(__dirname+'/public'));
app.get("/aboutMe/:hobby", handleHobby);
app.get("/pic", displayPic);
app.post("/formData", handlePost);
app.listen(PORT);

function displayPic(req, res) {
  res.send(
    "<img src='https://wallpapers.com/images/featured/en3dnh2zi84sgt3t.jpg'/>"
  );
}

function handleHobby(req, res) {
  const hobby = req.params.hobby;
  if (!isOnlyLetters(hobby)) return res.status(404).send("Only letters");
  res.send(`Nice ${hobby}`);
}

function isOnlyLetters(str) {
  const noNumbersRegex = /^[A-Za-z]+$/;
  return noNumbersRegex.test(str);
}

function handlePost(req, res) {
  const email = req.body.email;
  const message = req.body.message;
  res.send(`${email} sent a message: ${message}`);
}
