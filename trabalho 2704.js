function mostrar(){

    var nome = document.getElementById('nome')
    var Av1 = document.getElementById('Av1')
    var Av2 = document.getElementById('Av2')
    var Av3 = document.getElementById('Av3')

    var nome = nome.value
    var Av1 = Number(Av1.value)
    var Av2 = Number(Av2.value)
    var Av3 = Number(Av3.value) 

    var media = (Av1+Av2)/2

    if (Av1 < 4 || Av3 > Av1) {
        media = (Av2 + Av3)/2
    }
    else if (Av2 < 4 || Av3 > Av2) {
        media = (Av1 + Av3)/2
    }
   
    var outnota = document.getElementById('outnota')

    outnota.textContent = ''
    
    if (Av1 < 4 || Av2 < 4 || media < 6) {
      outnota.textContent ='Parabéns'+ nome + ', foi reprovado'
    } else {
        outnota.textContent = nome + ', você foi aprovado'
    }

    
    
    
    



}