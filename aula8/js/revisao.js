
const empresas=[
    {nome:'Samsung',valor:500,anoDeCriacao:1998},
    {nome:'Apple',valor:1500,anoDeCriacao:1996},
    {nome:'LG',valor:2800,anoDeCriacao:2006},
    {nome:'Facebook',valor:55500,anoDeCriacao:2008},
    {nome:'Instagram',valor:68000,anoDeCriacao:2010}
];

const mapEmpresas = empresas.map(emp=>emp.nome);
const filtroEmpresas = empresas.filter(emp=>emp.anoDeCriacao>=2008);
console.log(filtroEmpresas);





