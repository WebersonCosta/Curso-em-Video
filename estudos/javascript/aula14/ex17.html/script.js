function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        alert('Por favor, digite um número!')
    }else{    
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        do{
            let iten = document.createElement('option')
            iten.text = `${n} x ${c} = ${n*c}`
            iten.value = `tab${c}`
            tab.appendChild(iten)
            c++
        }while(c <= 10)
    }
   
}