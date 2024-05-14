type NomeCompleto = string;

let nome: NomeCompleto = 'Wilton';

//------------------------------------------//

type Idade = string | number;

let idade: Idade = 90;

function mostrarIdade(i: Idade): Idade {
    return i;
}

//------------------------------------------//

function resumo(usuario: {nome: string, idade:number}) {
    return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`;
}

resumo({
    nome: 'Wilton',
    idade: 90
});

//COM A IDEIA DA AULA (1ª forma), ABAIXO://

type User = {
    nome: string,
    idade: number
};

function resumo(usuario: User) {
    return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`;
}

resumo({
    nome: 'Wilton',
    idade: 90
});

//COM A IDEIA DA AULA (2ª forma), ABAIXO://

/*type User = {
    nome: string,
    idade: number
};
*/

interface User {
    nome: string;
    idade: number;
}

function resumo(usuario: User) {
    return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`;
}

resumo({
    nome: 'Wilton',
    idade: 90
});

//Exemplo da diferença entre as duas formas explicadas na aula, abaixo://

interface User {
    nome: string
}

interface User {
    idade: number
}

function resumo(usuario: User) {
    return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`;
}

resumo({
    nome: 'Wilton',
    idade: 90
});