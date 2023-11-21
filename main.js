var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

const services = document.querySelector(".services")


fetch("http://localhost:3000/service")
  .then((res) => res.json())
  .then((data) => {
    data.forEach(({id,header,img,info}) =>{
      services.innerHTML += `
        <div class="part">
         <div class="image">
          <img src=${img} alt="img" /> 
        </div>
          <div class="text">
            <h2 id="part">${header}</h2>
            <p>${info}</p>
            <button>
              Daha ətraflı <i class="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      `
    })
  })
  .catch((err) => {
    console.log(err);
  })
