const meuFormulario = document.getElementById('meuFormulario');
const username = document.getElementById('username');
const useremail = document.getElementById('useremail');
const userpassword = document.getElementById('userpassword');

function validarUserName() {
    if (username.value.length >= 3) {
        username.classList.remove('is-invalid');
        username.classList.add('is-valid');
    } else {
        username.classList.remove('is-valid');
        username.classList.add('is-invalid');
    }
}

function validarUserEmail() {
    if (useremail.value.includes('@')) {
        useremail.classList.remove('is-invalid');
        useremail.classList.add('is-valid');
    } else {
        useremail.classList.remove('is-valid');
        useremail.classList.add('is-invalid');
    }
}

function validarUserPassword() {
    if (userpassword.value.length >= 6) {
        userpassword.classList.remove('is-invalid');
        userpassword.classList.add('is-valid');
    } else {
        userpassword.classList.remove('is-valid');
        userpassword.classList.add('is-invalid');
    }
}

meuFormulario.addEventListener('submit', (e) => {
    e.preventDefault();
    validarUserName();
    validarUserEmail();
    validarUserPassword();

    if (meuFormulario.querySelectorAll('.is-invalid').length === 0) {
        alert('Registro realizado com sucesso!');
    }
});