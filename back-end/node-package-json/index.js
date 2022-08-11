const process = require("process");
//var idade = Number(process.argv[3]) + Number(7)
//console.log("Olá,", process.argv[2], "! Você tem", process.argv[3],"anos.","Em sete anos você terá",idade, "de idade")
//var valor = Number(process.argv[2]) + Number(process.argv[3])
//console.log(valor)

var tarefas = ['limpar','varrer']
var incluir = tarefas.push(process.argv[2])
console.log(incluir)
console.log(tarefas)

