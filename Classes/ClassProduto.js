export default class Produto {
  constructor(
    codigoProduto,
    nomeProduto,
    descricaoProduto,
    valorUnitarioProduto,
    dataValidadeProduto,
  ) {
    this.codigo = codigoProduto;
    this.nome = nomeProduto;
    this.descricao = descricaoProduto;
    this.valorUnitario = valorUnitarioProduto;
    this.dataValidade = dataValidadeProduto;
  }
}
