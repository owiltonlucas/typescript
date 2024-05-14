function removerElemento(elemento: HTMLElement) {
    if(elemento.classList) {
        return;
    }

    elemento.remove();

}

removerElemento( document.getElementById('teste') );

//------------------------------------------------------------//
//------------------------------------------------------------//

type QualquerFuncao = () => void; // não espera nenhum tipo de retorno

const algo: QualquerFuncao = () => {
    return 'bla bla';
}

let retorno = algo();

const blabla = (): void => { // aqui, espera que o retorno seja void
    
}