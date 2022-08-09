const process = require("process");
var idade = Number(process.argv[3]) + Number(7)
console.log("Olá,", process.argv[2], "! Você tem", process.argv[3],"anos.","Em sete anos você terá",idade, "de idade")