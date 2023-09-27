function asyncFunction() {
  setTimeout(() => {
    console.log("teste");
  }, 100);
}
console.log("Mensagem-1");
asyncFunction();
console.log("Mensagem-3");
