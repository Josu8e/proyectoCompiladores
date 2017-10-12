var gramarVisitor = require('generated/CParserVisitor').CParserVisitor;
var tablaSimbolos = require('JavaScripts/tablaSimbolos');
var tabla;

var textArea = document.getElementById('consola');


function recorridoObjeto() {
    gramarVisitor.call(this);
    tabla = global.tabla;
    return this;
}

recorridoObjeto.prototype = Object.create(gramarVisitor.prototype);
recorridoObjeto.prototype.constructor = recorridoObjeto;


recorridoObjeto.prototype.visitDeclaracionClase = function (ctx) {
    this.visitChildren(ctx);
    return null;

}
var padre;
recorridoObjeto.prototype.visitClase = function (ctx) {

    var temp=tabla.buscarClase(ctx.IDENTIFIER().getSymbol().text);
    if(temp == null){
        tabla.insertarClase(ctx.IDENTIFIER().getSymbol().text);
        padre = ctx.IDENTIFIER().getSymbol().text;
        for(var i = 0; i<ctx.varDecl().length; i++){
            this.visit(ctx.varDecl(i));
        }
        padre = null;
    }
    else {
        textArea.innerHTML += "\n Error en linea "+ ctx.IDENTIFIER().getSymbol().line+ " columna: "+ctx.IDENTIFIER().getSymbol().column+" clase "+ ctx.IDENTIFIER().getSymbol().text +" ya definida"
    }
};


recorridoObjeto.prototype.visitVariable = function (ctx) {
    if (padre != null) {
        var tipo = this.visit(ctx.type());
        if (tipo != null) {
            var nombre = ctx.IDENTIFIER(0).getSymbol().text;
            var temp = tabla.buscarAtributos(padre, nombre);
            if (temp == null) {
                tabla.insertarAtributosClase(padre, nombre, tipo, 0, 0, 'variable');
            }
            else {
                textArea.innerHTML += "\n Error en linea " + ctx.IDENTIFIER(0).getSymbol().line + " columna " + ctx.IDENTIFIER(0).getSymbol().column + " variable " + nombre + " ya definida";
            }
            for (i = 1; i <= ctx.IDENTIFIER().length - 1; i++) {
                nombre = ctx.IDENTIFIER(i).getSymbol().text;
                temp = tabla.buscar(nombre);
                if (temp == null) {
                    tabla.insertarAtributosClase(padre, nombre, tipo, 0, 0, 'variable');
                }
                else {
                    textArea.innerHTML += "\n Error en linea " + ctx.IDENTIFIER(i).getSymbol().line + " columna " + ctx.IDENTIFIER(i).getSymbol().column + " variable " + nombre + " ya definida";
                }
            }
        }
        else {
            textArea.innerHTML += "\n Error en linea " + ctx.IDENTIFIER(0).getSymbol().line + " columna " + ctx.IDENTIFIER(0).getSymbol().column + " tipo no identificado";
        }
    }

    return null;

};

recorridoObjeto.prototype.visitIntT = function(ctx) {
    return 'int';
};


// Visit a parse tree produced by CParser#charT.
recorridoObjeto.prototype.visitCharT = function(ctx) {
    return 'char';
};


// Visit a parse tree produced by CParser#floatT.
recorridoObjeto.prototype.visitFloatT = function(ctx) {
    return 'float';
};


// Visit a parse tree produced by CParser#boolT.
recorridoObjeto.prototype.visitBoolT = function(ctx) {
    return 'bool';
};


// Visit a parse tree produced by CParser#stringT.
recorridoObjeto.prototype.visitStringT = function(ctx) {
    return 'string';
};


// Visit a parse tree produced by CParser#idT.
recorridoObjeto.prototype.visitIdT = function(ctx) {
    var temp=tabla.buscarClase(ctx.IDENTIFIER().getSymbol().text);
    if (temp!=null){
        return temp.nombre;
    }
    if (ctx.IDENTIFIER().getSymbol().text == "List")
        return "List"
    return null;
};


exports.recorridoObjeto = recorridoObjeto;