function cadastraUsuario() {
    let data = {
        nome: document.getElementById('nome'),
        cpf: document.getElementById('cpf'),
        email: document.getElementById('email'),
        senha: document.getElementById('senha'),
        dt_nascimento: document.getElementById('dt_nascimento')
    }
    axios.post('http://localhost:3001/api/v1/usuario', data, headers())
    .then(res => {
        alert('cadastro realizado com sucesso.');
        document.location = 'login.html';
    })
    .catch(error => alert('ocorreu um error ao cadastrar'))
}

function login() {

    axios.post('http://localhost:3001/api/v1/usuario/login', data, headers())
    .then(res => {
        localStorage.setItem('token', res.data.token)
        document.location = 'index.html';
    })
    .catch(error => alert(error.response.data.error))
}