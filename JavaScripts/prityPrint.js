
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
        textArea.innerHTML +=  "+++";
    }
    textArea.innerHTML+= ">";

    return null;
};


PrityPrint.prototype.visitProgramDef = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    for (i=0;i<=ctx.declarations().length-1;i++) {
        this.visit(ctx.declarations(i));
    }
    cont--;
    cont++;

    for (i=0;i<=ctx.methodDecl().length-1;i++) {
        this.visit(ctx.methodDecl(i));
    }
    cont--;
    return null;
};

PrityPrint.prototype.visitDeclaracionConst = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    this.visit(ctx.constDecl());
    cont--;
    return null;
};

PrityPrint.prototype.visitDeclaracionVariable = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    this.visit(ctx.varDecl());
    cont--;
    return null;

};

PrityPrint.prototype.visitDeclaracionClase = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    this.visit(ctx.classDecl());
    cont--;
    return null;

};

PrityPrint.prototype.visitConstante = function (ctx) {

    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + " --> "+ ctx.prototype.IDENTIFIER().getSymbol().text + '\n';
    cont++;
    this.visit(ctx.type());
    this.visit(ctx.numStr());
    cont--;
    return null;
};

PrityPrint.prototype.visitNumero = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + "  -->" + ctx.NUMBER().getSymbol().text + '\n';
    cont++;
    cont--;
    return null;
};

PrityPrint.prototype.visitChar = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + " token --> " + ctx.CHAR().getSymbol().text + '\n';
    cont++;
    cont--;
    return null;
};

PrityPrint.prototype.visitVariable = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name+" token --> "+ctx.IDENTIFIER(0).getSymbol().text + '\n';
    cont++;
    this.visit(ctx.type());
    cont--;
    return null;
};

PrityPrint.prototype.visitClase = function (ctx){
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name +" token --> "+ctx.IDENTIFIER().getSymbol().text + '\n';
    for (i=0;i<=ctx.varDecl().length-1;i++) {
        this.visit(ctx.varDecl(i));
    }
    cont--;
    return null;
};

PrityPrint.prototype.visitMetodo = function (ctx){
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name+ " token --> "+ctx.IDENTIFIER.getSymbol().text + '\n';
    cont++;
    this.visit(ctx.tipoMet());

    try{
        this.visit(ctx.formPars());
    }
    catch(err){}
    for (i=0;i<=ctx().varDecl().length-1;i++) {
        this.visit(ctx.varDecl(i));
    }

    this.visit(ctx.block());
    cont--;

    return null;
};

PrityPrint.prototype.visitTipoDecla = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    this.visit(ctx.type());
    cont--;
    return null;
};

PrityPrint.prototype.visitVoid = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    cont--;
    return null;
};

PrityPrint.prototype.visitDefVarMul = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    this.visit(ctx.type(0));
    for (i=1;i<ctx.type().length-1;i++) {
        this.visit(ctx.type(i));
    }
    cont--;
    return null;
};

PrityPrint.prototype.visitIntT = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    cont--;
    return null;
};

PrityPrint.prototype.visitCharT = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    cont--;
    return null;
};

PrityPrint.prototype.visitFloatT = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    cont--;
    return null;
};

PrityPrint.prototype.visitBoolT = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    cont--;
    return null;
};

PrityPrint.prototype.visitStringT = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    cont--;
    return null;
};

PrityPrint.prototype.visitIdT = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + " " + ctx.IDENTIFIER().getSymbol().text + '\n';
    cont++;
    cont--;
    return null;
};

PrityPrint.prototype.visitDesigClassdef = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    this.visit(ctx.designator());
    this.visit(ctx.asignation());
    cont--;
    return null;
};

PrityPrint.prototype.visitIfelseDef = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    this.visit(ctx.condition());
    this.visit(ctx.statement());
    try{
        this.visit(ctx.statement());
    }
    catch(err){

    }
    cont--;
    return null;
};

PrityPrint.prototype.visitForDef = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    this.visit(ctx.expr());
    try{
        this.visit(ctx.condition());
    }
    catch(err){}
    try{
        this.visit(ctx.statement());
    }
    catch(err){}
    this.visit(ctx.statement());
    cont--;
    return null;
};

PrityPrint.prototype.visitWhileDef = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    this.visit(ctx.condition());
    this.visit(ctx.statement());
    cont--;
    return null;
};

PrityPrint.prototype.visitForeachDef = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    textArea.innerHTML += " token --> "+ctx.IDENTIFIER(0).getSymbol().text+" token --> "+ctx.IDENTIFIER(1).getSymbol().text," token --> "+ctx.IDENTIFIER(2).getSymbol().text + '\n';

    cont++;
    this.visit(ctx.statement());
    cont--;
    return null;
};

PrityPrint.prototype.visitBreak = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    this.visit(ctx.statement());
    cont--;
    return null;
};

PrityPrint.prototype.visitReturnDef = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    try {
        this.visit(ctx.expr());
    }
    catch (error){}
    cont--;
    return null;
};

PrityPrint.prototype.visitReadDef = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    this.visit(ctx.designator());
    cont--;
    return null;
};

PrityPrint.prototype.visitWriteDef = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    this.visit(ctx.expr());
    cont--;
    return null;
};

PrityPrint.prototype.visitBlockDef = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    this.visit(ctx.block());
    cont--;
    return null;
};

PrityPrint.prototype.visitPuntoComa = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    cont--;
    return null;
};

PrityPrint.prototype.visitAsignacion = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    this.visit(ctx.expr());
    cont--;
    return null;
};

PrityPrint.prototype.visitLista = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    try{
        this.visit(ctx.actPars());
    }
    catch (error){}
    cont--;
    return null;
};

PrityPrint.prototype.visitMenosmenos = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    cont--;
    return null;
};

PrityPrint.prototype.visitMasmas = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    cont--;
    return null;
};

PrityPrint.prototype.visitBloque = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    try {
        this.visit(ctx.statement(i));
    }
    catch (error){}
    cont--;
    return null;
};

PrityPrint.prototype.visitParteLista = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    this.visit(ctx.expr(0));
    try{
        this.visit(ctx.expr(1));
    }
    catch (error){}

    cont--;
    return null;
};

PrityPrint.prototype.visitCondicion = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    this.visit(ctx.condTerm(0));
    try{
        this.visit(ctx.condTerm(1));
    }
    catch (error){}
    cont--;
    return null;
};

PrityPrint.prototype.visitCTerm = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    this.visit(ctx.condFact());
    try{
        this.visit(ctx.condFact(1));
    }
    catch (error){}
    cont--;
    return null;
};

PrityPrint.prototype.visitCFact = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    this.visit(ctx.expr());
    this.visit(ctx.relop());
    this.visit(ctx.expr());
    cont--;
    return null;
};

PrityPrint.prototype.visitExpresion = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    this.visit(ctx.term(0));
    for (i=0;i<=ctx.addop().length;i++) {
        this.visit(ctx.addop(i));
        this.visit(ctx.term(i+1));
    }
    cont--;
    return null;
};

PrityPrint.prototype.visitTermino = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    this.visit(ctx.factor(0));
    for (i=0;i<=ctx.term().length;i++) {
        this.visit(ctx.mulop(i));
        this.visit(ctx.factor(i+1));
    }
    cont--;
    return null;
};

PrityPrint.prototype.visitAsignador = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    this.visit(ctx.designator());
    try{
        this.visit(ctx.actPars());
    }
    catch(err){

    }
    cont--;
    return null;
};

PrityPrint.prototype.visitFactorNumero = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + " " + ctx.NUMBER().getSymbol().text + '\n';
    cont++;

    cont--;
    return null;
};

PrityPrint.prototype.visitFactorCaracter = function (ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name+ " " + ctx.CHAR().getSymbol().text + '\n';
    cont++;
    cont--;
    return null;
};

// Visit a parse tree produced by CParser#factorBool.
PrityPrint.prototype.visitFactorBool = function(ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    this.visit(ctx.booleano());
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#factorNuevo.
PrityPrint.prototype.visitFactorNuevo = function(ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name+ " " + ctx.IDENTIFIER().getSymbol().text + '\n';
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#factorExpresion.
PrityPrint.prototype.visitFactorExpresion = function(ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    this.visit(ctx.expr());
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#verdad.
PrityPrint.prototype.visitVerdad = function(ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#falso.
PrityPrint.prototype.visitFalso = function(ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#designador.
PrityPrint.prototype.visitDesignador = function(ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    for (i=0;i<=ctx().asigClass().length;i++) {
        this.visit(ctx.asigClass(i));
    }
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#asignarClase.
PrityPrint.prototype.visitAsignarClase = function(ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name+ " " + ctx.IDENTIFIER().getSymbol().text + '\n';
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#asignarLista.
PrityPrint.prototype.visitAsignarLista = function(ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    this.visit(ctx.expr());
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#igualIgual.
PrityPrint.prototype.visitIgualIgual = function(ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#difereteDe.
PrityPrint.prototype.visitDifereteDe = function(ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#mayorQue.
PrityPrint.prototype.visitMayorQue = function(ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#mayorIgualQue.
PrityPrint.prototype.visitMayorIgualQue = function(ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#menorQue.
PrityPrint.prototype.visitMenorQue = function(ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#menorIgualQue.
PrityPrint.prototype.visitMenorIgualQue = function(ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#sumar.
PrityPrint.prototype.visitSumar = function(ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#restar.
PrityPrint.prototype.visitRestar = function(ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#multiplicar.
PrityPrint.prototype.visitMultiplicar = function(ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#dividir.
PrityPrint.prototype.visitDividir = function(ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    cont--;
    return null;
};


// Visit a parse tree produced by CParser#modular.
PrityPrint.prototype.visitModular = function(ctx) {
    printtab(cont);
    textArea.innerHTML+= ctx.constructor.name + '\n';
    cont++;
    cont--;
    return null;
};



exports.PrityPrint = PrityPrint;