console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de janeiro`,

);

const idadeComprador = 18;
const estaAcompanhado = false;
let temPassagemComprada = false;
const destino = "Salvador";

listaDeDestinos.push(`Curitiba`) //adicionando um item na lista
console.log("\n Destinos Possiveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0;
let destinoExiste = false;
while(contador<3){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe") 
        destinoExiste  = true;
        break;


    }
    contador += 1;
} 

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){ 
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}

for(let cont = 0 ; cont <3 ; cont++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        }
}
