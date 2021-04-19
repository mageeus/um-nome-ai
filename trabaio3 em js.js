 function mostrar(){
   
    var tempovalor = document.getElementById('tempovalor')
    var tempovalor = Number(tempovalor.value)
    
    var tempouso = document.getElementById('tempouso')
    var tempouso = Number(tempouso.value)

    var valorpago = Math.ceil((tempouso*tempovalor)/15+(tempouso%tempovalor))
    
    var respostinha = document.getElementById('respostinha')
    
    respostinha.textContent = `Valor a pagar R$ ${valorpago}`
    
    
    }
  
    
    
    
    
    
    
    