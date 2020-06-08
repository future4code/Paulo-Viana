const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado) // Operador AND. Tem que todos os valores tru para dar um true

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado) // O operador OR pode imprimir algum valor false, logo a afirmação é false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado) // Operador de negação, que converte o a resultado em true. O contrário da opção b

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado) // nessa declaração (!bool1 || bool2)) só resulta o false. false + false = false no operador AND

console.log("e. ", typeof resultado) // mostra o tipo do resultado. No caso é um boolean


