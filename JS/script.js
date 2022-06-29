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

const filtroSeletor = document.querySelector("#seletor");
const filtroImg = document.querySelectorAll(".gallery .image");

    filtroSeletor.onchange = (selectedItem) => { //se o usuário clicar em filtroImg div
        console.log("las")
        let seletor = document.getElementById("seletor") //se o item selecionado pelo usuário tiver a classe .item
        let filtroName = seletor.options[seletor.selectedIndex].value; //obtendo o valor do nome de dados do item selecionado pelo usuário e armazenando em uma variável filtername
        console.log(filtroName)
        filtroImg.forEach((image) => {
            let filtroImges = image.getAttribute("data-name"); //obtendo o valor do nome dos dados da imagem
            //se o valor do nome de dados do item selecionado pelo usuário for igual ao valor do nome de dados das imagens
            //ou o valor do nome de dados do item selecionado pelo usuário é igual a "todos"
            if ((filtroImges == filtroName )) {
                console.log("entrou no if")
                image.classList.remove("hide"); //primeiro remove a classe hide da imagem
                image.classList.add("show"); //adiciona a classe show na imagem
            } else {
                image.classList.add("hide"); //adiciona ocultar classe na imagem
                image.classList.remove("show"); //remove a classe show da imagem
            }
        });
    }
/*Botao*/
function incrementValue(e) {
        e.preventDefault();
        var fieldName = $(e.target).data('field');
        var parent = $(e.target).closest('div');
        var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

        if (!isNaN(currentVal)) {
            parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
            parent.find('input[name=' + fieldName + ']').val(0);
        }
    }

    function decrementValue(e) {
        e.preventDefault();
        var fieldName = $(e.target).data('field');
        var parent = $(e.target).closest('div');
        var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

        if (!isNaN(currentVal) && currentVal > 0) {
            parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
            parent.find('input[name=' + fieldName + ']').val(0);
        }
    }

    $('.input-group').on('click', '.button-plus', function(e) {
        incrementValue(e);
    });

    $('.input-group').on('click', '.button-minus', function(e) {
        decrementValue(e);
    });
