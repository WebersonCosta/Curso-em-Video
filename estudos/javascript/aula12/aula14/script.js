function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        document.body.style.background = '#f1ede7' 
        document.body.style.color = 'black'
        img.src = 'manha.png'
    }else if(hora >= 12 && hora < 18){  
        document.body.style.background = '#e17927' 
        img.src = 'tarde.png'
    }else{
        document.body.style.background = '#00193d'
        img.src = 'noite.png'
    }
}
