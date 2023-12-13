let portfolioData = [];
const portfolio = document.querySelector(".portfolio_container");
const btns = document.querySelectorAll('#btn')

btns.forEach((btn) => {
  btn.addEventListener("click", () => setDataUI(btn.value));
})

document.addEventListener("DOMContentLoaded", async () => {
  await fetchDataHandler();
 
  setDataUI();
});

async function fetchDataHandler() {
  try {
    const response = await fetch("https://db-ti-amazing.vercel.app/portfolio");
    const data = await response.json();
    portfolioData = data;
  } catch (error) {
    console.log(error);
  }
}

function setDataUI(filter) {
  console.log(filter);
  const filteredData = filter
    ? portfolioData.filter((port) => port.category === filter)
    : portfolioData;

  portfolio.innerHTML = "";  

  filteredData.forEach(({ id, img, name }) => {
    portfolio.innerHTML += `
      <div class="content">
          <a href="./lorem.html?id=${id}">
              <img src="${img}" alt="">
          </a>
          <h4>${name}  ${id}</h4> 
      </div>
      `;
  });
}
