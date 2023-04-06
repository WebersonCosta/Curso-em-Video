function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    var img = window.document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'homem-bebe.png')
            }else if(idade >= 10 && idade < 28){
                img.setAttribute('src', 'homem-jovem.png')
            }else if(idade >= 28 && idade < 50){
                img.setAttribute('src', 'homem-adulto.png')
            }else{
                img.setAttribute('src', 'homem-idoso.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'mulher-bebe.png')
            }else if(idade >= 10 && idade < 22){
                img.setAttribute('src', 'mulher-jovem.png')
            }else if(idade >= 22 && idade < 50){
                img.setAttribute('src', 'mulher-adulta.png')
            }else{
                img.setAttribute('src', 'mulher-idosa.png')
            } 
        }
        res.innerHTML = `Detectamos ${genero} com idade ${idade}`
        res.appendChild(img)
    }
}