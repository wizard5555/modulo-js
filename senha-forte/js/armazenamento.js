function salvar() {
    let dados = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value
    };

    localStorage.setItem('usuarios', JSON.stringfy(dados));
}