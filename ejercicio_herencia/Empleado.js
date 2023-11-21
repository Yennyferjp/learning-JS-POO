class Empleado extends Persona {
    static contadorEmpleados = 0;

    constructor(sueldo) {
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._suedo = sueldo;

    }

    get idEmpleado() {
        return this._idEmpleado
    }

    get sueldo() {
        return this._sueldo;
    }
    set sueldo(sueldo) {
        return this._sueldo = sueldo;
    }

    toString() {
        return `
        ${super.toString()} 
        ${this._idEmpleado} 
        ${this._sueldo}`
    }

}