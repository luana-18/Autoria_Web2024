var listaCompras = [];

function adicionarItem() {
    let nomeItem = document.getElementById('nomeItem').value;
    listaCompras.push(nomeItem);
    listarItens();
}

function removerItem(indice) {
    listaCompras.splice(indice, 1);
    listarItens();
}

function contarItens() {
    let quantidade = listaCompras.length;
    document.getElementById('quantidade').innerHTML = quantidade;
}

function listarItens() {
    let conteudo = '';
    if (listaCompras.length === 0) {
        conteudo = '<li>Nenhum item adicionado.</li>';
    } else {
        listaCompras.forEach((item, index) => {
            conteudo += '<li>' + item + 
            ' <button type="button" onclick="removerItem(' + index + ')">x</button>' + 
            '</li>';
        });
    }
    document.getElementById('produtos').innerHTML = conteudo;
    contarItens();
}