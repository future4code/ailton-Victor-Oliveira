//Exercícios de interpretação de código
//----1----
//a)- Matheus Nachtergaele,12,globo 14h.

//2-a)nome do cachorro,idade e raça,no gato o nome muda para juba e no ultimo console a tartaruga fica com o nome jubo
//  b)copia todos os dados

//3-a)false,undefined
//  b)porque nao teve um valor definido

//Exercícios de escrita de código
//1-a) e b)
const pessoa ={
    nome:"victor",
    apelidos:["tinho","victin","vitinho"]
}
console.log("me chamo",pessoa.nome,"mais pode me chamar de:",pessoa.apelidos)

const novaPessoa={
    ...pessoa ,
    apelidos:["feinho","lindo","gato"]
}
console.log(novaPessoa.apelidos)

//2-a)
const pai={
    nome: "francisco",
    idade: 50,
    profissao:"empresario",
}
const mae={
   nome:"maria",
    idade: 46,
    profissao:"médica"
}
function obj(){
}
   function obj2(){       
   }

obj=([pai.nome,pai.nome.length,pai.idade,pai.profissao,pai.profissao.length])
obj2=([mae.nome,mae.nome.length,mae.idade,mae.profissao,mae.profissao.length])
    console.log(obj)
    console.log(obj2)

//3-a)
 const carrinho= []

 const  uva ={
      nome: "uva",
     disponibilidade:true
 }
 const pera ={
    nome: "pera",
   disponibilidade:true
}
const banana ={
    nome: "banana",
   disponibilidade:true
}
function resposta(fruta) {
     carrinho.push(fruta)
}
resposta(uva)
resposta(pera)
resposta(banana)
console.log(carrinho)