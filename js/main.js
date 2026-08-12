function verSenha() {
    const password = document.getElementById('password');
    const icon = document.getElementById('icon');

    if (password.type === 'password') {
        password.type = 'text';
        icon.src = "../assets/img/show.png";
    } else {
        password.type = 'password';
        icon.src = "../assets/img/hide.png";
    }
}

function verSenhaCadastro() {
    const password = document.getElementById('password-cadastro');
    const icon = document.getElementById('icon-cadastro');

    if (password.type === 'password') {
        password.type = 'text';
        icon.src = "../assets/img/show.png";
    } else {
        password.type = 'password';
        icon.src = "../assets/img/hide.png";
    }
}

function verSenhaConfirma() {
    const password = document.getElementById('password-confirma');
    const icon = document.getElementById('icon-confirma');

    if (password.type === 'password') {
        password.type = 'text';
        icon.src = "../assets/img/show.png";
    } else {
        password.type = 'password';
        icon.src = "../assets/img/hide.png";
    }
}

function mostrarTela(id) {
    document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
    document.getElementById(id).classList.add('ativa');
}