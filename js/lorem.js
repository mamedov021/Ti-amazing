const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`http://localhost:3000/portfolio/images/${id}`)
  .then((res) => res.json())
  .then((data) => {
    let images = data.images.map((imageData) => {
      return `<img src="${imageData.img}" alt="">`; 
      
    });
     //`<img src=${data.img} alt="">`
    document.getElementById("img").innerHTML += images;
  })
  .catch((err) => {
    console.log(err);
  });
