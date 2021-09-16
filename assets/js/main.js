// header full
const openForm = () => {
  const header = document.querySelector(".header");
  const btnHeader = document.querySelector("#btn-header");
  const container = document.querySelector("#container");
  const main = document.querySelector(".main");

  container.classList.remove("flex-col");
  container.classList.add("flex-row");
  header.classList.remove("header__full");
  btnHeader.style.display = "none";
  main.style.display = "flex";
};

const closeForm = () => {
  const header = document.querySelector(".header");
  const btnHeader = document.querySelector("#btn-header");
  const container = document.querySelector("#container");
  const main = document.querySelector(".main");

  container.classList.add("flex-col");
  header.classList.add("header__full");
  btnHeader.style.display = "inline-block";
  main.style.display = "none";
};
