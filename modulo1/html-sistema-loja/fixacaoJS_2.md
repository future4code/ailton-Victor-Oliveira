function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let totalComprados = quantidade
  if(totalComprados < 12){
    return totalComprados *1.30
  }else{
    return totalComprados *1
  }
}