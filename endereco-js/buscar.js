let enderecos = {
    60352100: {
        logradouro: 'Av Santos Dumont',
        bairro: 'Aldeota',
        cidade: 'FortalCity',
        uf: 'CE',
    },

    60352499: {
        logradouro: 'Rua Vicente Leite',
        bairro: 'Varjota',
        cidade: 'FortalCity',
        uf: 'CE',
    },

    60100100: {
        logradouro: 'Av Bezerra de Menezes',
        bairro: 'Parquelandia',
        cidade: 'FortalCity',
        uf: 'CE',
    },
}

CEP.addEventListener('blur', function () {
    let valor = CEP.value;

    LOGRADOURO.value = enderecos[valor].logradouro;
    BAIRRO.value = enderecos[valor].bairro;
    CIDADE.value = enderecos[valor].cidade;
    UF.value = enderecos[valor].uf;
})