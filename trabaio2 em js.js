
function mostrar(){
   
    var buffet = document.getElementById('buffet')
    var buffet = buffet.value;
    
    var consumopessoa = document.getElementById('consumopessoa')
    var consumopessoa = Number(consumopessoa.value)

    var valor = Math.floor((buffet/1000)*consumopessoa)
    
    var respostinha = document.getElementById('respostinha')
    
    respostinha.textContent = `Valor a pagar R$ ${valor} `

    var calcular = getElementById('calcular')

    calcular.addEventListener('click', mostrar)
    
    
    
    
    
    }
    
    