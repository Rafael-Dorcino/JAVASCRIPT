function calcular(){
    var num = document.getElementById('num')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }

    /* for(var n2 = 0; n2 <= 10; n2++) {
        var s = num * n2
        res.innerHTML += `<p> ${num} x ${n2} = ${s} </p>`
    } */ 
}