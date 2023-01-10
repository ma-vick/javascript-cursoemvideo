function gerarTabuada(){
    let numeroEntrada = document.getElementById('numeroEntrada');
    let tab = document.getElementById('seltab');

    if (numeroEntrada.value.length == 0){
        alert('[ERRO] Digite um valor para gerar a tabuada.');
    } else {
        nEntrada = Number(numeroEntrada.value);
        tab.innerHTML = '';

        for (let c = 0; c <= 10; c++){
            let item = document.createElement('option');
            item.text = `${nEntrada} x ${c} = ${nEntrada * c}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
        }
    }
}