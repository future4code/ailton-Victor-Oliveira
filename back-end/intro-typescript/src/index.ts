// function checaTriangulo(a: number, b: number, c: number): any{
//     if (a !== b && b !== c) {
//       return 'Escaleno'
//     } else if (a === b && b === c) {
//       return 'Equilátero'
//     } else {
//       return 'Isósceles'
//     }
//   }
//   console.log(checaTriangulo(1,6,2))

// function imprimeTresCoresFavoritas() {
//    const cor1 = "Insira sua primeira cor favorita"
//    const cor2 = ("Insira sua segunda cor favorita")
//    const cor3 = ("Insira sua terceira cor favorita")
//   return cor1
// }
// console.log(imprimeTresCoresFavoritas)

// function checaAnoBissexto(ano:number):boolean {
//    const cond1 = ano % 400 === 0
//    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
//    return cond1 || cond2
// }
// const bissexto = checaAnoBissexto(2020)
// console.log(bissexto)

function comparaDoisNumeros(num1:number, num2:number) {
   let maiorNumero:number=9
   let menorNumero:number=8
 
   if (num1 > num2) {
     maiorNumero = num1;
     menorNumero = num2;
   } else {
     maiorNumero = num2;
     menorNumero = num1;
   }
 
   //const diferenca = maiorNumero - menorNumero;
 
  // return diferenca 
 }
 console.log(comparaDoisNumeros)