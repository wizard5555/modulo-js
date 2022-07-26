const QUANTIDADE = document.getElementById('quantidade');
const CURSOS = document.getElementById('cursos');

let quantidade = 0;
let selecionados = [];

function selecionar(input) {
    
    if (input.checked === true) {
        //Adicionando o curso selecionado a lista de cursos
        selecionados.push(input.value);
        quantidade += 1;
    } else {
        selecionados = selecionados.filter(item => item !== input.value);
        quantidade -= 1;
    }

    //Atualizando o html a lista de selecionados
    CURSOS.innerHTML = selecionados.join(' - ');

    QUANTIDADE.innerHTML = quantidade;
}