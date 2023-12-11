let form = document.querySelector("form");
const submitBtn = document.querySelector("#submit")
submitBtn.addEventListener("click", handleSubmit);

function handleSubmit(event) {

  alert("Your information has been sent!")
  event.preventDefault();
  let formData = new FormData(form);
  let data = Object.fromEntries(formData);
  // let jsonData = JSON.stringify(data);

  fetch("http://localhost:3000/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((result) => console.log(result))
    .catch((err) => console.error("Error:", err));
}
