const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const imgContainer=document.getElementById("img");

fetch(`https://db-ti-amazing.vercel.app/portfolio/${id}`)
  .then((res) => res.json())
  .then((data) => {
   console.log(data);
   data.images.map((dImg)=>{
    console.log(dImg);
    return(
      imgContainer.innerHTML+=`<img src="${dImg}" alt="">`
    )
   })

  })
  .catch((err) => {
    console.log(err);
  });
