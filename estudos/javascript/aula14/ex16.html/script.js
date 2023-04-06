function verificar(){
    var inicio = window.document.getElementById('txtini')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpas')
    var res = window.document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
    }else{
        res.innerHTML = 'contando: <br>'
        i = Number(inicio.value)
        f = Number(fim.value)
        p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo Invalido! Considerando passo 1')
            p = 1
        }
        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}` 
            } 
        }else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}` 
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}