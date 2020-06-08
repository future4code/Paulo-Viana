
/* Exercício 1
Ele pega o sum e vai incrementando os valores i a partir do 0:
0 + 0 = 0
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10

....

91 + 14 = 105 */


/*EXERCÍCIO 2 
A - Ele quer tirar os elementos da lista que dividido por 5(const numero)
o móludo(resto) tem que ser igial a 0, ou seja, múltiplos de 5.

B - O push acrescenta elementos no fim do array

C - const numero = 3 = [12, 15, 18, 21, 27, 30]  |  const numero = 4 = [12]*/



/* -- ECERCÍCIO 3 ITEM A -- */
let numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maiorNumeroAtual = 0
let menorNumeroAtual = 130

for (let i = 0; i < numeros.length; i++) {
    const elemento = numeros[i]
    if (elemento > maiorNumeroAtual) {
        maiorNumeroAtual = elemento
    } else if (elemento < menorNumeroAtual) {
        menorNumeroAtual = elemento
    }
}

console.log('o maior número é ' + maiorNumeroAtual + ' e o menor número é ' + menorNumeroAtual)




