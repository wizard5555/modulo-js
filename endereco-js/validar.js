const CEP = document.getElementById('cep');
const LOGRADOURO = document.getElementById('logradouro');

function validar() {
    // Interromper o envio dos dados
    event.preventDefault();

    if (CEP.value.length !== 8) {
        //CEP.style.border = '1px solid red';
        CEP.classList.remove('is-valid');
        CEP.classList.add('is-invalid');
    } else {
        //CEP.style.border = '1px solid green';
        CEP.classList.remove('is-invalid');
        CEP.classList.add('is-valid');
    }

    if (LOGRADOURO.value.trim().length < 3 ) {
        //LOGRADOURO.style.border = '1px solid red';
        LOGRADOURO.classList.remove('is-invalid');
        LOGRADOURO.classList.add('is-valid');
    } else {
        //LOGRADOURO.style.border = '1px solid green';
        LOGRADOURO.classList.remove('is-invalid');
        LOGRADOURO.classList.add('is-valid');
    }
}