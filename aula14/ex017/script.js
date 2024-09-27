function calcular(){
    var nume = document.getElementById('num').value

    for(var n2 = 0; n2 <= 10; n2++) {
        var s = nume * n2
        res.innerHTML += `<p> ${nume} x ${n2} = ${s} </p>`
    }
}