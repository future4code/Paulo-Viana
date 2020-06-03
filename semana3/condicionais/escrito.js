/* -- EXERCICIO 4 / PROGRAMA 2 DÍGITOS */
let numA = prompt('Digite um número:')
let numB = prompt('Digite outro número por favor:')

if(numA > numB) {
  console.log('Seus números na ordem decrescente são: ' + numA + ' e ' + numB)
}

if (numA < numB) {
  console.log('Seus números na ordem decrescente são: ' + numB + ' e ' + numA)
}
  
/* -- EXERCICIO 4 / PROGRAMA 3 DÍGITOS */
let num1 = prompt('Digite um número:')
let num2 = prompt('Digite outro número por favor:')
let num3 = prompt('Digite o último número por favor:')

if(num1 > num2 && num2 > num3) {
  console.log('Seus números na ordem decrescente são: ' + num1 + ' , ' + num2 + ' e ' + num3)
} else if(num1 > num3 && num3 > num2) {
  console.log('Seus números na ordem decrescente são: ' + num1 + ' , ' + num3 + ' e ' + num2)
} else if(num2 > num1 && num1 > num3) {
  console.log('Seus números na ordem decrescente são: ' + num2 + ' , ' + num1 + ' e ' + num3)
} else if(num2 > num3 && num3 > num2) {
  console.log('Seus números na ordem decrescente são: ' + num3 + ' , ' + num2 + ' e ' + num1)
} else if(num3 > num1 && num1 > num2) {
  console.log('Seus números na ordem decrescente são: ' + num3 + ' , ' + num1 + ' e ' + num2)
} else {
  console.log('Seus números são todos iguais') // não entrou em nenhuma regra aí deu default
}















