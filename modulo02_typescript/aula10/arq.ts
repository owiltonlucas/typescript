function mostrarIdade(idade: string | number){
    if(typeof idade === 'string'){
        console.log( idade.toUpperCase() );
    } else {
        console.log( idade );
    }
}

mostrarIdade(90);
mostrarIdade('90');