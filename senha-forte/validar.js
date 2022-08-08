const SENHA = document.getElementById('senha');
const P_SENHA = document.getElementById('senha-tamanho');
const DIV_PROGRESSO = document.getElementById('senha-progresso');

function alterarFeedback(frase, largura, cor) {
    P_SENHA.innerHTML = frase;
    DIV_PROGRESSO.style.width = largura;
    DIV_PROGRESSO.style.backgroundColor = cor;
}

function validarSenha() {
    if (SENHA.value.length < 8 ) {
    //    P_SENHA.innerHTML = 'Senha inválida!';
    //    DIV_PROGRESSO.style.width = '5%';
    //    DIV_PROGRESSO.style.backgroundColor = 'red';
        alterarFeedback('Senha inválida', '1%', 'red');
        return;
    }

    if (SENHA.value.length >= 8 ) {
        P_SENHA.innerHTML = 'Senha fraca!';
        DIV_PROGRESSO.style.width = '30%';
        DIV_PROGRESSO.style.backgroundColor = 'red'; 
    }

    if (true === isNaN(SENHA.value)) {
        P_SENHA.innerHTML = 'Senha média!';
        DIV_PROGRESSO.style.width = '70%';
        DIV_PROGRESSO.style.backgroundColor = 'yellow';
    }

    let regex = /\W/; //Pegar os nao alfanumericos
    if (true === regex.test(SENHA.value)) {
        P_SENHA.innerHTML = 'Senha forte!';
        DIV_PROGRESSO.style.width = '100%';
        DIV_PROGRESSO.style.backgroundColor = 'green';
    }
}