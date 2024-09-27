function contar(){
    var ni = document.getElementById('inicio')
    var nf = document.querySelector('input#fimn')
    var np = document.getElementById('passo')
    let res = document.getElementById('res')

    if (ni.value.length == 0 || nf.value.length == 0 || np.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        //window.alert('[Erro] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'

        var i = Number(ni.value)
        var f = Number(nf.value)
        var p = Number(np.value)

        if(p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            //Contagem Crescente
            for(var c = i; c <= f; c +=p) {
                res.innerHTML += ` &#x1F449 ${c} `
            }
        } else {
            //Contagem Regressiva 
            for(var c = i; c >= f; c -= p){
                res.innerHTML += ` &#x1F449 ${c}`
            }
        }
        res.innerHTML += '&#x1F3C1'
    }
    
}