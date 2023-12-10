console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `Sao Paulo`;
// const rioDejaneiro = `Rio de janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de janeiro`,

);

listaDeDestinos.push(`Curitiba`) //adicionando um item na lista
console.log("Destinos Possiveis:");
//console.log(salvador, saoPaulo, rioDejaneiro);
console.log(listaDeDestinos);

listaDeDestinos.slice(1,1);
console.log(listaDeDestinos);


console.log(listaDeDestinos[1], listaDeDestinos[0]);
