const itensPedido=[
{num:123,status:'enviado',subTotal:300},
{num:123,status:'enviado',subTotal:450},
{num:123,status:'enviado',subTotal:100},
{num:123,status:'enviado',subTotal:120}
];
const totalGeral = itensPedido.reduce((acum, item)=> acum +item.subTotal,0);
console.log(`Total do Pedido: ${totalGeral}`);