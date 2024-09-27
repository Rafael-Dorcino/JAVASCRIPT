

function contar(){
    var ni = window.document.getElementById('inicio').value
    var nf = document.querySelector('input#fimn').value
    var np = document.getElementById('passo').value
    /*res.innerHTML = `${ni} - ${nf} - ${np}`*/

    while(ni <= nf){
        
        ni = ni + np
        res.innerHTML += `<p>${ni}</p>`
    }
}
