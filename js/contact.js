let form = document.querySelector("form");
const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  
  let formData = new FormData(form);
  let data = Object.fromEntries(formData);

  if (data.fname && data.lname && data.email && data.tel) {
    alert("Your information has been sent!");

    fetch("https://db-ti-amazing.vercel.app/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((err) => console.error("Error:", err));

    form.reset();
  } else {
    alert("Ulduzlanmis xanalari doldurun!");
  }
}
