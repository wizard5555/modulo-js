function selecionarNumero(numero) {
    if (document.getElementById('visor').innerHTML == 0) {
        document.getElementById('visor').innerHTML = numero;
    } else {
         // concatenando
        document.getElementById('visor').innerHTML += numero;
    }
   
}

