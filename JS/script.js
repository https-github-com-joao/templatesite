//Barra de navegação
const menuBtn = document.querySelector(".menu-icon span");
const searchIconBtn = document.querySelector(".search-icon");
const searchBtn = document.querySelector(".btn-search");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  searchIconBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
}
searchIconBtn.onclick = () => {
  form.classList.add("active");
  searchIconBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
searchBtn.onclick = () => {
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
