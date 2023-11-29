class DispositivoEntrada {

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

}

class Raton extends DispositivoEntrada {
    static contadorRatones = 0;
    constructor (tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;

    }

    toString(){
        return `
        Raton: 
        idRaton: ${this._idRaton}, 
        Tipo Entrada: ${this._tipoEntrada}, 
        Marca: ${this._marca}`
    }

}

let Raton1 = new Raton('USB', 'HP')
console.log(Raton1.toString());

let Raton2 = new Raton ('Bluetooth', 'Dell');
Raton2.marca = 'HP' // podemos cambiar la marca llamando a .marca y asignandole una nueva marca
console.log(Raton2.toString())

class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Teclado: 
        idTeclado: ${this._idTeclado}, 
        Tipo Entrada: ${this._tipoEntrada}, 
        Marca: ${this._marca}`
    }
}

let teclado1 = new Teclado('Cable', 'Samsung')
console.log(teclado1.toString())

let teclado2 = new Teclado('Bluetooth', 'LG');
teclado2.tipoEntrada = 'USB'
console.log(teclado2.toString());

let teclado3 = new Teclado('Bluetooth', 'MSI');
console.log(teclado3.toString())