// No exemplo abaixo, só pode ter, literalmente, 'wilton', não pode outro nome

let nome: 'wilton' = 'wilton';

nome = 'wilton';

nome = 'pedro';

//Outro exemplo abaixo usando o const://

const pessoa: string = 'wilton';

pessoa = 'pedro';

//Casos "úteis" de types literais. Atribuindo left, right ou center, não permitindo o 'blabla'//

function mostrarTexto(
    texto: string,
    alinhamento: 'left' | 'right' | 'center'
) {
    return `<div style="text-align: ${alinhamento}">${texto}</div>`;
}

mostrarTexto('Wilton', 'left');
mostrarTexto('Wilton', 'right');
mostrarTexto('Wilton', 'blabla');

//----------------------------------------------------------//
type VerdadeiroOuFalso = true | false;

function temNome(nome: string):  VerdadeiroOuFalso{
    if(nome !== ''){
        return true;
    } else {
        return false;
    }
}

//----------------------------------------------------------//

type Opcoes = {
    width: number,
    height: number
}

function configurar(props: Opcoes | 'auto') {

}

configurar({width: 100, height: 200});
configurar('auto');
configurar('automatico');