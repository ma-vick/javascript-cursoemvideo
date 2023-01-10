function carregar(){
    var msg = document.getElementById('mensagem')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    if (hora < 10){
        hora = '0' + hora
    }
    if (minutos < 10){
        minutos = '0' + hora
    }

    msg.innerHTML = `Agora são <strong>${hora}:${minutos}</strong>`

    if (hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#8abbfb'
    } else if (hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#f3ca7f'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#00053b'
    }
}