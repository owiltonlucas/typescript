// DOIS EXEMPLOS DA AULA 14 ABAIXO FAZENDO A MESMA COISA //

function fazerRequisicao(url: string, method: 'GET' | 'POST') {
    // ----------
}

type Methods = 'GET' | 'POST';

let url = "https://gogle.com.br";
let method: Methods = 'GET';
fazerRequisicao(url, method);

//-------------------------------------------------------------------------/

function fazerRequisicao2(url: string, method: 'GET' | 'POST') {
    // ----------
}

type RequestDetails = {
    url: string,
    method: 'GET' | 'POST'
};

let req: RequestDetails = {
    url: 'https://gogle.com.br',
    method: 'GET'
};

fazerRequisicao2(req.url, req.method);