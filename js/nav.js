let menu = document.querySelector(".menu");
  let bars_1 = document.querySelector(".bars_1");
  let bars_2 = document.querySelector(".bars_2");
  let bars_i = document.querySelector(".bars i");
  
  bars_1.addEventListener("click", () => {
    menu.classList.add("active");
    console.log("ok")
    bars_1.style.display="none"
    bars_2.style.display="block"

    // if (bars_i.classList.contains("fa-bars")) {
    //   bars_i.classList.replace("fa-bars", "fa-x");
    // } else {
    //   bars_i.classList.replace("fa-x", "fa-bars");
    // }
  });
bars_2.addEventListener("click", ()=>{
  menu.classList.remove("active")
  bars_1.style.display="block"
  bars_2.style.display="none"

  
}
)