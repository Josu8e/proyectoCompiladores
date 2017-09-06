// Generated from C:/Users/katty/Dropbox/compi/Nueva carpeta\CParser.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by CParser.
function CParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

CParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
CParserListener.prototype.constructor = CParserListener;

// Enter a parse tree produced by CParser#programDef.
CParserListener.prototype.enterProgramDef = function(ctx) {
};

// Exit a parse tree produced by CParser#programDef.
CParserListener.prototype.exitProgramDef = function(ctx) {
};


// Enter a parse tree produced by CParser#declaracionConst.
CParserListener.prototype.enterDeclaracionConst = function(ctx) {
};

// Exit a parse tree produced by CParser#declaracionConst.
CParserListener.prototype.exitDeclaracionConst = function(ctx) {
};


// Enter a parse tree produced by CParser#declaracionVariable.
CParserListener.prototype.enterDeclaracionVariable = function(ctx) {
};

// Exit a parse tree produced by CParser#declaracionVariable.
CParserListener.prototype.exitDeclaracionVariable = function(ctx) {
};


// Enter a parse tree produced by CParser#declaracionClase.
CParserListener.prototype.enterDeclaracionClase = function(ctx) {
};

// Exit a parse tree produced by CParser#declaracionClase.
CParserListener.prototype.exitDeclaracionClase = function(ctx) {
};


// Enter a parse tree produced by CParser#constante.
CParserListener.prototype.enterConstante = function(ctx) {
};

// Exit a parse tree produced by CParser#constante.
CParserListener.prototype.exitConstante = function(ctx) {
};


// Enter a parse tree produced by CParser#numero.
CParserListener.prototype.enterNumero = function(ctx) {
};

// Exit a parse tree produced by CParser#numero.
CParserListener.prototype.exitNumero = function(ctx) {
};


// Enter a parse tree produced by CParser#char.
CParserListener.prototype.enterChar = function(ctx) {
};

// Exit a parse tree produced by CParser#char.
CParserListener.prototype.exitChar = function(ctx) {
};


// Enter a parse tree produced by CParser#variable.
CParserListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by CParser#variable.
CParserListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by CParser#clase.
CParserListener.prototype.enterClase = function(ctx) {
};

// Exit a parse tree produced by CParser#clase.
CParserListener.prototype.exitClase = function(ctx) {
};


// Enter a parse tree produced by CParser#metodo.
CParserListener.prototype.enterMetodo = function(ctx) {
};

// Exit a parse tree produced by CParser#metodo.
CParserListener.prototype.exitMetodo = function(ctx) {
};


// Enter a parse tree produced by CParser#tipoDecla.
CParserListener.prototype.enterTipoDecla = function(ctx) {
};

// Exit a parse tree produced by CParser#tipoDecla.
CParserListener.prototype.exitTipoDecla = function(ctx) {
};


// Enter a parse tree produced by CParser#void.
CParserListener.prototype.enterVoid = function(ctx) {
};

// Exit a parse tree produced by CParser#void.
CParserListener.prototype.exitVoid = function(ctx) {
};


// Enter a parse tree produced by CParser#defVarMul.
CParserListener.prototype.enterDefVarMul = function(ctx) {
};

// Exit a parse tree produced by CParser#defVarMul.
CParserListener.prototype.exitDefVarMul = function(ctx) {
};


// Enter a parse tree produced by CParser#intT.
CParserListener.prototype.enterIntT = function(ctx) {
};

// Exit a parse tree produced by CParser#intT.
CParserListener.prototype.exitIntT = function(ctx) {
};


// Enter a parse tree produced by CParser#charT.
CParserListener.prototype.enterCharT = function(ctx) {
};

// Exit a parse tree produced by CParser#charT.
CParserListener.prototype.exitCharT = function(ctx) {
};


// Enter a parse tree produced by CParser#floatT.
CParserListener.prototype.enterFloatT = function(ctx) {
};

// Exit a parse tree produced by CParser#floatT.
CParserListener.prototype.exitFloatT = function(ctx) {
};


// Enter a parse tree produced by CParser#boolT.
CParserListener.prototype.enterBoolT = function(ctx) {
};

// Exit a parse tree produced by CParser#boolT.
CParserListener.prototype.exitBoolT = function(ctx) {
};


// Enter a parse tree produced by CParser#stringT.
CParserListener.prototype.enterStringT = function(ctx) {
};

// Exit a parse tree produced by CParser#stringT.
CParserListener.prototype.exitStringT = function(ctx) {
};


// Enter a parse tree produced by CParser#idT.
CParserListener.prototype.enterIdT = function(ctx) {
};

// Exit a parse tree produced by CParser#idT.
CParserListener.prototype.exitIdT = function(ctx) {
};


// Enter a parse tree produced by CParser#desigClassdef.
CParserListener.prototype.enterDesigClassdef = function(ctx) {
};

// Exit a parse tree produced by CParser#desigClassdef.
CParserListener.prototype.exitDesigClassdef = function(ctx) {
};


// Enter a parse tree produced by CParser#ifelseDef.
CParserListener.prototype.enterIfelseDef = function(ctx) {
};

// Exit a parse tree produced by CParser#ifelseDef.
CParserListener.prototype.exitIfelseDef = function(ctx) {
};


// Enter a parse tree produced by CParser#forDef.
CParserListener.prototype.enterForDef = function(ctx) {
};

// Exit a parse tree produced by CParser#forDef.
CParserListener.prototype.exitForDef = function(ctx) {
};


// Enter a parse tree produced by CParser#whileDef.
CParserListener.prototype.enterWhileDef = function(ctx) {
};

// Exit a parse tree produced by CParser#whileDef.
CParserListener.prototype.exitWhileDef = function(ctx) {
};


// Enter a parse tree produced by CParser#foreachDef.
CParserListener.prototype.enterForeachDef = function(ctx) {
};

// Exit a parse tree produced by CParser#foreachDef.
CParserListener.prototype.exitForeachDef = function(ctx) {
};


// Enter a parse tree produced by CParser#break.
CParserListener.prototype.enterBreak = function(ctx) {
};

// Exit a parse tree produced by CParser#break.
CParserListener.prototype.exitBreak = function(ctx) {
};


// Enter a parse tree produced by CParser#returnDef.
CParserListener.prototype.enterReturnDef = function(ctx) {
};

// Exit a parse tree produced by CParser#returnDef.
CParserListener.prototype.exitReturnDef = function(ctx) {
};


// Enter a parse tree produced by CParser#readDef.
CParserListener.prototype.enterReadDef = function(ctx) {
};

// Exit a parse tree produced by CParser#readDef.
CParserListener.prototype.exitReadDef = function(ctx) {
};


// Enter a parse tree produced by CParser#writeDef.
CParserListener.prototype.enterWriteDef = function(ctx) {
};

// Exit a parse tree produced by CParser#writeDef.
CParserListener.prototype.exitWriteDef = function(ctx) {
};


// Enter a parse tree produced by CParser#blockDef.
CParserListener.prototype.enterBlockDef = function(ctx) {
};

// Exit a parse tree produced by CParser#blockDef.
CParserListener.prototype.exitBlockDef = function(ctx) {
};


// Enter a parse tree produced by CParser#puntoComa.
CParserListener.prototype.enterPuntoComa = function(ctx) {
};

// Exit a parse tree produced by CParser#puntoComa.
CParserListener.prototype.exitPuntoComa = function(ctx) {
};


// Enter a parse tree produced by CParser#asignacion.
CParserListener.prototype.enterAsignacion = function(ctx) {
};

// Exit a parse tree produced by CParser#asignacion.
CParserListener.prototype.exitAsignacion = function(ctx) {
};


// Enter a parse tree produced by CParser#lista.
CParserListener.prototype.enterLista = function(ctx) {
};

// Exit a parse tree produced by CParser#lista.
CParserListener.prototype.exitLista = function(ctx) {
};


// Enter a parse tree produced by CParser#menosmenos.
CParserListener.prototype.enterMenosmenos = function(ctx) {
};

// Exit a parse tree produced by CParser#menosmenos.
CParserListener.prototype.exitMenosmenos = function(ctx) {
};


// Enter a parse tree produced by CParser#masmas.
CParserListener.prototype.enterMasmas = function(ctx) {
};

// Exit a parse tree produced by CParser#masmas.
CParserListener.prototype.exitMasmas = function(ctx) {
};


// Enter a parse tree produced by CParser#bloque.
CParserListener.prototype.enterBloque = function(ctx) {
};

// Exit a parse tree produced by CParser#bloque.
CParserListener.prototype.exitBloque = function(ctx) {
};


// Enter a parse tree produced by CParser#parteLista.
CParserListener.prototype.enterParteLista = function(ctx) {
};

// Exit a parse tree produced by CParser#parteLista.
CParserListener.prototype.exitParteLista = function(ctx) {
};


// Enter a parse tree produced by CParser#condicion.
CParserListener.prototype.enterCondicion = function(ctx) {
};

// Exit a parse tree produced by CParser#condicion.
CParserListener.prototype.exitCondicion = function(ctx) {
};


// Enter a parse tree produced by CParser#cTerm.
CParserListener.prototype.enterCTerm = function(ctx) {
};

// Exit a parse tree produced by CParser#cTerm.
CParserListener.prototype.exitCTerm = function(ctx) {
};


// Enter a parse tree produced by CParser#cFact.
CParserListener.prototype.enterCFact = function(ctx) {
};

// Exit a parse tree produced by CParser#cFact.
CParserListener.prototype.exitCFact = function(ctx) {
};


// Enter a parse tree produced by CParser#expresion.
CParserListener.prototype.enterExpresion = function(ctx) {
};

// Exit a parse tree produced by CParser#expresion.
CParserListener.prototype.exitExpresion = function(ctx) {
};


// Enter a parse tree produced by CParser#termino.
CParserListener.prototype.enterTermino = function(ctx) {
};

// Exit a parse tree produced by CParser#termino.
CParserListener.prototype.exitTermino = function(ctx) {
};


// Enter a parse tree produced by CParser#asignador.
CParserListener.prototype.enterAsignador = function(ctx) {
};

// Exit a parse tree produced by CParser#asignador.
CParserListener.prototype.exitAsignador = function(ctx) {
};


// Enter a parse tree produced by CParser#factorNumero.
CParserListener.prototype.enterFactorNumero = function(ctx) {
};

// Exit a parse tree produced by CParser#factorNumero.
CParserListener.prototype.exitFactorNumero = function(ctx) {
};


// Enter a parse tree produced by CParser#factorCaracter.
CParserListener.prototype.enterFactorCaracter = function(ctx) {
};

// Exit a parse tree produced by CParser#factorCaracter.
CParserListener.prototype.exitFactorCaracter = function(ctx) {
};


// Enter a parse tree produced by CParser#factorBool.
CParserListener.prototype.enterFactorBool = function(ctx) {
};

// Exit a parse tree produced by CParser#factorBool.
CParserListener.prototype.exitFactorBool = function(ctx) {
};


// Enter a parse tree produced by CParser#factorNuevo.
CParserListener.prototype.enterFactorNuevo = function(ctx) {
};

// Exit a parse tree produced by CParser#factorNuevo.
CParserListener.prototype.exitFactorNuevo = function(ctx) {
};


// Enter a parse tree produced by CParser#factorExpresion.
CParserListener.prototype.enterFactorExpresion = function(ctx) {
};

// Exit a parse tree produced by CParser#factorExpresion.
CParserListener.prototype.exitFactorExpresion = function(ctx) {
};


// Enter a parse tree produced by CParser#verdad.
CParserListener.prototype.enterVerdad = function(ctx) {
};

// Exit a parse tree produced by CParser#verdad.
CParserListener.prototype.exitVerdad = function(ctx) {
};


// Enter a parse tree produced by CParser#falso.
CParserListener.prototype.enterFalso = function(ctx) {
};

// Exit a parse tree produced by CParser#falso.
CParserListener.prototype.exitFalso = function(ctx) {
};


// Enter a parse tree produced by CParser#designador.
CParserListener.prototype.enterDesignador = function(ctx) {
};

// Exit a parse tree produced by CParser#designador.
CParserListener.prototype.exitDesignador = function(ctx) {
};


// Enter a parse tree produced by CParser#asignarClase.
CParserListener.prototype.enterAsignarClase = function(ctx) {
};

// Exit a parse tree produced by CParser#asignarClase.
CParserListener.prototype.exitAsignarClase = function(ctx) {
};


// Enter a parse tree produced by CParser#asignarLista.
CParserListener.prototype.enterAsignarLista = function(ctx) {
};

// Exit a parse tree produced by CParser#asignarLista.
CParserListener.prototype.exitAsignarLista = function(ctx) {
};


// Enter a parse tree produced by CParser#igualIgual.
CParserListener.prototype.enterIgualIgual = function(ctx) {
};

// Exit a parse tree produced by CParser#igualIgual.
CParserListener.prototype.exitIgualIgual = function(ctx) {
};


// Enter a parse tree produced by CParser#difereteDe.
CParserListener.prototype.enterDifereteDe = function(ctx) {
};

// Exit a parse tree produced by CParser#difereteDe.
CParserListener.prototype.exitDifereteDe = function(ctx) {
};


// Enter a parse tree produced by CParser#mayorQue.
CParserListener.prototype.enterMayorQue = function(ctx) {
};

// Exit a parse tree produced by CParser#mayorQue.
CParserListener.prototype.exitMayorQue = function(ctx) {
};


// Enter a parse tree produced by CParser#mayorIgualQue.
CParserListener.prototype.enterMayorIgualQue = function(ctx) {
};

// Exit a parse tree produced by CParser#mayorIgualQue.
CParserListener.prototype.exitMayorIgualQue = function(ctx) {
};


// Enter a parse tree produced by CParser#menorQue.
CParserListener.prototype.enterMenorQue = function(ctx) {
};

// Exit a parse tree produced by CParser#menorQue.
CParserListener.prototype.exitMenorQue = function(ctx) {
};


// Enter a parse tree produced by CParser#menorIgualQue.
CParserListener.prototype.enterMenorIgualQue = function(ctx) {
};

// Exit a parse tree produced by CParser#menorIgualQue.
CParserListener.prototype.exitMenorIgualQue = function(ctx) {
};


// Enter a parse tree produced by CParser#sumar.
CParserListener.prototype.enterSumar = function(ctx) {
};

// Exit a parse tree produced by CParser#sumar.
CParserListener.prototype.exitSumar = function(ctx) {
};


// Enter a parse tree produced by CParser#restar.
CParserListener.prototype.enterRestar = function(ctx) {
};

// Exit a parse tree produced by CParser#restar.
CParserListener.prototype.exitRestar = function(ctx) {
};


// Enter a parse tree produced by CParser#multiplicar.
CParserListener.prototype.enterMultiplicar = function(ctx) {
};

// Exit a parse tree produced by CParser#multiplicar.
CParserListener.prototype.exitMultiplicar = function(ctx) {
};


// Enter a parse tree produced by CParser#dividir.
CParserListener.prototype.enterDividir = function(ctx) {
};

// Exit a parse tree produced by CParser#dividir.
CParserListener.prototype.exitDividir = function(ctx) {
};


// Enter a parse tree produced by CParser#modular.
CParserListener.prototype.enterModular = function(ctx) {
};

// Exit a parse tree produced by CParser#modular.
CParserListener.prototype.exitModular = function(ctx) {
};



exports.CParserListener = CParserListener;