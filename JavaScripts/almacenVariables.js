var tabla;


function almacenVariables() {
    tabla = [];
    return this;
}

function Id(nombre,tipo,nivel,valor) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.nivel = nivel;
    this.valor = valor;

}

almacenVariables.prototype.insertar = function (nombre,tipo,nivel,valor) {

    var id = new Id(nombre,tipo,nivel,valor);
    tabla.push(id);
};

almacenVariables.prototype.buscar = function (nombre) {
    var temp = null;
    for(var i=0;i<tabla.length;i++){
        if (tabla[i].nombre== nombre){
            return tabla[i];
        }
    }
    return temp;
};


almacenVariables.prototype.modificar = function (nombre, x) {
    var temp = this.buscar(nombre);
    temp.valor = x;


}

almacenVariables.prototype.imprimir=function () {
    tabla.forEach(function (x) {
        console.log(x);
    });

};

exports.almacenVariables = almacenVariables;