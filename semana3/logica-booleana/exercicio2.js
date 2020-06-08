/* -- RESPOSTAS -- */

// A - Array (VETOR) é um tipo especial de objeto que contêm pares de chave/valor, onde a chave de cada valor é o seu número de índice
// B - Nesse caso array = [3, 4, 5, 6, 7, 8,] é o nº 3, pois ele é o índice 0
// C - array.length
// D - estão nos comentários

let array
console.log('I. ', array) // let array = [1, 2, 3] seria o correto

array = null
console.log('II. ', array) // Não foi definido nenhum índice


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length) // O length retorna o número de índices de um array

let i = 0
console.log('IV. ', array[i], " e ", array[i+1]) // retornou o índice 0 e depois o 0+1 (incrementou os valores)

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor) //Não entendi

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i]) // i = i + 1. Não entendi o resto.

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC) //Não entendi


















