import Impuestos from "./Impuestos.js"


class Cliente {
    constructor(nombre,impuesto){
        this.__nombre = ()=> nombre
        this.__impuesto = ()=> impuesto
    }
    get nombre(){
        return this.__nombre
    }
    get impuesto(){
        return this.__impuesto
    }

    set nombre (nombre){
    this.__nombre = () => nombre
    }   

    calcularImpuesto(){
        return (this.__impuesto().montoBrutoAnual - this.__impuesto().deducciones)*0.21

    }
}



export default Cliente  