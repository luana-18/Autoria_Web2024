let listagemProduto = []; // var é mais antigo
let emAlteracao = false;
let indiceProdutoAlteracao = -1;

function gravarProduto() {
    let nome = document.getElementById('nome').value;
    let qtd = document.getElementById('qtd').value;
    let valor = document.getElementById('valor').value;
    let fornecedor = document.getElementById('fornecedor').value;
    
    //let produto = new Object(), mesma coisa de listar na variável produto; 
    let produto = {
        nomeProduto: nome,
        qtdProduto: qtd,
        valorProduto: valor,
        fornecedorProduto: fornecedor
    };

    if (emAlteracao) {
        listagemProduto[indiceProdutoAlteracao] = produto;
        emAlteracao = false;
        indiceProdutoAlteracao = -1;
    } else {
        listagemProduto.push(produto);
    }
    

    
    document.getElementById('formProduto').reset();
    listarProdutos()
}
function listarProdutos() {
    let conteudo = '';
    if (listagemProduto.length === 0) {
        conteudo = '<tr><td colspan="7">Nenhum produto cadastrado até o momento</td></tr>';
    } else {
        listagemProduto.forEach((value, index) => {
            conteudo += `
                <tr>
                    <td>${index} </td>
                    <td>${value.nomeProduto} </td>
                    <td>${value.qtdProduto} </td>
                    <td>${value.valorProduto} </td>
                    <td>${value.fornecedorProduto} </td>
                    <td>
                        <button type="button" onclick="alterarProduto(${index})">Alterar</button>
                    </td>
                    <td>
                        <button type="button" onclick="excluirProduto(${index})">Excluir</button>
                    </td>
                </tr>
            `;
        });
    }
    document.getElementById('conteudo').innerHTML = conteudo;
}

function excluirProduto(indice) {
    if (confirm('deseja realmente excluir esse registro?')) {
        listagemProduto.splice(indice, 1);
        listarProdutos();
    }
}

function alterarProduto(indice) {
    emAlteracao = true;
    indiceProdutoAlteracao = indice;
    document.getElementById('nome').value = listagemProduto[indice].nomeProduto;
    document.getElementById('qtd').value = listagemProduto[indice].qtdProduto;
    document.getElementById('valor').value = listagemProduto[indice].valorProduto;
    document.getElementById('fornecedor').value = listagemProduto[indice].fornecedorProduto;

}