let cores=[];
let cursos=['Java','React','React Native'];
let listaCores=[['Vermelho'],['Laranja']];

cores.push('Azul');
cores.push('Rosa');
cores.push('Amarelo');
cores[1]='Branco';
cores.push(...listaCores);

cores.unshift('Preto');
cores.reverse();

for (let index = 0; index < cores.length; index++) {
    console.log(`${index} - ${cores[index]}`);
}