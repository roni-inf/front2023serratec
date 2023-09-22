let a = 100;
let b = "100";
if (a === b) {
  console.log("iguais");
} else {
  console.log("diferentes");
}

console.log(a === b?"iguais":"diferentes");

let c = 1;
let d = true;
if (c === d) {
  console.log("iguais");
} else {
  console.log("diferentes");
}

let media=80;
console.log(media>90?"otimo":media>70?"bom":media>50?"regular":"ruim");

let situacaoPedido = "Pago";
let statusEnvio= "Entregue";

let resposta = (situacaoPedido==="Pago" && statusEnvio==="Entregue"?"Finalizado":"Em Andamento");

console.log("O pedido está em:", resposta);
console.log(`O pedido está em: ${resposta}`);