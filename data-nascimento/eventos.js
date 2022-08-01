const SELECT_DIA = document.getElementById('dia');
const SELECT_MES = document.getElementById('mes');
const SELECT_ANO = document.getElementById('ano');

for (let d = 1; d <= 31; d++) {
    SELECT_DIA.innerHTML += '<option>'+d+'</option>';
}

let meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
]

for (let m = 0; m <= 11; m++) {
    SELECT_MES.innerHTML += `<option>${meses[m]}</option>`;
}

for (let a = 1900; a <= 2022; a++) {
    SELECT_ANO.innerHTML += '<option>'+a+'</option>';
}

