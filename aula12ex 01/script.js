function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}:00 horas.`

    if(hora >= 0 && hora < 12) {
        //Bom dia 
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#a6caf0'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#ad7263'
    } else {
        //Boa noite
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#1d1617'
    }
}