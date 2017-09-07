var gramarVisitor = require('generated/CParserVisitor').CParserVisitor;


function Acontextual() {
    gramarVisitor.call(this);
    return this;
}

Acontextual.prototype = Object.create(gramarVisitor.prototype);
Acontextual.prototype.constructor = Acontextual;


CParserVisitor.prototype.visitProgramDef = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#declaracionConst.
CParserVisitor.prototype.visitDeclaracionConst = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#declaracionVariable.
CParserVisitor.prototype.visitDeclaracionVariable = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#declaracionClase.
CParserVisitor.prototype.visitDeclaracionClase = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#constante.
CParserVisitor.prototype.visitConstante = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#numero.
CParserVisitor.prototype.visitNumero = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#char.
CParserVisitor.prototype.visitChar = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#variable.
CParserVisitor.prototype.visitVariable = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#clase.
CParserVisitor.prototype.visitClase = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#metodo.
CParserVisitor.prototype.visitMetodo = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#tipoDecla.
CParserVisitor.prototype.visitTipoDecla = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#void.
CParserVisitor.prototype.visitVoid = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#defVarMul.
CParserVisitor.prototype.visitDefVarMul = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#intT.
CParserVisitor.prototype.visitIntT = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#charT.
CParserVisitor.prototype.visitCharT = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#floatT.
CParserVisitor.prototype.visitFloatT = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#boolT.
CParserVisitor.prototype.visitBoolT = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#stringT.
CParserVisitor.prototype.visitStringT = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#idT.
CParserVisitor.prototype.visitIdT = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#desigClassdef.
CParserVisitor.prototype.visitDesigClassdef = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#ifelseDef.
CParserVisitor.prototype.visitIfelseDef = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#forDef.
CParserVisitor.prototype.visitForDef = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#whileDef.
CParserVisitor.prototype.visitWhileDef = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#foreachDef.
CParserVisitor.prototype.visitForeachDef = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#break.
CParserVisitor.prototype.visitBreak = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#returnDef.
CParserVisitor.prototype.visitReturnDef = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#readDef.
CParserVisitor.prototype.visitReadDef = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#writeDef.
CParserVisitor.prototype.visitWriteDef = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#blockDef.
CParserVisitor.prototype.visitBlockDef = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#puntoComa.
CParserVisitor.prototype.visitPuntoComa = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#asignacion.
CParserVisitor.prototype.visitAsignacion = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#lista.
CParserVisitor.prototype.visitLista = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#menosmenos.
CParserVisitor.prototype.visitMenosmenos = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#masmas.
CParserVisitor.prototype.visitMasmas = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#bloque.
CParserVisitor.prototype.visitBloque = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#parteLista.
CParserVisitor.prototype.visitParteLista = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#condicion.
CParserVisitor.prototype.visitCondicion = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#cTerm.
CParserVisitor.prototype.visitCTerm = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#cFact.
CParserVisitor.prototype.visitCFact = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#expresion.
CParserVisitor.prototype.visitExpresion = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#termino.
CParserVisitor.prototype.visitTermino = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#asignador.
CParserVisitor.prototype.visitAsignador = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#factorNumero.
CParserVisitor.prototype.visitFactorNumero = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#factorCaracter.
CParserVisitor.prototype.visitFactorCaracter = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#factorBool.
CParserVisitor.prototype.visitFactorBool = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#factorNuevo.
CParserVisitor.prototype.visitFactorNuevo = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#factorExpresion.
CParserVisitor.prototype.visitFactorExpresion = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#verdad.
CParserVisitor.prototype.visitVerdad = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#falso.
CParserVisitor.prototype.visitFalso = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#designador.
CParserVisitor.prototype.visitDesignador = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#asignarClase.
CParserVisitor.prototype.visitAsignarClase = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#asignarLista.
CParserVisitor.prototype.visitAsignarLista = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#igualIgual.
CParserVisitor.prototype.visitIgualIgual = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#difereteDe.
CParserVisitor.prototype.visitDifereteDe = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#mayorQue.
CParserVisitor.prototype.visitMayorQue = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#mayorIgualQue.
CParserVisitor.prototype.visitMayorIgualQue = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#menorQue.
CParserVisitor.prototype.visitMenorQue = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#menorIgualQue.
CParserVisitor.prototype.visitMenorIgualQue = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#sumar.
CParserVisitor.prototype.visitSumar = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#restar.
CParserVisitor.prototype.visitRestar = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#multiplicar.
CParserVisitor.prototype.visitMultiplicar = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#dividir.
CParserVisitor.prototype.visitDividir = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#modular.
CParserVisitor.prototype.visitModular = function(ctx) {
    return null;
};






exports.Acontextual = Acontextual;