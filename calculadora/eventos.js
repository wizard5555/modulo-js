const VISOR = document.getElementById('visor')

function selecionarNumero(numero) {
    if (VISOR.innerHTML == 0) {
       VISOR.innerHTML = numero;
    } else {
         // concatenando
        VISOR.innerHTML += numero;
    }
}

function limpar() {
    VISOR.innerHTML = 0;
}