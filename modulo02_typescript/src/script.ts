let nome: string = 'Wilton';

let idade: number = 90;

// é recomendável fazer o mínimo de tipagem. No exemplo acima, poderia tirar o number e ainda funcionaria.

let programador: boolean = true;

//----------------------------------------------------------------------------//
//---AULA 03 abaixo---//

let nomes: string[] = ['wilton', 'fulano1', 'fulano2', 'fulano3'];

let idades: number[] = [90, 23, 35, 67];
//OU: let idades: Array<number> = [90, 23, 35, 67];

let numeros: number[] = [15, 23, 90, 11];

numeros.push(90);


//---AULA 04---//
let coisas: any = ['wilton', 'fulano', 'pedro', 'gabriel'];

coisas.push(556); 

// O any permite colocar qualquer valor na variável//
// Outro exemplo abaixo://

let aleatorio: any = ['wilton', 90, 'eduarda'];
aleatorio.push(true);