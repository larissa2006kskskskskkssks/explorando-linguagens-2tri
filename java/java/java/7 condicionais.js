console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de janeiro`,

);

const idadeComprador = 16;
const estaAcompanhado = false;
const temPassagemComprada = true;

listaDeDestinos.push(`Curitiba`) //adicionando um item na lista
console.log("Destinos Possiveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhado == true) {
        console.log("Boa Viajem !!");
        listaDeDestinos.slice(1, 1); //removendo item
} else {

    console.log("nao e maior de idade e nao posso vender");
}

console.log("Embarque: \n\n") 
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
} 







console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);
