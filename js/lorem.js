const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`https://db-ti-amazing.vercel.app/portfolio/${id}`)
  .then((res) => res.json())
  .then((data) => {
   // console.log(data);
    let images = data.images.map((imageData) => {
      return `<img src="${imageData.img}" alt="">`; 
      
    }); 
    document.getElementById("img").innerHTML += images;
  })
  .catch((err) => {
    console.log(err);
  });
