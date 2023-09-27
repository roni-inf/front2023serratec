const saudacao = (nome) => alert(`Olá ${nome}`);

const entradaUsuario= (callback)=>{
    const nome = prompt("Nome:");
    callback(nome);
}

entradaUsuario(saudacao);
