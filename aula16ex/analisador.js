let numEntrada = document.getElementById('numEntrada');
let list = document.getElementById('listNumbers');
let res = document.getElementById('res');
let valores = [];

function isNumber(num){
    if(Number(num) >= 1 && Number(num) <= 100){
        return true;
    } else {
        return false;
    }
}

function inList(num, lista){
    if(lista.indexOf(Number(num)) != -1){
        return true;
    } else {
        return false;
    }
}

function adicionaItemLista(){
    if (isNumber(numEntrada.value) && !inList(numEntrada.value, valores)){
        valores.push(Number(numEntrada.value));
        let item = document.createElement('option');
        item.text = `valor ${numEntrada.value} adicionado.`;
        list.appendChild(item);
        res.innerHTML = '';
    } else {
        alert('Valor inválido ou já encontrado na lista.');
    }
    numEntrada.value = '';
    numEntrada.focus();
}

function finalizar(){
    if(valores.length == 0){
        alert('Adiciobne valores antes de finalizar.');
    } else {
        let total = valores.length;
        let menor = valores[0];
        let maior = valores[0];
        let soma = 0;
        let media = 0;
        for(let pos in valores){
            soma += valores[pos];
            if(valores[pos] < menor)
                menor = valores[pos];
            if(valores[pos] > maior)
                maior = valores[pos];
        }
        media = soma / total;
        res.innerHTML = '';
        res.innerHTML += `<p>ao todo, temos ${total} números cadastrados.</p>`;
        res.innerHTML += `<p>o menor valor informado é ${menor}.</p>`;
        res.innerHTML += `<p>o maior valor informado é ${maior}</p>`;
        res.innerHTML += `<p>somando todos os valores temos um total de ${soma}.</p>`;
        res.innerHTML += `<p>a média dos valores cadastrados é ${media}.</p>`;
    }
}