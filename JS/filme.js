function listaFilme() {
    let data = {
        nome: document.getElementById('nome').value,
        id: document.getElementById('id').value,
        sinopse: document.getElementById('sinopse').value,
        classificação: document.getElementById('classificacao').value,
        dt_nascimento: document.getElementById('dt_estreia').value
    }
    axios.get('http://localhost:3001/api/v1/filme/:id', data)
    .then(res => alert("sucesso"))
}
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


const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = () => { 
  filterItem.onclick = (selectedItem) => { 
    if (selectedItem.target.classList.contains("item")) { 
      filterItem.querySelector(".active").classList.remove("active"); 
      selectedItem.target.classList.add("active"); 
      let filterName = selectedItem.target.getAttribute("data-name"); 
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); 
        if ((filterImges == filterName) || (filterName == "all")) {
          image.classList.remove("hide"); 
          image.classList.add("show"); 
        } else {
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); 
  }
}