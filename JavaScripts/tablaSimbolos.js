var tabla;
var tablaClase;

function tablaSimbolos() {
    tabla = [];
    tablaClase = [];
    return this
}

function clase(nombre) {
    this.nombre = nombre;
    this.tablaAtributos = [];
}

tablaSimbolos.prototype.insertarClase = function (nombre) {
    var clase = new clase(nombre);
    tablaClase.push(clase);
};

tablaSimbolos.prototype.buscarClase = function (nombre) {
    var temp = null;
    for(var i=0;i<tablaClase.length;i++){
        if (tablaClase[i].nombre== nombre){
            return tablaClase[i];
        }
    }
    return temp;
};

tablaSimbolos.prototype.buscarAtributos=function (nombreC,nombre) {
    var temp = this.buscarClase(nombreC);
    for(var i=0;i<temp.tablaAtributos.length;i++){
        if(temp.tablaAtributos[i].nombre == nombre){
            return temp.tablaAtributos[i];
        }
    }
    return null;
};

tablaSimbolos.prototype.insertarAtributosClase = function (nombreC,nombre,tipo,cantidadParametros,nivel,control) {
    var id = new Id(nombre,tipo,cantidadParametros,nivel,control);
    var temp = this.buscarClase(nombreC);
    if (temp != null) {
        temp.tablaAtributos.push(id);
    }
    else{
        return "clase "+ nombreC +" no encontrada";
    }

};


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

