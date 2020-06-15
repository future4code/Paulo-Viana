/* -- INTERPRETAÇÃO DE CÓDIGOS -- */
/* 
1 - Ela solicita ao usuário para digitar a cotação do dólar e retorna o valor convertido em R$100 * valor digitado

2 - No caso ele vai passar por todos.
No novoMontante ele corre até ações e multiplica o valor por 1.1.
No segundoMontante ele corre até deafult e dá o alert de TIPO DE INVESTIMENTO INFORMADO INCORRETO

3 - 
1º console.log = Quantidade total de números 14
2º console.log = array.1(só números pares) = 6 números
3º console.log = array.1(só números ímpares) = 8 números

4 - 
- console.log(numero1) - ele vai percorrer todo o array e todos os números são menores do que o infinity,
logo o resultado é o próprio infinity
- console.log(numero2) - ele vai percorrer todo o array e vai pegar o maior número, que é 1590
*/


/* -- LÓGICA DE PROGRAMAÇÃO -- */
/*
2 - 
a) true AND false AND false = false
b) (condição false) + false = false OR false = false
c) (true) AND (true) = true
d) !(false) OR !(true) = true OR false = true
e) (false) OR (true) = true

4 - não consegui cehgar na lógica ou na forma correta de fazer, mas saiu essa função:
const triangulos = (medidaA, medidaB, medidaC) => {
    if(medidaA === medidaB && medidaA === medidaC && medidaB === medidaC) {
        console.log('Triângulo Equilátero')
    } else if(medidaA === medidaB && medidaA === medidaC && medidaB !== medidaC && medidaA !== medidaB && medidaA === medidaC) {
        console.log('Triângulo Isósceles')
    } else if (medidaA !== medidaB && medidaA !== medidaC && medidaB !== medidaC) {
        console.log('Triângulo Escaleno')
    } else {
        console.log('Esse Triângulo não existe')
    }
} */


/* -- EXERCÍCIOS DE FUNÇÕES -- */
/* 
2 - 
const FuncaosemNome = (parametro) => {
    alert("Hello Future4")
}
FuncaosemNome() // o alerte é apenas solcitado no browser?
*/



/* -- EXERCÍCIOS DE OBJETOS -- */
/*
1 - 
Objeto => cria uma posição detalhada de um determinado objeto em si.
let carro {
	nome: 'Palio'
	Cor: 'Vermelho'
	Ano: 2019,
}

Array => É um tipo especial de objetos. Tem um conjunto de key-value


2 -
let obj = {
    start: function(criaRetangulo){}
}

const criaRetangulo = (lado1, lado2) => {
    console.log(lado1)
    console.log(lado2)
    console.log('Perímetro é = ' + (lado1 + lado2) * 2)
    console.log('A área é = ' + (lado1 * lado2))
}

3 -
let filme = {
	nome: 'Bastardos Inglórios',
	ano: '2009',
    	diretor: 'Quentin Tarantino',
    	ator1: 'Brad Pitt',
    	ator2: 'Mélanie Laurent',
}

console.log('Venha assistir o filme ' + filme.nome + ', do ano' + filme.ano +', com o diretor ' + filme.diretor +
' e estrelado pelos atores ' + filme.ator1 + ' e ' + filme.ator2 + '.')
*/