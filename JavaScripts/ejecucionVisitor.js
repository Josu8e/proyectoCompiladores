var gramarVisitor = require('generated/CParserVisitor').CParserVisitor;
var temporal;


function ejecucionVisitor() {
    gramarVisitor.call(this);
    temporal = global.temporal;
    return this;
}

var variabletrabajo;

function Id(nombre,tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.valor = null;
}

ejecucionVisitor.prototype = Object.create(gramarVisitor.prototype);
ejecucionVisitor.prototype.constructor = ejecucionVisitor;



ejecucionVisitor.prototype.visitVariable = function(ctx) {
    var tipo = this.visit(ctx.type());
    var nombre = ctx.IDENTIFIER(0).getSymbol().text;

    var id =  new Id(nombre,tipo);
    temporal.parametros.push(id);


    return null;
};


// Visit a parse tree produced by CParser#intT.
ejecucionVisitor.prototype.visitIntT = function(ctx) {
    return 'int';
};


// Visit a parse tree produced by CParser#charT.
ejecucionVisitor.prototype.visitCharT = function(ctx) {
    return 'char';
};


// Visit a parse tree produced by CParser#floatT.
ejecucionVisitor.prototype.visitFloatT = function(ctx) {
    return 'float';
};


// Visit a parse tree produced by CParser#boolT.
ejecucionVisitor.prototype.visitBoolT = function(ctx) {
    return 'bool';
};


// Visit a parse tree produced by CParser#stringT.
ejecucionVisitor.prototype.visitStringT = function(ctx) {
    return 'string';
};

// Visit a parse tree produced by CParser#idT.
ejecucionVisitor.prototype.visitIdT = function(ctx) {
    var temp = tablaClases.buscarClase(ctx.IDENTIFIER().getSymbol().text);
    return temp.nombre;
};


// Visit a parse tree produced by CParser#desigClassdef.
ejecucionVisitor.prototype.visitDesigClassdef = function(ctx) {
    var nombre = ctx.IDENTIFIER().getSymbol().text;

    variabletrabajo = nombre;

    //toDo: falta saber que hacer si viene "objeto.atributo" o "lista[algo]"
    //code

    this.visit(ctx.asignation());
    variabletrabajo = null;

};

// Visit a parse tree produced by CParser#asignacion.
ejecucionVisitor.prototype.visitAsignacion = function(ctx) {
    this.visit(ctx.expr());
    return null;
};

// Visit a parse tree produced by CParser#menosmenos.
ejecucionVisitor.prototype.visitMenosmenos = function(ctx) {
    var temp = tablaVariables.buscar(variabletrabajo);
    if (temp.valor == null){
        temp.valor = 0;
    }
    temp.valor++;
    return null;
};

// Visit a parse tree produced by CParser#masmas.
ejecucionVisitor.prototype.visitMasmas = function(ctx) {
    var temp = tablaVariables.buscar(variabletrabajo);
    if (temp.valor == null){
        temp.valor = 0;
    }
    temp.valor--;
    return null;
};

// Visit a parse tree produced by CParser#bloque.
ejecucionVisitor.prototype.visitBloque = function(ctx) {
    this.visitChildren(ctx);
    return null;
};

// Visit a parse tree produced by CParser#parteLista.
ejecucionVisitor.prototype.visitParteLista = function(ctx) {
    this.visitChildren(ctx);
    return null;
};

// Visit a parse tree produced by CParser#expresion.
ejecucionVisitor.prototype.visitExpresion = function(ctx) {
    var dato = this.visit(ctx.term(0));
    for(var i= 1;i<ctx.term().length;i++){
        var operando= this.visit(ctx.addop(i-1));
        var dato2 = this.visit(ctx.term(i));
        if(operando == '-'){
            dato = dato - dato2;
        }
        else{
            dato = dato + dato2;
        }
    }
    tablaVariables.modificar(variabletrabajo,dato);
    return null;
};


// Visit a parse tree produced by CParser#termino.
ejecucionVisitor.prototype.visitTermino = function(ctx) {
    var dato = this.visit(ctx.factor(0));
    for(var i= 1;i<ctx.factor().length;i++){
        var operando= this.visit(ctx.mulop(i-1));
        var dato2 = this.visit(ctx.factor(i));
        if(operando == '*'){
            dato = dato * dato2;
        }
        else if(operando == '%'){
            dato = dato % dato2;
        }
        else{
            dato = dato / dato2;
        }
    }
    return dato;
};


// Visit a parse tree produced by CParser#asignador.
//fixme: not done
ejecucionVisitor.prototype.visitAsignador = function(ctx) {
    var temp=tablaVariables.buscar(ctx.IDENTIFIER().getSymbol().text);
    return temp.valor;
};


// Visit a parse tree produced by CParser#factorNumero.
ejecucionVisitor.prototype.visitFactorNumero = function(ctx) {
    var valor = parseInt(ctx.NUMBER().getSymbol().text);
    return valor;
};


// Visit a parse tree produced by CParser#factorCaracter.
ejecucionVisitor.prototype.visitFactorCaracter = function(ctx) {
    var valor = ctx.CHAR().getSymbol().text;
    return valor;
};


// Visit a parse tree produced by CParser#factorBool.
ejecucionVisitor.prototype.visitFactorBool = function(ctx) {
    var valor = this.visit(ctx.booleano());
    return valor;
};


// Visit a parse tree produced by CParser#factorString.
ejecucionVisitor.prototype.visitFactorString = function(ctx) {
    var valor = ctx.STRING().getSymbol().text;
    return valor;
};


// Visit a parse tree produced by CParser#verdad.
ejecucionVisitor.prototype.visitVerdad = function(ctx) {
    return true;
};


// Visit a parse tree produced by CParser#falso.
ejecucionVisitor.prototype.visitFalso = function(ctx) {
    return false
};

// Visit a parse tree produced by CParser#sumar.
ejecucionVisitor.prototype.visitSumar = function(ctx) {
    return '+';
};


// Visit a parse tree produced by CParser#restar.
ejecucionVisitor.prototype.visitRestar = function(ctx) {
    return '-';
};


// Visit a parse tree produced by CParser#multiplicar.
ejecucionVisitor.prototype.visitMultiplicar = function(ctx) {
    return '*';
};


// Visit a parse tree produced by CParser#dividir.
ejecucionVisitor.prototype.visitDividir = function(ctx) {
    return '/';
};


// Visit a parse tree produced by CParser#modular.
ejecucionVisitor.prototype.visitModular = function(ctx) {
    return '%';
};

exports.ejecucionVisitor = ejecucionVisitor;