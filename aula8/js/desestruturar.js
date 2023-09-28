const usuario = {
  nome: 'Jorge',
  sobrenome: "Antônio",
  idade: 27,
  telefone: 2234-1009,
  endereco: {
    rua: "Rua teste 110",
    numero: 139,
  },
};

const primeiroNome = usuario.nome ?? 'Não informado';

console.log(primeiroNome);

//console.log(usuario);
function mostrarIdade({endereco}){
    return endereco;
}

//const {nome, ...rest} = usuario;
const  novoUsuario={...usuario.endereco,rua:"Henrique Cunha"};
//console.log(novoUsuario);

const {nome,sobrenome}= usuario;
//console.log(nome, sobrenome);

let numeros = [10,100,90,12,40];
let[a, b, num]= numeros;
//console.log(num);