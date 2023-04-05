const inputDescricao = document.getElementById("inputDescricao");
const inputQuantidade = document.getElementById("inputQuantidade");
const inputPreco = document.getElementById("inputPreco");
const btAdicionar = document.getElementById("btAdicionar");
const btLimpar = document.getElementById("btLimpar");
const tabela = document.getElementById("tabela");
const valorTotal = document.getElementById("valorTotal");

let listaProdutos = [];

const redesenhaTabela = (tabela, listaProdutos) => {
  tabela.innerHTML = `
    <tr>
      <th>Descrição</th>
      <th>Quantidade</th>
      <th>Preço</th>
    </tr>
  `;
  let total = 0;
  for (let index = 0; index < listaProdutos.length; ++index) {
    const produto = listaProdutos[index];
    const valor = produto.preco * produto.qtd;
    total += valor;
    const row = tabela.insertRow(-1);
    row.insertCell(0).textContent = produto.descricao;
    row.insertCell(1).textContent = produto.qtd;
    row.insertCell(2).textContent = produto.preco.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
  valorTotal.textContent = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

const handleBtAdicionarClick = () => {
  const descricao = inputDescricao.value;
  const qtd = parseInt(inputQuantidade.value);
  const preco = parseFloat(inputPreco.value.replace(",", "."));
  if (!descricao || isNaN(qtd) || isNaN(preco)) {
    alert("Necessário preencher todos os campos corretamente!");
    return;
  }
  const produto = { descricao, qtd, preco };
  listaProdutos.push(produto);
  inputDescricao.value = "";
  inputQuantidade.value = "";
  inputPreco.value = "";
  inputDescricao.focus();
  redesenhaTabela(tabela, listaProdutos);
};

const handleBtLimparClick = () => {
  listaProdutos = [];
  tabela.innerHTML = "";
  inputDescricao.focus();
  valorTotal.textContent = "";
};

btAdicionar.onclick = handleBtAdicionarClick;
btLimpar.onclick = handleBtLimparClick;