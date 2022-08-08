const SENHA = document.getElementById('senha');
const P_SENHA = document.getElementById('senha-tamanho');

function validarSenha() {
    if (SENHA.value.length < 8 ) {
       P_SENHA.innerHTML = 'Senha inválida!';
    }
    if (SENHA.value.length = 8 ) {
        P_SENHA.innerHTML = 'Senha fraca!';   
    }
    if (true === isNaN(SENHA.value.length > 8 && SENHA.value.length < 12)) {
        P_SENHA.innerHTML = 'Senha média!';
    } else {
        P_SENHA.innerHTML = 'Senha forte!!!';
    }
}