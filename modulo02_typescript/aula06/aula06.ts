/*function firstLetterUpperCase(name: string): string {
    let firstletter = name.charAt(0).toUpperCase();
    return firstletter+name.substring(1);
}

let nome = firstLetterUpperCase('wilton');
//OU: let nome: string = firstLetterUpperCase('wilton');//
*/

//ABAIXO, exemplo errado se forem dois números. Mas correto se for pra concatenar duas strings

function somar(n1, n2) {
    return n1 + n2;
}
let alguma = somar('wilton', 'lucas');

//ABAIXO, jeito correto para dois npumeros:

function operacao_soma(n1: number, n2: number): number { //é bom tipar as entradas da função quando se tipa o retorno
    return n1 + n2;
}

let alguma_coisa = operacao_soma(90, 15);