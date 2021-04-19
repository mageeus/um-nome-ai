

function mostrar(){
   
    var nomedocarrinho = document.getElementById('Nomecarrinho')
    var name = nomedocarrinho.value;

    var outname = document.getElementById('outname')

   
    var parcelas = document.getElementById('parcelas')


    var precocarrinho = document.getElementById('precocarrinho')
    var preco = Number(precocarrinho.value)
    
    var respostinha = document.getElementById('respostinha')
    
    respostinha.textContent = `valor de entrada: R$${preco/2} `
    outname.textContent = `${name}`
    parcelas.textContent = `+12x de R$${preco/24}`
}
    
