var nomes = []; // variavel tipo array 

function adicionarAmigo() {
    var nomeAmigo = document.getElementById('nome');
    nomes.push(nomeAmigo.value);
    //exibirNomes();
    exibirNomes2();
    nomeAmigo.value = '';
}

function exibirNomes() {
    var lista = document.getElementById('lista');
    var texto = '';
    for (var i = 0; i < nomes.length; i++) {
        texto += '<li>' + nomes[i] + '</li>'
    }
    lista.innerHTML = texto;
}

function exibirNomes2() {
    var lista = document.getElementById('lista');
    lista.innerHTML = '';
    nomes.forEach(function (nome){
        var li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    }); //laço para cada elemento do array
}

function limparLista() {
    nomes = [];
    document.getElementById('lista').innerHTML = ' ';
}