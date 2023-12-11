let form = document.querySelector('form');
let submitBtn = document.querySelector("#submit");
submitBtn.addEventListener('click', handleSubmit);

function handleSubmit(e) {
    alert("Your information has been sent!")
    e.preventDefault();
    let formData = new FormData(form);
    let data = Object.fromEntries(formData);
    let jsonData = JSON.stringify(data);

    fetch("http://localhost:3000/connect_tel", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: jsonData
    })
    .then((res) => {
        console.log(res); // Log the response here
        return res.json();
    })
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
}
