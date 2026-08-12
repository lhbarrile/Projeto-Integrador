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