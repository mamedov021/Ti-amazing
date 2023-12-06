let form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let formData = new FormData(form);
  let data =Object.fromEntries(formData);
  let jsonData = JSON.stringify(data);

  fetch("http://localhost:3000/post",{
    method : "POST",
    headers : {
        'Content-Type': 'application/json'
    },
    body:jsonData

 }).then(res=>res.json())
 .then(result=>console.log(result.data))
 .catch(err=>console.log(err))



}