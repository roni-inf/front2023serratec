const soma = (a,b)=> a+b;

const calcular = (a,b, callback)=>{
    return callback(a,b);
}

const resultado = calcular(100,80, soma);
console.log(resultado);

