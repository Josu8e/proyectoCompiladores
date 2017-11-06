var gramarVisitor = require('generated/CParserVisitor').CParserVisitor;
var almacenVariables = require('JavaScripts/almacenVariables');
var almacenClases = require('JavaScripts/almacenClases');

var tablaVariables;
var tablaMetodos;
var tablaClases;

var nivel = 0;

var padre = null;

function visitorInterprete() {
    gramarVisitor.call(this);
    tablaVariables = global.tablaVariables;
    tablaMetodos = global.tablaMetodos;
    tablaClases = global.tablaClases;
    return this;
}

visitorInterprete.prototype = Object.create(gramarVisitor.prototype);
visitorInterprete.prototype.constructor = visitorInterprete;



//your code here :)
visitorInterprete.prototype.visitProgramDef = function(ctx) {
    this.visitChildren(ctx);
    tablaVariables.imprimir();
    tablaClases.imprimirClases();
    tablaMetodos.imprimir();
    return null;
};


// Visit a parse tree produced by CParser#declaracionConst.
visitorInterprete.prototype.visitDeclaracionConst = function(ctx) {
    this.visitChildren(ctx);
    return null;
};


// Visit a parse tree produced by CParser#declaracionVariable.
visitorInterprete.prototype.visitDeclaracionVariable = function(ctx) {
    this.visitChildren(ctx);
    return null;
};


// Visit a parse tree produced by CParser#declaracionClase.
visitorInterprete.prototype.visitDeclaracionClase = function(ctx) {
    this.visitChildren(ctx);
    return null;
};


// Visit a parse tree produced by CParser#constante.
visitorInterprete.prototype.visitConstante = function(ctx) {
    var type = this.visit(ctx.type());
    var nombre = ctx.IDENTIFIER().getSymbol().text;
    var valor = this.visit(ctx.numStr());

    tablaVariables.insertar(nombre,type,nivel,valor);


    return null;
};


// Visit a parse tree produced by CParser#numero.
visitorInterprete.prototype.visitNumero = function(ctx) {
    var texto = ctx.NUMBER().getSymbol().text;
    var valor = parseInt(texto);
    return valor;
};


// Visit a parse tree produced by CParser#char.
visitorInterprete.prototype.visitChar = function(ctx) {
    var valor = ctx.CHAR().getSymbol().text;
    return valor;
};


// Visit a parse tree produced by CParser#variable.
visitorInterprete.prototype.visitVariable = function(ctx) {
    var tipo = this.visit(ctx.type());
    var nombre = ctx.IDENTIFIER(0).getSymbol().text;
    if (padre == null) {
        tablaVariables.insertar(nombre, tipo, nivel, null);
    }
    else{
        tablaClases.insertarAtributosClase(padre,nombre,tipo,nivel);
    }
    for (var i = 1; i<ctx.IDENTIFIER().length;i++){
        nombre = ctx.IDENTIFIER(i).getSymbol().text;
        if (padre == null) {
            tablaVariables.insertar(nombre, tipo, nivel, null);
        }
        else{
            tablaClases.insertarAtributosClase(padre,nombre,tipo,nivel);
        }
    }
    return null;
};


// Visit a parse tree produced by CParser#clase.

visitorInterprete.prototype.visitClase = function(ctx) {
    padre = ctx.IDENTIFIER().getSymbol().text;
    tablaClases.insertarClase(padre);
    for (var i = 0 ; i<ctx.varDecl().length; i++){
        this.visit(ctx.varDecl(i));
    }
    padre = null;
    return null;
};


// Visit a parse tree produced by CParser#metodo.

visitorInterprete.prototype.visitMetodo = function(ctx) {
    var tipo = this.visit(ctx.tipoMet());
    var nombre = ctx.IDENTIFIER().getSymbol().text;
    var parametros;
    try {
        parametros= this.visit(ctx.formPars());
    }
    catch (e){
        parametros = 0;
    };
    tablaMetodos.insertar(nombre,tipo,ctx,parametros);
};


// Visit a parse tree produced by CParser#tipoDecla.
visitorInterprete.prototype.visitTipoDecla = function(ctx) {
    var tipo = this.visit(ctx.type());
    return tipo;
};


// Visit a parse tree produced by CParser#void.
visitorInterprete.prototype.visitVoid = function(ctx) {
    return 'void';
};


// Visit a parse tree produced by CParser#defVarMul.
visitorInterprete.prototype.visitDefVarMul = function(ctx) {
    var parametros = []
    var tipo = this.visit(ctx.type(0));
    var nombre = ctx.IDENTIFIER(0).getSymbol().text;
    var id = new Id(nombre,tipo);
    parametros.push(id);
    for (var i=1;i<ctx.type().length;i++){
        var nombre = ctx.IDENTIFIER(i).getSymbol().text;
        tipo = this.visit(ctx.type(i));
        var id = new Id(nombre,tipo);
        parametros.push(id);
    }

    return parametros;


    function Id(nombre,tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.valor = null;
    }
};

// Visit a parse tree produced by CParser#intT.
visitorInterprete.prototype.visitIntT = function(ctx) {
    return 'int';
};


// Visit a parse tree produced by CParser#charT.
visitorInterprete.prototype.visitCharT = function(ctx) {
    return 'char';
};


// Visit a parse tree produced by CParser#floatT.
visitorInterprete.prototype.visitFloatT = function(ctx) {
    return 'float';
};


// Visit a parse tree produced by CParser#boolT.
visitorInterprete.prototype.visitBoolT = function(ctx) {
    return 'bool';
};


// Visit a parse tree produced by CParser#stringT.
visitorInterprete.prototype.visitStringT = function(ctx) {
    return 'string';
};

// Visit a parse tree produced by CParser#idT.
visitorInterprete.prototype.visitIdT = function(ctx) {
    var temp = tablaClases.buscarClase(ctx.IDENTIFIER().getSymbol().text);
    return temp.nombre;
};

exports.tablaVariables = tablaVariables;
exports.visitorInterprete = visitorInterprete;
