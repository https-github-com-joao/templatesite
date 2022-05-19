function cadastraUsuario() {
    let data = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
        dt_nascimento: document.getElementById('dt_nascimento').value
    }
    axios.post('http://localhost:3001/api/v1/usuario', data)
    .then(res => {
        alert('cadastro realizado com sucesso.');
        document.location = 'login.html';
    })
    .catch(error => alert('ocorreu um error ao cadastrar'))
}

function login() {

    axios.post('http://localhost:3001/api/v1/usuario/login', data)
    .then(res => {
        localStorage.setItem('token', res.data.token)
        document.location = 'index.html';
    })
    .catch(error => alert(error.response.data.error))
}