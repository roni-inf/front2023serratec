try {
  let preco = 0;
  if (preco === 0) {
    throw new Error("valor inválido");
  }
} catch (error) {
  console.log("Erro caiu no catch!"+ error);
} finally {
  console.log("Sempre é executado");
}


