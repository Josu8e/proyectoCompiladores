var tabla;


function almacenMetodos() {
    tabla = [];
    return this;
}



function metodo(nombre,tipo,ctx,parametros) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.parametros = parametros;
    this.contexto = ctx;
    this.cPara = this.parametros.length;
}

almacenMetodos.prototype.insertar = function (nombre,tipo,ctx,parametros) {

    var id = new metodo(nombre,tipo,ctx,parametros);
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