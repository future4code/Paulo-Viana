function addItem1(){
    const meuInput = document.getElementById('input-valor')
    let item1 = meuInput.value

    const listaDeItens1 = document.getElementById("lista-de-itens1")
    listaDeItens1.innerHTML += `[${item1}]`
    meuInput.value = '' // Esse valor é o que apaga o nome do campo input
}




