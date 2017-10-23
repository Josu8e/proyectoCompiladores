var gramarVisitor = require('generated/CParserVisitor').CParserVisitor;
var almacen = require('JavaScripts/almacenVariables');
var tabla;

var nivel = 0;
var variabletrabajo;

function visitorInterprete() {
    gramarVisitor.call(this);
    tabla = new almacen.almacenVariables();
    return this;
}

visitorInterprete.prototype = Object.create(gramarVisitor.prototype);
visitorInterprete.prototype.constructor = visitorInterprete;



//your code here :)
visitorInterprete.prototype.visitProgramDef = function(ctx) {
    this.visitChildren(ctx);
    tabla.imprimir();
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

    tabla.insertar(nombre,type,nivel,valor);


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
    tabla.insertar(nombre,tipo,nivel,null);
    for (var i = 1; i<ctx.IDENTIFIER().length;i++){
        nombre = ctx.IDENTIFIER(i).getSymbol().text;
        tabla.insertar(nombre,tipo,nivel,null);
    }
};


// Visit a parse tree produced by CParser#clase.
//toDO: not done
visitorInterprete.prototype.visitClase = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#metodo.
//toDo: not done
visitorInterprete.prototype.visitMetodo = function(ctx) {
    return this.visitChildren(ctx);
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
//toDo: not done, no sabemos que hacer aun
visitorInterprete.prototype.visitDefVarMul = function(ctx) {
    return this.visitChildren(ctx);
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
//fixme: falta definir como vamos a manejar las clases
visitorInterprete.prototype.visitIdT = function(ctx) {
    /*var temp = tabla.buscarClase(ctx.IDENTIFIER().getSymbol().text);
    console.log(ctx.text);
    if (temp == null){
        textArea.innerHTML += textArea.innerHTML += "\n Error en linea "+ ctx.IDENTIFIER().getSymbol().line +"  columna "+ ctx.IDENTIFIER().getSymbol().column + " tipo no definido";
        return 'undefined';
    }
    else {
        return temp.nombre;
    }*/
};

// Visit a parse tree produced by CParser#desigClassdef.
visitorInterprete.prototype.visitDesigClassdef = function(ctx) {
    var nombre = ctx.IDENTIFIER().getSymbol().text;

    variabletrabajo = nombre;

    //toDo: falta saber que hacer si viene "objeto.atributo" o "lista[algo]"
    //code

    this.visit(ctx.asignation());

    //tabla.modificar(nombre,valor);
    variabletrabajo = null;



};


// Visit a parse tree produced by CParser#ifelseDef.
//toDo: not done
visitorInterprete.prototype.visitIfelseDef = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#forDef.
//toDo: not done
visitorInterprete.prototype.visitForDef = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#whileDef.
//toDo: not done
visitorInterprete.prototype.visitWhileDef = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#foreachDef.
//toDo: not done
visitorInterprete.prototype.visitForeachDef = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#break.
//toDo: not done
visitorInterprete.prototype.visitBreak = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#returnDef.
//toDo: not done
visitorInterprete.prototype.visitReturnDef = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#readDef.
//toDo: not done
visitorInterprete.prototype.visitReadDef = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#writeDef.
//toDo: not done
visitorInterprete.prototype.visitWriteDef = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#blockDef.
//toDo: not done
visitorInterprete.prototype.visitBlockDef = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#asignacion.
visitorInterprete.prototype.visitAsignacion = function(ctx) {
    this.visit(ctx.expr());
    return null;
};


// Visit a parse tree produced by CParser#lista.
//toDO: no se que hacer aun
visitorInterprete.prototype.visitLista = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#menosmenos.
visitorInterprete.prototype.visitMenosmenos = function(ctx) {
    var temp = tabla.buscar(variabletrabajo);
    if (temp.valor == null){
        temp.valor = 0;
    }
    temp.valor++;
    return null;
};


// Visit a parse tree produced by CParser#masmas.
visitorInterprete.prototype.visitMasmas = function(ctx) {
    var temp = tabla.buscar(variabletrabajo);
    if (temp.valor == null){
        temp.valor = 0;
    }
    temp.valor--;
    return null;
};


// Visit a parse tree produced by CParser#bloque.
visitorInterprete.prototype.visitBloque = function(ctx) {
    this.visitChildren(ctx);
    return null;
};


// Visit a parse tree produced by CParser#parteLista.
visitorInterprete.prototype.visitParteLista = function(ctx) {
    this.visitChildren(ctx);
    return null;
};


// Visit a parse tree produced by CParser#condicion.
//toDo:not done
visitorInterprete.prototype.visitCondicion = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#cTerm.
//toDo:not done
visitorInterprete.prototype.visitCTerm = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#cFact.
//toDo:not done
visitorInterprete.prototype.visitCFact = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#expresion.
visitorInterprete.prototype.visitExpresion = function(ctx) {
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
    tabla.modificar(variabletrabajo,dato);
    return null;
};


// Visit a parse tree produced by CParser#termino.
visitorInterprete.prototype.visitTermino = function(ctx) {
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
visitorInterprete.prototype.visitAsignador = function(ctx) {
    var temp=tabla.buscar(ctx.IDENTIFIER().getSymbol().text);
    return temp.valor;
};


// Visit a parse tree produced by CParser#factorNumero.
visitorInterprete.prototype.visitFactorNumero = function(ctx) {
    var valor = parseInt(ctx.NUMBER().getSymbol().text);
    return valor;
};


// Visit a parse tree produced by CParser#factorCaracter.
visitorInterprete.prototype.visitFactorCaracter = function(ctx) {
    var valor = ctx.CHAR().getSymbol().text;
    return valor;
};


// Visit a parse tree produced by CParser#factorBool.
visitorInterprete.prototype.visitFactorBool = function(ctx) {
    var valor = this.visit(ctx.booleano());
    return valor;
};


// Visit a parse tree produced by CParser#factorNuevo.
//toDo: not done
visitorInterprete.prototype.visitFactorNuevo = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#factorExpresion.
//toDo: not done
visitorInterprete.prototype.visitFactorExpresion = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#factorString.
visitorInterprete.prototype.visitFactorString = function(ctx) {
    var valor = ctx.STRING().getSymbol().text;
    return valor;
};


// Visit a parse tree produced by CParser#verdad.
visitorInterprete.prototype.visitVerdad = function(ctx) {
    return true;
};


// Visit a parse tree produced by CParser#falso.
visitorInterprete.prototype.visitFalso = function(ctx) {
    return false
};


// Visit a parse tree produced by CParser#asignarClase.
//toDo: not done
visitorInterprete.prototype.visitAsignarClase = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#asignarLista.
//toDo: not done
visitorInterprete.prototype.visitAsignarLista = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#igualIgual.
//toDo: not done
visitorInterprete.prototype.visitIgualIgual = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#difereteDe.
//toDo: not done
visitorInterprete.prototype.visitDifereteDe = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#mayorQue.
//toDo: not done
visitorInterprete.prototype.visitMayorQue = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#mayorIgualQue.
//toDo: not done
visitorInterprete.prototype.visitMayorIgualQue = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#menorQue.
//toDo: not done
visitorInterprete.prototype.visitMenorQue = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#menorIgualQue.
//toDo: not done
visitorInterprete.prototype.visitMenorIgualQue = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#sumar.
visitorInterprete.prototype.visitSumar = function(ctx) {
    return '+';
};


// Visit a parse tree produced by CParser#restar.
visitorInterprete.prototype.visitRestar = function(ctx) {
    return '-';
};


// Visit a parse tree produced by CParser#multiplicar.
visitorInterprete.prototype.visitMultiplicar = function(ctx) {
    return '*';
};


// Visit a parse tree produced by CParser#dividir.
visitorInterprete.prototype.visitDividir = function(ctx) {
    return '/';
};


// Visit a parse tree produced by CParser#modular.
visitorInterprete.prototype.visitModular = function(ctx) {
    return '%';
};





exports.visitorInterprete = visitorInterprete;