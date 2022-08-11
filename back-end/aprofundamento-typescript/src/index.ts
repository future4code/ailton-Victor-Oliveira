//Exercicio 1
// var minhaString:string = "victor"

// var meuNumero:string | number 

// enum cores {
//     AZUL = "Azul",
//     VERMELHO = "Vermelho",
//     VERDE = "Verde"
// }

// type pessoa = {
//     nome: string,
//     idade: number,
//     corFav: string
// }

// const pessoa1: pessoa = {
//     nome: "victor",
//     idade: 24,
//     corFav: cores.VERMELHO
// }

// const pessoa2: pessoa = {
//     nome: "victor",
//     idade: 24,
//     corFav: cores.VERDE
// }

// const pessoa3: pessoa = {
//     nome: "victor",
//     idade: 24,
//     corFav: cores.VERMELHO
// }

// console.table(pessoa1)

//exercicio 2

// function obterEstatisticas(numeros:number[]): any {

//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas:{maior:Number,menor:number,media:number} ={
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }
// console.log(obterEstatisticas([20,5]))

// type amostra = {
//     numeros: number,
//     obterEstatisticas: string 
// }

//exercicio 3
type post ={
    autor:string,
    texto: string
}
const posts1: post = {
    
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    }
const posts2: post ={
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    }
const posts3: post ={
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    }
const posts4: post ={ 
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    }
const posts5: post ={ 
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
     
   
    
    
      
    
     
    
