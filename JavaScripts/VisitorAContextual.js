var gramarVisitor = require('generated/CParserVisitor').CParserVisitor;
var tablaSimbolos = require('JavaScripts/tablaSimbolos');
var tabla = null;

var textArea = document.getElementById('consola');
var nivel = 0;

function Acontextual() {
    gramarVisitor.call(this);
    tabla = new tablaSimbolos.tablaSimbolos();
    return this;
}

Acontextual.prototype = Object.create(gramarVisitor.prototype);
Acontextual.prototype.constructor = Acontextual;


Acontextual.prototype.visitProgramDef = function(ctx) {
    this.visitChildren(ctx);
    tabla.imprimir();
    return null;
};


// Visit a parse tree produced by CParser#declaracionConst.
Acontextual.prototype.visitDeclaracionConst = function(ctx) {
    this.visitChildren(ctx);
    return null;
};


// Visit a parse tree produced by CParser#declaracionVariable.
Acontextual.prototype.visitDeclaracionVariable = function(ctx) {
    this.visitChildren(ctx);
    return null;
};


// Visit a parse tree produced by CParser#declaracionClase.
Acontextual.prototype.visitDeclaracionClase = function(ctx) {
    this.visitChildren(ctx);
    return null;
};


// Visit a parse tree produced by CParser#constante.
Acontextual.prototype.visitConstante = function(ctx) {
    var tipo = this.visit(ctx.type());
    var nombre = ctx.IDENTIFIER().getSymbol().text;
    tabla.insertar(nombre,tipo,0,nivel,'variable');
    var valor = this.visit(ctx.numStr());
    tabla.agregarValor(nombre,valor);
    return null;
};


// Visit a parse tree produced by CParser#numero.
Acontextual.prototype.visitNumero = function(ctx) {
    var valor = ctx.NUMBER().getSymbol().text;
    return valor;
};


// Visit a parse tree produced by CParser#char.
Acontextual.prototype.visitChar = function(ctx) {
    var valor = ctx.CHAR().getSymbol().text;
    return valor;
};


// Visit a parse tree produced by CParser#variable.
Acontextual.prototype.visitVariable = function(ctx) {
    var tipo = this.visit(ctx.type());
    var nombre = ctx.IDENTIFIER(0).getSymbol().text;
    tabla.insertar(nombre,tipo,0,nivel,'variable');
    for (i=0;i<=ctx.IDENTIFIER().length-1;i++) {
        nombre=ctx.IDENTIFIER(i).getSymbol().text;
        tabla.insertar(nombre,tipo,0,nivel,'variable');
    }

    return null;
};


// Visit a parse tree produced by CParser#clase.
Acontextual.prototype.visitClase = function(ctx) {
    this.visitChildren(ctx);
    return null;
};


// Visit a parse tree produced by CParser#metodo.
Acontextual.prototype.visitMetodo = function(ctx) {
    nivel++;
    var tipo = this.visit(ctx.tipoMet());
    var nombre = ctx.IDENTIFIER().getSymbol().text;
    var parametros;
    try{
        parametros = this.visit(ctx.formPars());
    }
    catch (err){
        parametros = 0;
    }

    tabla.insertar(nombre,tipo,parametros,0,'funcion');

    for (i=0;i<=ctx.varDecl().length-1;i++) {
        this.visit(ctx.varDecl(i));
    }
    this.visit(ctx.block());
    tabla.eliminarNivel(nivel);
    nivel--;
    return null;
};


// Visit a parse tree produced by CParser#tipoDecla.
Acontextual.prototype.visitTipoDecla = function(ctx) {
    var tipo=this.visitChildren(ctx.type());
    return tipo;
};


// Visit a parse tree produced by CParser#void.
Acontextual.prototype.visitVoid = function(ctx) {
    return 'void';
};


// Visit a parse tree produced by CParser#defVarMul.
Acontextual.prototype.visitDefVarMul = function(ctx) {
    var tipo = this.visit(ctx.type(0));
    var nombre = ctx.IDENTIFIER(0).getSymbol().text;
    tabla.insertar(nombre,tipo,0,nivel,'variable');
    for (i=0;i<=ctx.type().length-1;i++) {
        tipo=this.visit(ctx.type(i));
        nombre=ctx.IDENTIFIER(0).getSymbol().text;
        tabla.insertar(nombre,tipo,0,nivel,'variable');
    }
    return ctx.type.length+1;
};


// Visit a parse tree produced by CParser#intT.
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
    return ctx.IDENTIFIER().getSymbol().text;
};


// Visit a parse tree produced by CParser#desigClassdef.
Acontextual.prototype.visitDesigClassdef = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#ifelseDef.
Acontextual.prototype.visitIfelseDef = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#forDef.
Acontextual.prototype.visitForDef = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#whileDef.
Acontextual.prototype.visitWhileDef = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#foreachDef.
Acontextual.prototype.visitForeachDef = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#break.
Acontextual.prototype.visitBreak = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#returnDef.
Acontextual.prototype.visitReturnDef = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#readDef.
Acontextual.prototype.visitReadDef = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#writeDef.
Acontextual.prototype.visitWriteDef = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#blockDef.
Acontextual.prototype.visitBlockDef = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#puntoComa.
Acontextual.prototype.visitPuntoComa = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#asignacion.
Acontextual.prototype.visitAsignacion = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#lista.
Acontextual.prototype.visitLista = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#menosmenos.
Acontextual.prototype.visitMenosmenos = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#masmas.
Acontextual.prototype.visitMasmas = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#bloque.
Acontextual.prototype.visitBloque = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#parteLista.
Acontextual.prototype.visitParteLista = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#condicion.
Acontextual.prototype.visitCondicion = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#cTerm.
Acontextual.prototype.visitCTerm = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#cFact.
Acontextual.prototype.visitCFact = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#expresion.
Acontextual.prototype.visitExpresion = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#termino.
Acontextual.prototype.visitTermino = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#asignador.
Acontextual.prototype.visitAsignador = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#factorNumero.
Acontextual.prototype.visitFactorNumero = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#factorCaracter.
Acontextual.prototype.visitFactorCaracter = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#factorBool.
Acontextual.prototype.visitFactorBool = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#factorNuevo.
Acontextual.prototype.visitFactorNuevo = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#factorExpresion.
Acontextual.prototype.visitFactorExpresion = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#verdad.
Acontextual.prototype.visitVerdad = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#falso.
Acontextual.prototype.visitFalso = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#designador.
Acontextual.prototype.visitDesignador = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#asignarClase.
Acontextual.prototype.visitAsignarClase = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#asignarLista.
Acontextual.prototype.visitAsignarLista = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#igualIgual.
Acontextual.prototype.visitIgualIgual = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#difereteDe.
Acontextual.prototype.visitDifereteDe = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#mayorQue.
Acontextual.prototype.visitMayorQue = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#mayorIgualQue.
Acontextual.prototype.visitMayorIgualQue = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#menorQue.
Acontextual.prototype.visitMenorQue = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#menorIgualQue.
Acontextual.prototype.visitMenorIgualQue = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#sumar.
Acontextual.prototype.visitSumar = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#restar.
Acontextual.prototype.visitRestar = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#multiplicar.
Acontextual.prototype.visitMultiplicar = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#dividir.
Acontextual.prototype.visitDividir = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#modular.
Acontextual.prototype.visitModular = function(ctx) {
    return null;
};






exports.Acontextual = Acontextual;