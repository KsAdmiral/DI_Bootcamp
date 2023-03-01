const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  const body = {
    email: email,
    message: message,
  };

  fetch("/formData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => res.text())
    .then(res => displayResponse(res))
    .catch(err => console.error(err));
}

function displayResponse(text) {
  const li = document.createElement("li");
  li.innerText = text;
  const ul = document.getElementById("messages");
  ul.prepend(li);
}
