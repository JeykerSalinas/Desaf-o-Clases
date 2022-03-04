"use strict";

var _Impuestos = _interopRequireDefault(require("./Impuestos.js"));

var _Cliente = _interopRequireDefault(require("./Cliente.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var myForm = document.getElementById("myForm");
var myName = document.getElementById("nombre");
var myIncom = document.getElementById("montoBrutoAnual");
var myDeduction = document.getElementById("deducciones");
var pacientsTable = document.getElementById("pacientesId");
var data = [];
myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var impuestoCliente = new _Impuestos["default"](myIncom.value, myDeduction.value);
  var client = new _Cliente["default"](myName.value, impuestoCliente);
  data.push(client);
  pacientsTable.innerHTML += "<tr>\n  <th scope=\"row\">".concat(data.indexOf(client) + 1, "</th>\n  <td>").concat(client.nombre(), "</td>\n  <td>").concat(client.impuesto().montoBrutoAnual, "</td>\n  <td>").concat(client.impuesto().deducciones, "</td>\n  <td>").concat(client.calcularImpuesto(), "</td>\n\n</tr>");
  myName.value = "";
  myIncom.value = "";
  myDeduction.value = "";
});