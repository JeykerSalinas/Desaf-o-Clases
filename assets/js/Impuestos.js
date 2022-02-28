export default class Impuestos {
  constructor(montoBrutoAnual, deducciones) {
    this.__montoBrutoAnual = () => montoBrutoAnual;
    this.__deducciones = () => deducciones;
  }

  get montoBrutoAnual() {
    return this.__montoBrutoAnual();
  }
  get deducciones() {
    return this.__deducciones();
  }

  set montoBrutoAnual(montoBrutoAnual) {
    this.__montoBrutoAnual = () => montoBrutoAnual;
  }

  set deducciones(deducciones) {
    this.__deducciones = () => deducciones;
  }
}

