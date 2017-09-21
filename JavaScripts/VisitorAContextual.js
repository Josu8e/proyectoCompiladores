var gramarVisitor = require('generated/CParserVisitor').CParserVisitor;
var tablaSimbolos = require('JavaScripts/tablaSimbolos');
var global = require('Acontextual');
var tabla = global.Tabla

var textArea = document.getElementById('consola');
var nivel = 0;

function Acontextual() {
    gramarVisitor.call(this);
    return this;
}

Acontextual.prototype = Object.create(gramarVisitor.prototype);
Acontextual.prototype.constructor = Acontextual;


Acontextual.prototype.visitProgramDef = function(ctx) {
    tabla.insertar('int','reservado',0,0,'variable');
    tabla.insertar('char','reservado',0,0,'variable');
    tabla.insertar('float','reservado',0,0,'variable');
    tabla.insertar('bool','reservado',0,0,'variable');
    tabla.insertar('string','reservado',0,0,'variable');
    tabla.insertar('break','reservado',0,0,'variable');
    tabla.insertar('class','reservado',0,0,'variable');
    tabla.insertar('const','reservado',0,0,'variable');
    tabla.insertar('else','reservado',0,0,'variable');
    tabla.insertar('if','reservado',0,0,'variable');
    tabla.insertar('new','reservado',0,0,'variable');
    tabla.insertar('read','reservado',0,0,'variable');
    tabla.insertar('return','reservado',0,0,'variable');
    tabla.insertar('void','reservado',0,0,'variable');
    tabla.insertar('while','reservado',0,0,'variable');
    tabla.insertar('write','reservado',0,0,'variable');
    //fixme: preguntar por la cantidad de parametros
    tabla.insertar('ord','reservado',0,0,'metodo');
    tabla.insertar('chr','reservado',0,0,'metodo');
    tabla.insertar('len','reservado',0,0,'metodo');

    this.visitChildren(ctx);
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




// Visit a parse tree produced by CParser#constante.
Acontextual.prototype.visitConstante = function(ctx) {
    var tipo = this.visit(ctx.type());
    var nombre = ctx.IDENTIFIER().getSymbol().text;
    var temp = tabla.buscar(nombre);
    if (temp == null) {
        tabla.insertar(nombre, tipo, 0, nivel, 'constante');
        var valor = this.visit(ctx.numStr());
        tabla[-1].valor = valor;
    }
    else{
        textArea.innerHTML = "Error en linea "+ ctx.IDENTIFIER().getSymbol().line +"  columna "+ ctx.IDENTIFIER().getSymbol().column + " variable "+ nombre+" ya definida";
    }
    return null;
};


// Visit a parse tree produced by CParser#numero.
Acontextual.prototype.visitNumero = function(ctx) {
    var valor = ctx.NUMBER().getSymbol().text;
    return parseInt(valor,10);
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
    var temp  = tabla.buscar(nombre);
    if (temp == null) {
        tabla.insertar(nombre, tipo, 0, nivel, 'variable');
    }
    else{
        textArea.innerHTML = "Error en linea "+ ctx.IDENTIFIER().getSymbol().line +"  columna "+ ctx.IDENTIFIER().getSymbol().column + " variable "+ nombre+" ya definida";
    }
    for (i=1;i<=ctx.IDENTIFIER().length-1;i++) {
        nombre=ctx.IDENTIFIER(i).getSymbol().text;
        temp = tabla.buscar(nombre);
        if (temp == null) {
            tabla.insertar(nombre, tipo, 0, nivel, 'variable');
        }
        else{
            textArea.innerHTML = "Error en linea "+ ctx.IDENTIFIER(i).getSymbol().line +"  columna "+ ctx.IDENTIFIER(i).getSymbol().column + " variable "+ nombre+" ya definida";
        }
    }

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

    var temp  = tabla.buscar(nombre);

    if(temp == null){
        tabla.insertar(nombre,tipo,parametros,0,'funcion');
    }
    else{
        if(temp.cantidadParametros == parametros){
            textArea.innerHTML = "Error en linea "+ ctx.IDENTIFIER().getSymbol().line +"  columna "+ ctx.IDENTIFIER().getSymbol().column + " funcion "+ nombre+" ya definida con la misma cantida de parametros";
        }
        else {
            tabla.insertar(nombre,tipo,parametros,0,'funcion');
        }
    }



    for (i=0;i<=ctx.varDecl().length-1;i++) {
        this.visit(ctx.varDecl(i));
    }
    var type = this.visit(ctx.block());
    if (type != null){
        if(type != tipo){
            textArea.innerHTML = "Error en la linea "+ ctx.block().getSymbol().line+" en la columna "+ctx.block().getSymbol().column+ " la funcion solo puede retornar tipo "+ tipo;
        }
    }

    tabla.imprimir();
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

    var temp = tabla.buscar(nombre);

    tabla.imprimir();


    if(temp == null) {
        tabla.insertar(nombre, tipo, 0, nivel, 'variable');
    }
    else{
        textArea.innerHTML = "Error en linea "+ ctx.IDENTIFIER(0).getSymbol().line +"  columna "+ ctx.IDENTIFIER(0).getSymbol().column + " variable "+ nombre+" ya definida";
    }

    for (i=1;i<=ctx.type().length-1;i++) {
        tipo=this.visit(ctx.type(i));
        nombre=ctx.IDENTIFIER(i).getSymbol().text;
        temp = tabla.buscar(nombre);
        if (temp == null) {
            tabla.insertar(nombre, tipo, 0, nivel, 'variable');
        }
        else{
            textArea.innerHTML = textArea.innerHTML = "Error en linea "+ ctx.IDENTIFIER(i).getSymbol().line +"  columna "+ ctx.IDENTIFIER(i).getSymbol().column + " variable "+ nombre+" ya definida";
        }
    }
    return ctx.type().length;
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
    var temp = tabla.buscarClase(ctx.IDENTIFIER().getSymbol().text);
    if (temp == null){
        textArea.innerHTML = textArea.innerHTML = "Error en linea "+ ctx.IDENTIFIER().getSymbol().line +"  columna "+ ctx.IDENTIFIER().getSymbol().column + " tipo no definido";
        return 'undefined';
    }
    else {
        return temp.nombre;
    }
};


// Visit a parse tree produced by CParser#desigClassdef.
Acontextual.prototype.visitDesigClassdef = function(ctx) {
    var temp = tabla.buscar(ctx.IDENTIFIER().getSymbol().text);
    if(temp == null){
        temp = tabla.buscarClase(ctx.IDENTIFIER().getSymbol().text);
        if (temp == null){
            textArea.innerHTML = "Error en linea "+ ctx.IDENTIFIER().getSymbol().line +"  columna "+ ctx.IDENTIFIER().getSymbol().column + nombre+" no definida";    
        }
        else{
            if(ctx.asigClass(0)!= null) {
                var nombre = this.visit(ctx.asigClass(0));
                var temp = tabla.buscarAtributos(ctx.IDENTIFIER().getSymbol().text, nombre);
                var type = this.visit(ctx.asignation());
                //fixme: revisar que sea correcto la comparacion entre type y el tipo del objeto
                if (temp.tipo != type) {
                    textArea.innerHTML = "Error en linea " + ctx.IDENTIFIER().getSymbol().line + " columna " + ctx.IDENTIFIER().getSymbol().column + " no se puede asignar " + type + "en una variable de tipo " + temp.tipo;
                }
                else if (temp.nivel != nivel) {
                    textArea.innerHTML = "Error en linea " + ctx.IDENTIFIER().getSymbol().line + " columna " + ctx.IDENTIFIER().getSymbol().column + "variable no definida en este alcance";
                }
            }
                
        }
        
    }
    else{
        var type = this.visit(ctx.asignation());
        if (temp.tipo != type) {
            textArea.innerHTML = "Error en linea " + ctx.IDENTIFIER().getSymbol().line + " columna " + ctx.IDENTIFIER().getSymbol().column + " no se puede asignar " + type + "en una variable de tipo " + temp.tipo;
        }
        else if (temp.nivel != nivel) {
            textArea.innerHTML = "Error en linea " + ctx.IDENTIFIER().getSymbol().line + " columna " + ctx.IDENTIFIER().getSymbol().column + "variable no definida en este alcance";
        }

    }
    return null;
};


// Visit a parse tree produced by CParser#ifelseDef.
Acontextual.prototype.visitIfelseDef = function(ctx) {
    this.visitChildren(ctx);
    return null;
};


// Visit a parse tree produced by CParser#forDef.
Acontextual.prototype.visitForDef = function(ctx) {
    this.visitChildren(ctx);
    return null;
};


// Visit a parse tree produced by CParser#whileDef.
Acontextual.prototype.visitWhileDef = function(ctx) {
    this.visitChildren(ctx);
    return null;
};


// Visit a parse tree produced by CParser#foreachDef.
Acontextual.prototype.visitForeachDef = function(ctx) {
    this.visitChildren(ctx);
    return null;
};


// Visit a parse tree produced by CParser#break.
Acontextual.prototype.visitBreak = function(ctx) {
    this.visitChildren(ctx);
    return null;
};


// Visit a parse tree produced by CParser#returnDef.
Acontextual.prototype.visitReturnDef = function(ctx) {
    var tipoRet;
    try{
        tipoRet = this.visit(ctx.expr());
    }
    catch (err){
        tipoRet = null;
    }
    return tipoRet;
};


// Visit a parse tree produced by CParser#readDef.
Acontextual.prototype.visitReadDef = function(ctx) {
    var temp = tabla.buscar(ctx.IDENTIFIER().getSymbol().text);
    if (temp != null) {
        for (var i = 0; i < ctx.asigClass().length; i++) {
            var nombre = this.visit(ctx.asigClass(i));
            var temp = tabla.buscarAtributos(ctx.IDENTIFIER().getSymbol().text, nombre);
            if (temp == null) {
                textArea.innerHTML = "Error en linea " + ctx.asigClass(i).getSymbol().line + " columna " + ctx.asigClass(i).getSymbol().column + " atributo no encontrado en la clase";
            }

        }
    }
    else{
        textArea.innerHTML = "Error en linea " + ctx.IDENTIFIER().getSymbol().line + " columna " + ctx.IDENTIFIER().getSymbol().column + "variable no definida en este alcance";
    }
    return null;
};


// Visit a parse tree produced by CParser#writeDef.
Acontextual.prototype.visitWriteDef = function(ctx) {
    this.visitChildren(ctx);
    return null;
};


// Visit a parse tree produced by CParser#blockDef.
Acontextual.prototype.visitBlockDef = function(ctx) {
    this.visitChildren(ctx);
    return null;
};


// Visit a parse tree produced by CParser#puntoComa.
Acontextual.prototype.visitPuntoComa = function(ctx) {
    this.visitChildren(ctx);
    return null;
};


// Visit a parse tree produced by CParser#asignacion.
Acontextual.prototype.visitAsignacion = function(ctx) {
    var valor = this.visit(ctx.expr());
    return valor;
};


// Visit a parse tree produced by CParser#lista.
Acontextual.prototype.visitLista = function(ctx) {
    //todo: esperar respuesta de viquez
    try{
        this.visit(ctx.actPars());
    }
    catch (err){}
    return null;
};


// Visit a parse tree produced by CParser#menosmenos.
Acontextual.prototype.visitMenosmenos = function(ctx) {
    this.visitChildren(ctx);
    return null;
};


// Visit a parse tree produced by CParser#masmas.
Acontextual.prototype.visitMasmas = function(ctx) {
    this.visitChildren(ctx);
    return null;
};


// Visit a parse tree produced by CParser#bloque.
Acontextual.prototype.visitBloque = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CParser#parteLista.
Acontextual.prototype.visitParteLista = function(ctx) {
    this.visitChildren(ctx);
    return null;
};


// Visit a parse tree produced by CParser#condicion.
Acontextual.prototype.visitCondicion = function(ctx) {
    this.visitChildren(ctx);
    return null;
};


// Visit a parse tree produced by CParser#cTerm.
Acontextual.prototype.visitCTerm = function(ctx) {
    this.visitChildren(ctx);
    return null;
};


// Visit a parse tree produced by CParser#cFact.
Acontextual.prototype.visitCFact = function(ctx) {


    return null;
};


// Visit a parse tree produced by CParser#expresion.
Acontextual.prototype.visitExpresion = function(ctx) {
    var termino1 = this.visit(ctx.term(0));
    for(var i = 1;i<ctx.term().length-1;i++){
        var sumaResta = this.visit(ctx.addop(i));
        var terminoN = this.visit(ctx.term(i));
        try {

            if (sumaResta == '-') {
                termino1 = termino1 - terminoN;
            }
            else if (sumaResta == '+') {
                termino1 = termino1 + terminoN;
            }
        }
        catch (e){
            textArea.innerHTML = "Error en la linea "+ ctx.term(i).getSymbol().line+ " columna "+ctx.term(i).getSymbol().column+ " no se pueden operar terminos de diferente tipo";
        }

    }
    return termino1;
};


// Visit a parse tree produced by CParser#termino.
Acontextual.prototype.visitTermino = function(ctx) {
    var termino1 = this.visit(ctx.factor(0));
    for(var i = 1;i<ctx.factor().length-1;i++){
        var mulop = this.visit(ctx.mulop(i));
        var terminoN = this.visit(ctx.factor(i));
        try {

            if (mulop == '%') {
                termino1 = termino1 % terminoN;
            }
            else if (mulop == '*') {
                termino1 = termino1 * terminoN;
            }
            else if (mulop == '/') {
                termino1 = termino1 / terminoN;
            }
        }
        catch (e){
            textArea.innerHTML = "Error en la linea "+ ctx.term(i).getSymbol().line+ " columna "+ctx.term(i).getSymbol().column+ " no se pueden operar terminos de diferente tipo";
        }

    }
    return termino1;
};


// Visit a parse tree produced by CParser#asignador.
Acontextual.prototype.visitAsignador = function(ctx) {
    return null;
};


// Visit a parse tree produced by CParser#factorNumero.
Acontextual.prototype.visitFactorNumero = function(ctx) {
    var num = parseInt(ctx.NUMBER().getSymbol().text,10);

    return num;
};


// Visit a parse tree produced by CParser#factorCaracter.
Acontextual.prototype.visitFactorCaracter = function(ctx) {
    return ctx.CHAR().getSymbol().text;
};

Acontextual.prototype.visitFactorString=function (ctx) {
    return ctx.CHAR().getSymbol().text;
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