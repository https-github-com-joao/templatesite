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
        document.location = 'login.html';
    })
    .catch(error => {
        swal('Sucesso de cadastro:', 'Usuario cadastro com sucesso', 'success')
        document.location = 'login.html';
    })
}

function login() {
    let email = document.getElementById("email");
    let senha = document.getElementById("senha");

    if (email.value == "testeI@gmail.com" && senha.value == "1234567") {
        localStorage.setItem("acesso", true);
        
        window.location.href = "index.html";
    } else {
        swal("Error em realizar o login:", "Usuario ou senha invalidos!", "error");
    }
}