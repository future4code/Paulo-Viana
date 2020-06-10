function addItem1(){
    const meuInput = document.getElementById('meu-input1')
    let item1 = meuInput.value

    const listaDeItens1 = document.getElementById("lista-de-itens1")
    listaDeItens1.innerHTML += `<li> ${item1} </li>`
    meuInput.value = '' // Esse valor é o que apaga o nome do campo input
}

function addItem2(){
    const meuInput = document.getElementById('meu-input2')
    let item2 = meuInput.value

    const listaDeItens2 = document.getElementById("lista-de-itens2")
    listaDeItens2.innerHTML += `<li> ${item2} </li>`
    meuInput.value = '' // Esse valor é o que apaga o nome do campo input
}


