function validarSessao() {

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var nomeusuario = document.getElementById("nomeusuario");

    if (email != null && nome != null) {
        nomeusuario.innerHTML = nome;

    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}



