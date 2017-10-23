var tabla;


function almacenVariables() {
    tabla = [];
    return this;
}

function Id(nombre,tipo,nivel) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.valor = null;
    this.nivel = nivel;
}

almacenVariables.prototype.insertar = function (nombre,tipo,nivel) {

    var id = new Id(nombre,tipo,nivel);
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
    temp = this.buscar(nombre);
    if (temp == null){
        return false;
    }
    else{
        return true;
    }

}

almacenVariables.prototype.imprimir=function () {
    tabla.forEach(function (x) {
        console.log(x);
    });

};

exports.almacenVariables = almacenVariables;