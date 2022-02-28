"use strict";

var _Impuestos = _interopRequireDefault(require("./assets/js/Impuestos.js"));

var _Cliente = _interopRequireDefault(require("./assets/js/Cliente.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const myForm = document.getElementById("myForm");
const myName = document.getElementById("nombre");
const myIncom = document.getElementById("montoBrutoAnual");
const myDeduction = document.getElementById("deducciones");
const pacientsTable = document.getElementById("pacientesId");
const data = [];
myForm.addEventListener("submit", e => {
  const impuestoCliente = new _Impuestos.default(myIncom.value, myDeduction.value);
  const client = new _Cliente.default(myName.value, impuestoCliente);
  e.preventDefault();
  data.push(client);
  pacientsTable.innerHTML += "<tr>\n  <th scope=\"row\">".concat(data.indexOf(client) + 1, "</th>\n  <td>").concat(client.nombre(), "</td>\n  <td>").concat(client.impuesto().montoBrutoAnual, "</td>\n  <td>").concat(client.impuesto().deducciones, "</td>\n  <td>").concat(client.calcularImpuesto(), "</td>\n\n</tr>");
  myName.value = "";
  myIncom.value = "";
  myDeduction.value = "";
});