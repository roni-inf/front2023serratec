const mensagem =()=>console.log("Executar em 5 segundos");

setTimeout(mensagem,5000)

setInterval(function(){
    console.log("Executar em 2 segundos");
},2000)
