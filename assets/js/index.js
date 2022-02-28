import Impuestos from "./Impuestos.js";
import Cliente from "./Cliente.js";

const myForm = document.getElementById("myForm");
const myName = document.getElementById("nombre");
const myIncom = document.getElementById("montoBrutoAnual");
const myDeduction = document.getElementById("deducciones");
const pacientsTable = document.getElementById("pacientesId");
const data = [];

myForm.addEventListener("submit", (e) => {
  const impuestoCliente = new Impuestos(myIncom.value, myDeduction.value);
  const client = new Cliente(myName.value, impuestoCliente);

  e.preventDefault();
  data.push(client);

  pacientsTable.innerHTML += `<tr>
  <th scope="row">${data.indexOf(client) + 1}</th>
  <td>${client.nombre()}</td>
  <td>${client.impuesto().montoBrutoAnual}</td>
  <td>${client.impuesto().deducciones}</td>
  <td>${client.calcularImpuesto()}</td>

</tr>`;

  myName.value = "";
  myIncom.value = "";
  myDeduction.value = "";
});
