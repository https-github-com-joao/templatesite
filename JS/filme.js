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
