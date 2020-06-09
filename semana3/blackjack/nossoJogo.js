if(confirm('Quer iniciar uma nova partida')) {
	console.log('Bem vindo ao jogo de BlackJack')
} else {
	console.log('O jogo acabou')
}

const jogador1 = comprarCarta()
const computador1 = comprarCarta()
const jogador2 = comprarCarta()
const computador2 = comprarCarta()

const somajogador = jogador1.valor + jogador2.valor
const somaComputador = computador1.valor + computador2.valor

console.log('1ª carta do jogador ' + jogador1.texto)
console.log('Valor = ' + jogador1.valor)
console.log('1ª carta do computador ' + computador1.texto)
console.log('Valor = ' + computador1.valor)
console.log('2ª carta do jogador ' + jogador2.texto)
console.log('Valor = ' + jogador2.valor)
console.log('2ª carta do computador ' + computador2.texto)
console.log('Valor = ' + computador2.valor)

console.log('Usuário - cartas: ' + jogador1.texto + ' ' + jogador2.texto + ' - pontuação ' + somajogador)
console.log('Computador - cartas: ' + computador1.texto + ' ' + computador2.texto + ' - pontuação ' + somaComputador)

if(somajogador > somaComputador) {
   console.log('O usuário ganhou!')
} else if(somajogador < somaComputador) {
   console.log('O computador ganhou!')
} else if(somajogador = somaComputador) {
   console.log('Empate')
}









    


