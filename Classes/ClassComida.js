import Produto from './ClassProduto.js';

export default class Comida extends Produto {
  constructor(
    codigoProduto,
    nomeProduto,
    descricaoProduto,
    valorUnitarioProduto,
    dataValidadeProduto,
    pesoComida,
    tipoComida
  ){
    super(
      codigoProduto,
      nomeProduto,
      descricaoProduto,
      valorUnitarioProduto,
      dataValidadeProduto,
    );
    this.peso = pesoComida;
    this.tipo = tipoComida;
  }

  salvarStorage() {
    let dadosComida = JSON.parse(localStorage.getItem("dadosComida"));
    if(dadosComida == null){
      dadosComida = [];
    }

    dadosComida.push({
      codigo: this.codigo,
      nome: this.nome,
      descricao: this.descricao,
      valorUnitario: this.valorUnitario,
      dataValidade: this.dataValidade,
      peso: this.peso,
      tipo: this.tipo
    });

    localStorage.setItem("dadosComida", JSON.stringify(dadosComida));
  }
}
