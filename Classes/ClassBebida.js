import Produto from './ClassProduto.js';

export default class Bebida extends Produto {
  constructor(
    codigoProduto,
    nomeProduto,
    descricaoProduto,
    valorUnitarioProduto,
    dataValidadeProduto,
    litroBebida,
    tipoBebida,
  ) {
    super(
      codigoProduto,
      nomeProduto,
      descricaoProduto,
      valorUnitarioProduto,
      dataValidadeProduto,
    );
    this.litro = litroBebida;
    this.tipo = tipoBebida;
  }

  salvarStorage() {
    let dadosBebida = JSON.parse(localStorage.getItem("dadosBebida"));
    if(dadosBebida == null){
      dadosBebida = [];
    }

    dadosBebida.push({
      codigo: this.codigo,
      nome: this.nome,
      descricao: this.descricao,
      valorUnitario: this.valorUnitario,
      dataValidade: this.dataValidade,
      litro: this.litro,
      tipo: this.tipo
    });

    localStorage.setItem("dadosBebida", JSON.stringify(dadosBebida));
  }
}
