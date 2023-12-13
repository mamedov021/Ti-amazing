const services = document.querySelector(".services");

fetch("https://db-ti-amazing.vercel.app/service")
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
           
             <a href="interyer.html">
              <button> 
             Daha ətraflı <i class="fa-solid fa-arrow-right-long"></i>
             </button></a>
            
          </div>
        </div>
      `;
    });
  })
  .catch((err) => {
    console.log(err);
  });

let jobs = document.querySelector(".jobs");
let job_url = "https://db-ti-amazing.vercel.app/jobs";
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
      console.log(info);
    });
  });



let portfolio = document.querySelector(".portfolio_container");
fetch("https://db-ti-amazing.vercel.app/portfolio")
  .then((res) => res.json())
  .then((data) => {
    data.forEach(({ id, img, name }) => {
      portfolio.innerHTML+= `
      <div class="content">
      
      <a href="./lorem.html?id=${id}">
        <img src="${img}" alt="">
      </a>
      <h4>${name}  ${id}</h4> 
  </div>
      `;
    });
  })
  .catch((err) => {
    console.log(err);
  });

let our_team = document.querySelector(".our_team");
let members = document.querySelector(".members");
fetch("https://db-ti-amazing.vercel.app/our_team")
  .then((res) => res.json())
  .then((data) => {
    data.forEach(({ img, name, prof }) => {
      members.innerHTML += `
    <div class="member">
               <div><div class="img-container"> <img src="${img}" alt=""></div>
                  <div class="info"> 
                    <h2 class="name">${name}</h2>
                    <h3 class="prof">${prof}</h3>
                  </div>
                </div>
            </div>
    `;
    });
  })
  .catch((err) => {
    console.log(err);
  });



  // let lorem_type= document.querySelector(".lorem_type");
  // fetch("http://localhost:3000/lorem")
  // .then((res)=>res.json())
  // .then((data) => {
  //   data.forEach(({img})=>{
  //     lorem_type.innerHTML+=`
  //     <img src="${img}"> `

  //   } )
  // })
  // .catch((err)=>{
  //   console.error(err)
  // })

  