let bebidas = [
    {
        nome: 'Heineken',
        descricao: 'Longneck 330ml',
        quantidade: 12
    },
    {
        nome: 'Jack Daniels',
        descricao: 'litro 1L',
        quantidade: 6
    },
    {
        nome: 'OldParr',
        descricao: 'garrafa 750ml',
        quantidade: 12
    },
    {
        nome: 'Heineken',
        descricao: 'garrafa 600ml',
        quantidade: 13
    },
    {
        nome: 'Campari',
        descricao: 'garrafa 1L',
        quantidade: 12
    },
    {
        nome: 'Vinho São Braz',
        descricao: 'garrafa 1L',
        quantidade: 10
    },
    {
        nome: 'Skol',
        descricao: 'buchudinha 330ml',
        quantidade: 12
    },
    {
        nome: 'Budweiser',
        descricao: 'Longneck 330ml',
        quantidade: 36
    },
    {
        nome: 'Budweiser',
        descricao: 'garrafa 600ml',
        quantidade: 36
    },
    {
        nome: 'Eisenbahn',
        descricao: 'Longneck 330ml',
        quantidade: 24
    },
    {
        nome: 'Eisenbahn',
        descricao: 'garrafa 600ml',
        quantidade: 24
    },
];

const TABELA = document.getElementById('tabela');

bebidas.forEach( function (cadaBebida) {
    TABELA.innerHTML += `
        <tr>
            <td>${cadaBebida.nome}</td>
            <td>${cadaBebida.descricao}</td>
            <td>${cadaBebida.quantidade}</td>
            <td>
                <button class="btn btn-warning btn-sm">Editar</button>
                <button class="btn btn-danger btn-sm">Excluir</button>
            </td>
        <tr>
    `; //Fecha a crase
});

const BUSCA = document.getElementById('busca');

BUSCA.addEventListener('keyup', function () {
    for (let i in TABELA.children) {
        let cadaLinha = TABELA.children[i];
    
        if (cadaLinha.innerHTML.includes(BUSCA.value) ) {
            cadaLinha.style.display = '';
        } else {
            cadaLinha.style.display = 'none';
        }
    }
})