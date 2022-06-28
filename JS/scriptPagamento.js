function pagamento() {
    let data = {
        nome_cartao: document.getElementById('nome_cartao').value,
        num_cartao: document.getElementById('num_cartao').value,
        validade: document.getElementById('validade').value,
        cvc: document.getElementById('cvc').value,
        cpf: document.getElementById('cpf').value
    }
    axios.post('http://localhost:3001/api/v1/pagamento', data)
        .then(res => {
            document.location = 'index.html';
        })
        .catch(error => swal('Error de Pagamento:', 'ocorreu um error ao efetuar o pagamento', 'error'))
}