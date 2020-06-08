/* --- EXERCÍCIO 1 ---*/
const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario) // aqui ele faz o converte o valor digitado em númber

if(numero % 2 === 0) {
  console.log("Passou no teste.") // se o resultado for um número par ele passa no teste
} else {
  console.log("Não passou no teste.") // se o resultado for um número ímpar ele não passa no teste
}



/* --- EXERCÍCIO 2 ---*/
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM d.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/* Respostas Exercícios 2:
A - O Swich ele é uma estrutura de múltiplas escolhas;
B - O preço da fruta ", Maçã, " é ", "R$ ", 2.25
C - Ele vai sair o valor defult: O preço da fruta  Banana  é  R$  5, pois não tem banana no switch
D - Se não tiver o break ele passa direto para o default: O preço da fruta  Pêra  é  R$  5 */



/* --- EXERCÍCIO 3 ---*/
const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
 }
} 

console.log(mensagem)
/* ele não tem nenhuma mensagem para lê, pois as mensagens que poderiam dar estão no SCOPO filho.
O escopo do pai não tem acesso as mensagens do escopo do filho */






