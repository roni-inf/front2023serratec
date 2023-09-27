const pessoas=[
  {nome:"José",idade:20,cidade:"São Paulo"},
  {nome:"Maria",idade:30,cidade:"São Paulo"},
  {nome:"Ana",idade:45,cidade:"Petrópolis"},
  {nome:"Carlos",idade:60,cidade:"Petrópolis"}
];
const filtro = pessoas.filter((pessoa)=>pessoa.cidade==="São Paulo" && pessoa.idade>25);
const filtroNome = pessoas.filter(pessoa=>pessoa.nome.includes('na'));
//console.log(filtroNome);

const nums = [3, 8, 10, 25, 40, 100];
//const filtroNums = nums.filter(num => num >= 20);
const filtroNums = nums.find(num => num >= 20);
//console.log(filtroNums);
//console.log(filtroNums);
const findPar = nums.find(num=>num %2 ===0 );
