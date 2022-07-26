const SELECT_DIA = document.getElementById('dia');
const SELECT_MES = document.getElementById('mes');
const SELECT_ANO = document.getElementById('ano');

for (let d = 1; d <= 31; d++) {
    SELECT_DIA.innerHTML += '<option>'+d+'</option>';
}

for (let m = 1; m <= 12; m++) {
    SELECT_MES.innerHTML += '<option>'+m+'</option>';
}

for (let a = 1900; a <= 2022; a++) {
    SELECT_ANO.innerHTML += '<option>'+a+'</option>';
}