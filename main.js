var swiper = new Swiper(".mySwiper2", {
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".portfolio-swiper", {
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 4,
    slideShadows: true,
  },
  loop: true,
     
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
 
});
const services = document.querySelector(".services");

fetch("http://localhost:3000/service")
  .then((res) => res.json())
  .then((data) => {
    data.forEach(({ header, img, info }) => {
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
      `;
    });
  })
  .catch((err) => {
    console.log(err);
  });

let jobs = document.querySelector(".jobs");
let job_url = "http://localhost:3000/jobs";
fetch(job_url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach(({ id, name, info }) => {
      jobs.innerHTML += `
    <div class="job">
     <div class="id">${id}</div>
     <hr>
     <div class="name">${name}</div>
     <div class="info">${info}</div> 
    </div>
  `;
      //console.log(info);
    });
  })
  .catch((err) => {
    console.log(err);
  });

  let menu = document.querySelector('.menu');
  let bars = document.querySelector('.bars');
  bars.addEventListener("click", ()=> {
    menu.style.display = "none"; 
    console.log("ok")
  })