
var gramarVisitor = require('generated/CParserVisitor').CParserVisitor;

function PrityPrint() {
    gramarVisitor.call(this);
    return this;

}

PrityPrint.prototype=Object.create(gramarVisitor.prototype);
PrityPrint.prototype.constructor = PrityPrint;

var textArea = document.getElementById('consola');

var cont = 0;

function printtab(n) {
    for (num = n; num != 0; num--) {
        textArea.innerHTML = '\n' + textArea.innerHTML + "+++";
    }
    textArea.innerHTML = '\n' + textArea.innerHTML + ">";

    return null;
};


PrityPrint.prototype.visitProgramDef = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.constructor.name;
    cont++;
    for (i=0;i<ctx.declarations().length;i++) {
        PrityPrint.visit(ctx.declarations(i));
    }
    cont--;
    cont++;
    for (i=0;i<ctx.methodDecl().length;i++) {
        PrityPrint.visit(ctx.methodDecl(i));
    }
    cont--;
    return null;
};

PrityPrint.prototype.visitDeclaracionConst = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.constructor.name;
    cont++;
    PrityPrint.visit(ctx.constDecl());
    cont--;
    return null;
};

PrityPrint.prototype.visitDeclaracionVariable = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.constructor.name;
    cont++;
    PrityPrint.visit(ctx.varDecl());
    cont--;
    return null;

};

PrityPrint.prototype.visitDeclaracionClase = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.constructor.name;
    cont++;
    PrityPrint.visit(ctx.classDecl());
    cont--;
    return null;

};

PrityPrint.prototype.visitConstante = function (ctx) {

    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.constructor.name;
    cont++;
    PrityPrint.visit(ctx.type());
    PrityPrint.visit(ctx.numStr());
    cont--;
    return null;
};

PrityPrint.prototype.visitNumero = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.constructor.name + ctx.NUMBER().getSymbol().text;
    cont++;
    cont--;
    return null;
};

PrityPrint.prototype.visitChar = function (ctx) {
    printtab(cont);
    textArea.innerHTML = + textArea.innerHTML + ctx.constructor.name + ctx.CHAR().getSymbol().text;
    cont++;
    cont--;
    return null;
};

PrityPrint.prototype.visitVariable = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.constructor.name;
    cont++;
    PrityPrint.visit(ctx.type());
    cont--;
    return null;
};

PrityPrint.prototype.visitClase = function (ctx){
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.constructor.name;
    for (i=0;i<ctx.classDecl().length;i++) {
        PrityPrint.visit(ctx.varDecl(i));
    }
    cont--;
    return null;
};

PrityPrint.prototype.visitMetodo = function (ctx){
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.constructor.name;
    cont++;
    PrityPrint.visit(ctx.tipoMet());

    try{
        PrityPrint.visit(ctx.formPars());
    }
    catch(err){

    }

    for (i=0;i<ctx().methodDecl().length;i++) {
        PrityPrint.visit(ctx.varDecl(i));
    }

    PrityPrint.visit(ctx.block());
    cont--;

    return null;
};

PrityPrint.prototype.visitTipoDecla = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.constructor.name;
    cont++;
    PrityPrint.visit(ctx.type());
    cont--;
    return null;
};

PrityPrint.prototype.visitVoid = function (ctx) {
    printtab(cont);
    textArea.innerHTML = + textArea.innerHTML + ctx.constructor.name + ctx.VOID().getSymbol().text;
    cont++;
    cont--;
    return null;
};

PrityPrint.prototype.visitDefVarMul = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.constructor.name;
    cont++;
    PrityPrint.visit(ctx.type());
    for (i=0;i<ctx.formPars().length;i++) {
        PrityPrint.visit(ctx.type(i));
    }
    cont--;
    return null;
};

PrityPrint.prototype.visitIntT = function (ctx) {
    printtab(cont);
    textArea.innerHTML = + textArea.innerHTML + ctx.constructor.name + ctx.INT().getSymbol().text;
    cont++;
    cont--;
    return null;
};

PrityPrint.prototype.visitCharT = function (ctx) {
    printtab(cont);
    textArea.innerHTML = + textArea.innerHTML + ctx.constructor.name + ctx.CHAR().getSymbol().text;
    cont++;
    cont--;
    return null;
};

PrityPrint.prototype.visitFloatT = function (ctx) {
    printtab(cont);
    textArea.innerHTML = + textArea.innerHTML + ctx.constructor.name + ctx.FLOAT().getSymbol().text;
    cont++;
    cont--;
    return null;
};

PrityPrint.prototype.visitBoolT = function (ctx) {
    printtab(cont);
    textArea.innerHTML = + textArea.innerHTML + ctx.constructor.name + ctx.BOOL().getSymbol().text;
    cont++;
    cont--;
    return null;
};

PrityPrint.prototype.visitStringT = function (ctx) {
    printtab(cont);
    textArea.innerHTML = + textArea.innerHTML + ctx.constructor.name + ctx.STRING().getSymbol().text;
    cont++;
    cont--;
    return null;
};

PrityPrint.prototype.visitIdT = function (ctx) {
    printtab(cont);
    textArea.innerHTML = + textArea.innerHTML + ctx.constructor.name + ctx.IDENTIFIER().getSymbol().text;
    cont++;
    cont--;
    return null;
};

PrityPrint.prototype.visitDesigClassdef = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.constructor.name;
    cont++;
    PrityPrint.visit(ctx.designator());
    PrityPrint.visit(ctx.asignation());
    cont--;
    return null;
};

PrityPrint.prototype.visitIfelseDef = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.constructor.name;
    cont++;
    PrityPrint.visit(ctx.condition());
    PrityPrint.visit(ctx.statement());
    try{
        PrityPrint.visit(ctx.statement());
    }
    catch(err){

    }
    PrityPrint.visit(ctx.statement());
    cont--;
    return null;
};

PrityPrint.prototype.visitForDef = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.constructor.name;
    cont++;
    PrityPrint.visit(ctx.expr());
    try{
        PrityPrint.visit(ctx.condition());
    }
    catch(err){

    }
    try{
        PrityPrint.visit(ctx.statement());
    }
    catch(err){

    }
    PrityPrint.visit(ctx.statement());
    cont--;
    return null;
};

PrityPrint.prototype.visitWhileDef = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.constructor.name;
    cont++;
    PrityPrint.visit(ctx.condition());
    PrityPrint.visit(ctx.statement());
    cont--;
    return null;
};

PrityPrint.prototype.visitForeachDef = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.constructor.name;
    cont++;
    PrityPrint.visit(ctx.statement());
    cont--;
    return null;
};

PrityPrint.prototype.visitBreak = function (ctx) {
    printtab(cont);
    textArea.innerHTML = + textArea.innerHTML + ctx.constructor.name + ctx.BRAKE().symbol.text;
    textArea.innerHTML = + textArea.innerHTML + ctx.constructor.name + ctx.PUNTOCOMA.symbol.text;
    cont++;
    PrityPrint.visit(ctx.statement());
    cont--;
    return null;
};

PrityPrint.prototype.visitReturnDef = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name;
    cont++;
    for (i=0;i<ctx.statement().length;i++) {
        PrityPrint.visit(ctx.expr(i));
    }
    cont--;
    return null;
};

PrityPrint.prototype.visitReadDef = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name;
    cont++;
    PrityPrint.visit(ctx.designator());
    cont--;
    return null;
};

PrityPrint.prototype.visitWriteDef = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name;
    cont++;
    PrityPrint.visit(ctx.expr());
    for (i=0;i<ctx.statement().length;i++) {
        textArea.innerHTML = + textArea.innerHTML + ctx.name + ctx.COMA.symbol.text;
        textArea.innerHTML = + textArea.innerHTML + ctx.name + ctx.NUMBER.symbol.text;
    }
    textArea.innerHTML = + textArea.innerHTML + ctx.name + ctx.PUNTOCOMA.symbol.text;
    cont--;
    return null;
};

PrityPrint.prototype.visitBlockDef = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name;
    cont++;
    PrityPrint.visit(ctx.block());
    cont--;
    return null;
};

PrityPrint.prototype.visitPuntoComa = function (ctx) {
    printtab(cont);
    textArea.innerHTML = + textArea.innerHTML + ctx.name + ctx.PUNTOCOMA.symbol.text;
    cont++;
    cont--;
    return null;
};

PrityPrint.prototype.visitAsignacion = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name;
    cont++;
    for (i=0;i<ctx().length;i++) {
        PrityPrint.visit(ctx.actPars(i));
    }
    cont--;
    return null;
};

PrityPrint.prototype.visitLista = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name;
    cont++;
    PrityPrint.visit(ctx.expr());
    cont--;
    return null;
};

PrityPrint.prototype.visitMenosmenos = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name;
    cont++;
    textArea.innerHTML = + textArea.innerHTML + ctx.name + ctx.AUMENTO.symbol.text;
    cont--;
    return null;
};

PrityPrint.prototype.visitMasmas = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name;
    cont++;
    textArea.innerHTML = + textArea.innerHTML + ctx.name + ctx.DISMINUCION.symbol.text;
    cont--;
    return null;
};

PrityPrint.prototype.visitBloque = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name;
    cont++;
    for (i=0;i<ctx.block().length;i++) {
        PrityPrint.visit(ctx.statement(i));
    }
    cont--;
    return null;
};

PrityPrint.prototype.visitParteLista = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name;
    cont++;
    PrityPrint.visit(ctx.expr());
    for (i=0;i<ctx.actPars().length;i++) {
        textArea.innerHTML = + textArea.innerHTML + ctx.name + ctx.COMA.symbol.text;
        PrityPrint.visit(ctx.expr(i));
    }
    cont--;
    return null;
};

PrityPrint.prototype.visitCondicion = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name;
    cont++;
    PrityPrint.visit(ctx.condTerm());
    for (i=0;i<ctx.condition().length;i++) {
        textArea.innerHTML = + textArea.innerHTML + ctx.name + ctx.OR.symbol.text;
        PrityPrint.visit(ctx.condTerm(i));
    }
    cont--;
    return null;
};

PrityPrint.prototype.visitCTerm = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name;
    cont++;
    PrityPrint.visit(ctx.condFact());
    for (i=0;i<ctx.condTerm().length;i++) {
        textArea.innerHTML = + textArea.innerHTML + ctx.name + ctx.AND.symbol.text;
        PrityPrint.visit(ctx.condFact(i));
    }
    cont--;
    return null;
};

PrityPrint.prototype.visitCFact = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name;
    cont++;
    PrityPrint.visit(ctx.expr());
    PrityPrint.visit(ctx.relop());
    PrityPrint.visit(ctx.expr());
    cont--;
    return null;
};

PrityPrint.prototype.visitExpresion = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name;
    cont++;
    textArea.innerHTML = + textArea.innerHTML + ctx.name + ctx.RESTA.symbol.text;
    PrityPrint.visit(ctx.term());
    for (i=0;i<ctx.expr().length;i++) {
        PrityPrint.visit(ctx.addop(i));
        PrityPrint.visit(ctx.term(i));
    }
    cont--;
    return null;
};

PrityPrint.prototype.visitTermino = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name;
    cont++;
    PrityPrint.visit(ctx.factor());
    for (i=0;i<ctx.term().length;i++) {
        PrityPrint.visit(ctx.mulop(i));
        PrityPrint.visit(ctx.factor(i));
    }
    cont--;
    return null;
};

PrityPrint.prototype.visitAsignador = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name;
    cont++;
    PrityPrint.visit(ctx.designator());
    try{
        PrityPrint.visit(ctx.actPars());
    }
    catch(err){

    }
    cont--;
    return null;
};

PrityPrint.prototype.visitFactorNumero = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name;
    cont++;
    textArea.innerHTML = + textArea.innerHTML + ctx.name + ctx.NUMBER.symbol.text;
    cont--;
    return null;
};

PrityPrint.prototype.visitFactorCaracter = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name;
    cont++;
    textArea.innerHTML = + textArea.innerHTML + ctx.name + ctx.CHAR.symbol.text;
    cont--;
    return null;
};

PrityPrint.prototype.visitAsignador = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name;
    cont++;
    PrityPrint.visit(ctx.booleano());
    cont--;
    return null;
};

PrityPrint.prototype.visitFactorNumero = function (ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name+ ctx.NUMBER.symbol.text;
    cont++;
    cont--;
    return null;
};

PrityPrint.prototype.visitFactorCaracter = function(ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name+ ctx.CHAR.symbol.text;
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#factorBool.
PrityPrint.prototype.visitFactorBool = function(ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name;
    cont++;
    PrityPrint.visit(ctx.booleano());
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#factorNuevo.
PrityPrint.prototype.visitFactorNuevo = function(ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name+ ctx.NEW.symbol.text;
    textArea.innerHTML = textArea.innerHTML + ctx.name+ ctx.IDENTIFIER.symbol.text;
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#factorExpresion.
PrityPrint.prototype.visitFactorExpresion = function(ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name;
    cont++;
    PrityPrint.visit(ctx.expr());
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#verdad.
PrityPrint.prototype.visitVerdad = function(ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name+ ctx.TRUE.symbol.text;
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#falso.
PrityPrint.prototype.visitFalso = function(ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name+ ctx.FALSE.symbol.text;
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#designador.
PrityPrint.prototype.visitDesignador = function(ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name;
    cont++;
    PrityPrint.visit(ctx.factor());
    for (i=0;i<ctx().asigClass().length;i++) {
        PrityPrint.visit(ctx.asigClass(i));
        PrityPrint.visit(ctx.asigClass(i));
    }
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#asignarClase.
PrityPrint.prototype.visitAsignarClase = function(ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name+ ctx.IDENTIFIER.symbol.text;
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#asignarLista.
PrityPrint.prototype.visitAsignarLista = function(ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name;
    cont++;
    PrityPrint.visit(ctx.expr());
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#igualIgual.
PrityPrint.prototype.visitIgualIgual = function(ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name+ ctx.COMPARACION.symbol.text;
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#difereteDe.
PrityPrint.prototype.visitDifereteDe = function(ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name+ ctx.DIFERENTE.symbol.text;
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#mayorQue.
PrityPrint.prototype.visitMayorQue = function(ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name+ ctx.MAYOR.symbol.text;
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#mayorIgualQue.
PrityPrint.prototype.visitMayorIgualQue = function(ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name+ ctx.MAYORIGUAL.symbol.text;
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#menorQue.
PrityPrint.prototype.visitMenorQue = function(ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name+ ctx.MENOR.symbol.text;
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#menorIgualQue.
PrityPrint.prototype.visitMenorIgualQue = function(ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name+ ctx.MENORIGUAL.symbol.text;
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#sumar.
PrityPrint.prototype.visitSumar = function(ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name+ ctx.SUMA.symbol.text;
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#restar.
PrityPrint.prototype.visitRestar = function(ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name+ ctx.RESTA.symbol.text;
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#multiplicar.
PrityPrint.prototype.visitMultiplicar = function(ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name+ ctx.MUL.symbol.text;
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#dividir.
PrityPrint.prototype.visitDividir = function(ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name+ ctx.DIV.symbol.text;
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#modular.
PrityPrint.prototype.visitModular = function(ctx) {
    printtab(cont);
    textArea.innerHTML = textArea.innerHTML + ctx.name+ ctx.MODULO.symbol.text;
    cont++;
    cont--;
    return null;
};



exports.PrityPrint = PrityPrint;