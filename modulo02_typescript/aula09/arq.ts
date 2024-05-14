function resumo(usuario: {nome: string, idade?: number}) {
    if(usuario.idade !== undefined){
        return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`; 
    } else {
        return `Olá ${usuario.nome}, tudo bem?`;
    }
}

// Implementação da função
let u = {
    nome: 'Pedro'
};
resumo(u);