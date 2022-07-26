const VISOR = document.getElementById('visor')

let memoriaAuxiliar = 0;
let operacao = false;

function selecionarNumero(numero) {

    if (VISOR.innerHTML.length >= 9) {
        return;
    }

    if (memoriaAuxiliar != 0) {

    }

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

function somar() {
    VISOR
    memoriaAuxiliar = VISOR.innerHTML;
}