// open form
const openForm = () => {
  const header = document.querySelector(".header");
  const btnHeader = document.querySelector("#btn-header");
  const container = document.querySelector("#container");
  const main = document.querySelector(".main");

  container.classList.remove("flex-col");
  container.classList.add("flex-row");
  header.classList.remove("header__full");
  btnHeader.style.display = "none";
  main.style.display = "flex";
};
// close form
const closeForm = () => {
  const header = document.querySelector(".header");
  const btnHeader = document.querySelector("#btn-header");
  const container = document.querySelector("#container");
  const main = document.querySelector(".main");

  container.classList.add("flex-col");
  header.classList.add("header__full");
  btnHeader.style.display = "inline-block";
  main.style.display = "none";
};

let funcionarios = [];

const saveForm = (e) => {
  e.preventDefault();

  // get inputs
  const inputNome = document.querySelector("#input-nome").value;
  const inputSalario = parseFloat(
    document.querySelector("#input-salario").value
  );
  const inputVendas = parseFloat(document.querySelector("#input-vendas").value);
  const inputMes = document.querySelector("#select-mes").value;

  const table = document.querySelector(".table");

  const funcionario = {
    nome: inputNome,
    salario: inputSalario,
    vendas: inputVendas,
    comissao: (10 / 100) * inputVendas,
    mes: inputMes,
  };

  table.classList.add("visible");
  funcionarios.push(funcionario);

  const tableBody = document.querySelector(".table__body");
  tableBody.innerHTML = "";
  funcionarios.forEach((item) => {
    tableBody.innerHTML += `
      <tr>
        <td>${item.nome}</td>
        <td>${item.mes}</td>
        <td>${item.salario.toFixed(2)}</td>
        <td>${item.vendas.toFixed(2)}</td>
        <td>${(item.comissao + item.salario).toFixed(2)}</td>
      </tr>
    `;
  });
  console.log(funcionarios);
};

const form = document.querySelector("#form");
form.addEventListener("submit", saveForm);
