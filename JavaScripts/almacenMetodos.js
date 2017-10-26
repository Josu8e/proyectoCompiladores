var tabla;


function almacenMetodos() {
    tabla = [];
    return this;
}

function metodo(nombre,tipo,ctx) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.parametros = [];
    this.contexto = ctx;
}

almacenMetodos.prototype.insertar = function (nombre,tipo,ctx) {

    var id = new metodo(nombre,tipo,ctx);
    tabla.push(id);
};

almacenMetodos.prototype.buscar = function (nombre) {
    var temp = null;
    for(var i=0;i<tabla.length;i++){
        if (tabla[i].nombre== nombre){
            return tabla[i];
        }
    }
    return temp;
};


almacenMetodos.prototype.modificar = function (nombre,parametro) {
    var temp = this.buscar(nombre);
}

almacenMetodos.prototype.imprimir=function () {
    tabla.forEach(function (x) {
        console.log(x);
    });

};

exports.almacenMetodos = almacenMetodos;