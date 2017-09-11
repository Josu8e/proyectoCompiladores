var tabla;

function tablaSimbolos() {
    tabla = [];
    return this
}

function Id(nombre,tipo,cantidadParametros,nivel,control) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.valor = null;
    this.cantidadParametros = cantidadParametros;
    this.nivel = nivel;
    this.control = control;
}

tablaSimbolos.prototype.insertar = function (nombre,tipo,cantidadParametros,nivel,control) {

    var id = new Id(nombre,tipo,cantidadParametros,nivel,control);
    tabla.push(id);

};

tablaSimbolos.prototype.buscar = function (nombre) {
    var temp = null;
    tabla.forEach(function (x) {
        if (x.nombre === nombre)
            temp = element;
    });
    return temp;
};

tablaSimbolos.prototype.imprimir=function () {
    tabla.forEach(function (x) {
            console.log(x);
    });

};


tablaSimbolos.prototype.agregarValor= function (nombre,valor) {
    var temp=this.buscar(nombre);
    temp.valor = valor;
};

tablaSimbolos.prototype.eliminarNivel = function (nivel) {
    for (var i = 0; i<tabla.length;i++){
        if ((tabla[i].nivel === nivel) && (tabla[i].tipo === 'variable'))
            delete tabla[i];
    }
};

exports.tablaSimbolos = tablaSimbolos;

