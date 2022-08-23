const TABELA_ALUNOS = document.getElementById('tabela-alunos');
// const TABELA_ALUNOS = document.getElementById('#tabela-alunos');
// const TABELA_ALUNOS = document.getElementById('[id="tabela-alunos"]');

const CONTEUDO_NOVO = document.getElementById('conteudo-novo');
const CONTEUDO_LISTAR = document.getElementById('conteudo-listar');

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
   if (conteudo === 'listar') {
    CONTEUDO_LISTAR.style.display = '';
    // CONTEUDO_NOVO.style.display = 'none';
    CONTEUDO_NOVO.classList.remove('form-animar');
    window.history.pushState('null', 'null', '#listar');
   }

   if (conteudo === 'novo') {
    CONTEUDO_LISTAR.style.display = 'none';
    CONTEUDO_NOVO.classList.add('form-animar');
    window.history.pushState(null, null, '#novo');
   }
}


