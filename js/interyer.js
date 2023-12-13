

let swiper = new Swiper(".portfolio-swiper", {
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
  
  let design_info = document.querySelector(".design_info");
 
fetch("https://db-ti-amazing.vercel.app/sevices_type")
    .then((res) => res.json())
    .then((data) => {
        data.forEach(({ name, img, info }) => {
            design_info.innerHTML += `
     
            <div class="header">
                <hr> <h2> ${name}</h2>    <hr>
            </div>
            <div class="interyer_info">
                <img src="${img}" alt=""> 
                <div class="info"> ${info}</div>
            </div>
            `;
        });
    });


    console.log("salam")
