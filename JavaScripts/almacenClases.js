var tablaClase;



function almacenClases() {
    tablaClase = [];
    return this;
}

function Id(nombre,tipo,nivel) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.nivel = nivel;
    this.valor = 0;
}


function Clase(nombre) {
    this.nombre = nombre;
    this.tablaAtributos = [];
}

almacenClases.prototype.insertarClase = function (nombre) {
    var clase = new Clase(nombre);
    tablaClase.push(clase);
};

almacenClases.prototype.buscarClase = function (nombre) {
    var temp = null;
    for(var i=0;i<tablaClase.length;i++){
        if (tablaClase[i].nombre== nombre){
            return tablaClase[i];
        }
    }
    return temp;
};


almacenClases.prototype.buscarAtributos=function (nombreC,nombre) {
    var temp = this.buscarClase(nombreC);
    for(var i=0;i<temp.tablaAtributos.length;i++){
        if(temp.tablaAtributos[i].nombre == nombre){
            return temp.tablaAtributos[i];
        }
    }
    return null;
};


almacenClases.prototype.insertarAtributosClase = function (nombreC,nombre,tipo,nivel) {
    var id = new Id(nombre,tipo,nivel);
    var temp = this.buscarClase(nombreC);
    if (temp != null) {
        temp.tablaAtributos.push(id);
    }
    else{
        return "\n Clase "+ nombreC +" no encontrada";
    }

};


almacenClases.prototype.imprimirClases=function () {
    tablaClase.forEach(function (x) {
        console.log(x);
    });

};


exports.almacenClases = almacenClases;