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

const formatValueForReal = (value) => {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
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

  if (inputNome && inputSalario && inputVendas && inputMes) {
    const funcionario = {
      nome: inputNome,
      salario: inputSalario,
      vendas: inputVendas,
      comissao: (10 / 100) * inputVendas,
      mes: inputMes,
    };

    table.classList.add("visible");
    funcionarios.push(funcionario);

    render(funcionarios);
    saveLocalStorage(funcionarios);
  }

  // validate
  const msgValidateName = document.querySelector(".validate--name");
  const msgValidateSalario = document.querySelector(".validate--salario");
  const msgValidateVendas = document.querySelector(".validate--vendas");
  const msgValidateMes = document.querySelector(".validate--mes-vendas");

  if (!inputNome) {
    msgValidateName.classList.add("visible");
  } else {
    msgValidateName.classList.remove("visible");
  }
  if (!inputSalario) {
    msgValidateSalario.classList.add("visible");
  } else {
    msgValidateSalario.classList.remove("visible");
  }
  if (!inputVendas) {
    msgValidateVendas.classList.add("visible");
  } else {
    msgValidateVendas.classList.remove("visible");
  }
  if (!inputMes) {
    msgValidateMes.classList.add("visible");
  } else {
    msgValidateMes.classList.remove("visible");
  }
};

const render = (array) => {
  const tableBody = document.querySelector(".table__body");
  tableBody.innerHTML = "";
  array.forEach((item) => {
    tableBody.innerHTML += `
      <tr>
        <td>${item.nome}</td>
        <td>${item.mes}</td>
        <td>${formatValueForReal(item.salario)}</td>
        <td>${formatValueForReal(item.vendas)}</td>
        <td>${formatValueForReal(item.comissao + item.salario)}</td>
      </tr>
    `;
  });
};

const saveLocalStorage = (array) => {
  const convertValues = JSON.stringify(array);
  localStorage.setItem("Funcionarios", convertValues);
};

const form = document.querySelector("#form");
form.addEventListener("submit", saveForm);
