import Comida from './Classes/ClassComida.js';
import Bebida from './Classes/ClassBebida.js';
import Pedido from './Classes/ClassPedido.js';

// Comida ----------------------------------------------------------

const btnCadastrarComida = document.getElementById('cadastrarComida');

if (btnCadastrarComida) {
  btnCadastrarComida.addEventListener("click", function () {
    cadastrarComida();
  });
}

function cadastrarComida() {
  let dataValidade = document.getElementById('dataValidade').value
  let newDate = new Date(dataValidade);
  let formatedData = `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`

  const comida = new Comida(
    document.getElementById('codigo').value,
    document.getElementById('nome').value,
    document.getElementById('descricao').value,
    document.getElementById('valorUnitario').value,
    formatedData,
    document.getElementById('peso').value,
    document.getElementById('tipo').value,
  );
  
  comida.salvarStorage();
  alert('Comida cadastrada com sucesso!');

  const dadosComida = JSON.parse(localStorage.getItem('dadosComida'));
  let lastIndex = 0;
  if (dadosComida !== null && dadosComida.length > 0) {
    dadosComida.forEach((element) => {
      lastIndex = Number(element.codigo ? element.codigo : 0) + 1;
    })
    document.getElementById('codigo').value = lastIndex;
  } else {
    document.getElementById('codigo').value = 1;
  }


  document.getElementById('nome').value = ''
  document.getElementById('descricao').value = ''
  document.getElementById('valorUnitario').value = ''
  document.getElementById('dataValidade').value = ''
  document.getElementById('peso').value = ''
  document.getElementById('tipo').value = ''
}

// Bebida ----------------------------------------------------------

const btnCadastrarBebida = document.getElementById('cadastrarBebidas');

if (btnCadastrarBebida) {
  btnCadastrarBebida.addEventListener("click", function () {
    cadastrarBebida();
  });
}

function cadastrarBebida() {
  let dataValidade = document.getElementById('dataValidade').value
  let newDate = new Date(dataValidade);
  let formatedData = `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`

  const bebida = new Bebida(
    document.getElementById('codigo').value,
    document.getElementById('nome').value,
    document.getElementById('descricao').value,
    document.getElementById('valorUnitario').value,
    formatedData,
    document.getElementById('litro').value,
    document.getElementById('tipo').value,
  );

  bebida.salvarStorage();
  alert('Bebida cadastrada com sucesso!');

  const dadosBebida = JSON.parse(localStorage.getItem('dadosBebida'));
  let lastIndex = 0;
  if (dadosBebida !== null && dadosBebida.length > 0) {
    dadosBebida.forEach((element) => {
      lastIndex = Number(element.codigo ? element.codigo : 0) + 1;
    })
    document.getElementById('codigo').value = lastIndex;
  } else {
    document.getElementById('codigo').value = 1;
  }

  document.getElementById('nome').value = ''
  document.getElementById('descricao').value = ''
  document.getElementById('valorUnitario').value = ''
  document.getElementById('dataValidade').value = ''
  document.getElementById('litro').value = ''
  document.getElementById('tipo').value = ''
}

// Pedido ----------------------------------------------------------

const btnCadastrarPedido = document.getElementById('cadastrarPedidos');

if (btnCadastrarPedido) {
  btnCadastrarPedido.addEventListener("click", function () {
    cadastrarPedido();
  });
}

function cadastrarPedido() {
  const pedido = new Pedido(
    document.getElementById('numeroPedido').value,
    document.getElementById('numeroMesa').value,
    document.getElementById('comidas').value,
    document.getElementById('quantidadesComidas').value,
    document.getElementById('bebidas').value,
    document.getElementById('quantitadesBebidas').value,
  );

  pedido.salvarStorage();
  alert('Pedido cadastrado com sucesso!');

  const dadosPedido = JSON.parse(localStorage.getItem('dadosPedido'));
  let lastIndex = 0;
  if (dadosPedido !== null && dadosPedido.length > 0) {
    dadosPedido.forEach((element) => {
      lastIndex = Number(element.numeroPedido ? element.numeroPedido : 0) + 1;
    })
    document.getElementById('numeroPedido').value = lastIndex;
  } else {
    document.getElementById('numeroPedido').value = 1;
  }

  document.getElementById('numeroMesa').value = ''
  document.getElementById('comidas').value = ''
  document.getElementById('quantidadesComidas').value = ''
  document.getElementById('bebidas').value = ''
  document.getElementById('quantitadesBebidas').value = ''
}