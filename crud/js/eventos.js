const TABELA_ALUNOS = document.getElementById('tabela-alunos');
// const TABELA_ALUNOS = document.getElementById('#tabela-alunos');
// const TABELA_ALUNOS = document.getElementById('[id="tabela-alunos"]');

alunos.map(function (cadaAluno) {
    TABELA_ALUNOS.innerHTML += `
    <tr>
        <td>${cadaAluno.nome}</td>
        <td>${cadaAluno.email}</td>
        <td>${cadaAluno.telefone}</td>
        <td>${cadaAluno.cidade}</td>
        <td>
            <button class="btn btn-warning btn-sm">Editar</button>
            <button class="btn btn-danger btn-sm">Excluir</button>
    </tr>
    `;
});

function alterarConteudo(conteudo) {
   if (conteudo == 'listar') {
    //mostrar tabela
    // esconder form
    window.location.pathname += '?listar';
   }

   if (conteudo == 'novo') {
    // mostrar form
    // esconder tabela
    window.location.pathname += '?novo' ;
   }
}


