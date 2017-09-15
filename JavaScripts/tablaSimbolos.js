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
    for(var i=0;i<tabla.length;i++){
        if (tabla[i].nombre== nombre){
            return tabla[i];
        }
    }
    return temp;
};

tablaSimbolos.prototype.imprimir=function () {
    tabla.forEach(function (x) {
            console.log(x);
    });

};


tablaSimbolos.prototype.eliminarNivel = function (nivel) {
    for (var i = 0; i<tabla.length;i++){
        if ((tabla[i].nivel === nivel) && (tabla[i].control === 'variable'))
            tabla.splice(i,1);
    }
};

exports.tablaSimbolos = tablaSimbolos;

