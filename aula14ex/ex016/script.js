function contar(){
    var primeiroN = document.getElementById('pNumero');
    var segundoN = document.getElementById('sNumero');
    var passo = document.getElementById('passo');
    var res = document.getElementById('res');

    if (primeiroN.value.length == 0 || segundoN.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!';
        alert('[ERRO] Faltam dados!');
    } else {
        var pN = Number(primeiroN.value);
        var sN = Number(segundoN.value);
        var p = Number(passo.value);
        if (p <= 0){
            alert('Passo inválido! Considerando PASSO = 1');
            p = 1;
        }

        if (pN < sN){
            // contagem crescentee
            for (var c = pN; c <= sN; c += p){
                res.innerHTML += ` ${c} \u{1F449} `;
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            // contagem decrescente
            for (var c = pN; c >= sN; c -= p){
                res.innerHTML += ` ${c} \u{1F449} `;
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}