const FORM = document.getElementById('form');

let dados = [
    'PHP',
    'Java',
    'Python',
    'Ruby',
    'Lua',
    'JavaScript',
    'GoLang'
]

dados.forEach(function (nome) {
    FORM.innerHTML += `
    <div class="form-switch">
        <input value="${nome}" onclick="selecionar(this)" id="${nome}" type="checkbox" class="form-check-input">
        <label for="${nome}" class="form-check-label">${nome}</label>
    </div>
    `;
});