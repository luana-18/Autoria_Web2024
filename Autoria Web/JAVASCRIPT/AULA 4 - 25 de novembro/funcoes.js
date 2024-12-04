let notasTurma = [];

function adicionarNota() {
    let nota = parseInt(document.getElementById('nota').value);
    notasTurma.push(nota);
    listar(notasTurma);
}

function listar(listagem) {
    let conteudo = '';
    listagem.forEach(nota => {
        conteudo += '<li>' + nota + '</li>';
    });
    document.getElementById('listagemNotas').innerHTML = conteudo;
    calcularMedia(listagem);
}

function calcularMedia(listagem) {
    // opcao 1
    let soma = 0;
    listagem.forEach(nota => soma += nota);
    // opcao 2
    //let soma = listagem.reduce((somatorio, nota) => somatorio + nota, 0);
    let quantidade = listagem.length;
    let resultado = soma / quantidade;
    document.getElementById('media').innerHTML = resultado;
}

function exibirNotasAcimaMedia(media) {
    let notasAcimaMedia = notasTurma.filter(nota => nota >= media);
    listar(notasAcimaMedia);
}