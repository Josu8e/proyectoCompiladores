var gramarVisitor = require('generated/CParserVisitor').CParserVisitor;
var tablaSimbolos = require('JavaScripts/tablaSimbolos');
var global = require('Acontextual');
var tabla = global.Tabla;

var textArea = document.getElementById('consola');


function recorridoObjeto() {
    gramarVisitor.call(this);
    return this;
}


recorridoObjeto.prototype.visitDeclaracionClase = function (ctx) {
    this.visitChildren(ctx);
    return null;

}

recorridoObjeto.prototype.visitClase = function (ctx) {
    var temp=tabla.buscarClase(ctx.IDENTIFIER().getSymbol().text);
    if(temp != null){
        tabla.insertarClase(ctx.IDENTIFIER().getSymbol().text);
        for(var i = 0; i<ctx.varDecl().length; i++){
            this.visit(ctx.varDecl(i));
        }
    }
    else {
        textArea.innerHTML = "\n Error en linea "+ ctx.IDENTIFIER().getSymbol().line+ " columna: "+ctx.IDENTIFIER().getSymbol().column+" clase "+ ctx.IDENTIFIER().getSymbol().text +" ya definida"
    }
};

recorridoObjeto().prototype.visitDeclaracionVariable = function(ctx) {
    this.visitChildren(ctx);
    return null;
};

recorridoObjeto.prototype.visitVariable = function (ctx) {
  var tipo =  this.visit(ctx.type);
  if(tipo != null) {
      var nombre = ctx.IDENTIFIER(0).getSymbol().text;
      var temp = tabla.buscarAtributos(nombre);
      if (temp == null) {
          tabla.insertar(nombre, tipo, 0, 0, 'variable');
      }
      else {
          textArea.innerHTML = "\n Error en linea " + ctx.IDENTIFIER().getSymbol().line + " columna " + ctx.IDENTIFIER().getSymbol().column + " variable " + nombre + " ya definida";
      }
      for (i = 1; i <= ctx.IDENTIFIER().length - 1; i++) {
          nombre = ctx.IDENTIFIER(i).getSymbol().text;
          temp = tabla.buscar(nombre);
          if (temp == null) {
              tabla.insertar(nombre, tipo, 0, nivel, 'variable');
          }
          else {
              textArea.innerHTML = "\n Error en linea " + ctx.IDENTIFIER(i).getSymbol().line + " columna " + ctx.IDENTIFIER(i).getSymbol().column + " variable " + nombre + " ya definida";
          }
      }
  }
  else{
      textArea.innerHTML = "\n Error en linea " + ctx.type().getSymbol().line + " columna " + ctx.type().getSymbol().column + " tipo no identificado";
  }

    return null;

};

Acontextual.prototype.visitIntT = function(ctx) {
    return 'int';
};


// Visit a parse tree produced by CParser#charT.
Acontextual.prototype.visitCharT = function(ctx) {
    return 'char';
};


// Visit a parse tree produced by CParser#floatT.
Acontextual.prototype.visitFloatT = function(ctx) {
    return 'float';
};


// Visit a parse tree produced by CParser#boolT.
Acontextual.prototype.visitBoolT = function(ctx) {
    return 'bool';
};


// Visit a parse tree produced by CParser#stringT.
Acontextual.prototype.visitStringT = function(ctx) {
    return 'string';
};


// Visit a parse tree produced by CParser#idT.
Acontextual.prototype.visitIdT = function(ctx) {
    var temp=tabla.buscarClase(ctx.IDENTIFIER().getSymbol().text);
    if (temp!=null){
        return temp.nombre;
    }
    return null;
};


exports.recorridoObjeto = recorridoObjeto;