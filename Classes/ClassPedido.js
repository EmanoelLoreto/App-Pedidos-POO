export default class Pedido {
  constructor(
    numeroPedido,
    nrMesaPedido,
    comidasPedido,
    quantidadeComidaPedido,
    bebidaPedido,
    quantidadeBebidaPedido,
    ) {
    this.numero = numeroPedido;
    this.nrMesa = nrMesaPedido;
    this.comidas = comidasPedido;
    this.quantidadeComida = quantidadeComidaPedido;
    this.bebidas = bebidaPedido;
    this.quantidadeBebidas = quantidadeBebidaPedido;
  }

  salvarStorage() {
    let dadosPedido = JSON.parse(localStorage.getItem("dadosPedido"));
    if(dadosPedido == null){
      dadosPedido = [];
    }

    dadosPedido.push({
      numeroPedido: this.numero,
      numeroMesa: this.nrMesa,
      comidas: this.comidas,
      quantidadeComidas: this.quantidadeComida,
      bebidas: this.bebidas,
      quantidadeBebidas: this.quantidadeBebidas,
    });

    localStorage.setItem("dadosPedido", JSON.stringify(dadosPedido));
  }
}
