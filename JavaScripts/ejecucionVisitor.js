var gramarVisitor = require('generated/CParserVisitor').CParserVisitor;
var temporal;
var tablaVariables;
var breakVsitado;
var tablaMetodos;
var listaHistorial = [];
var variabletrabajoLista = [];
var tablaClases;
var posicion;
var tipoAsig;


function ejecucionVisitor() {
    gramarVisitor.call(this);
    temporal = global.temporal;
    tablaClases = global.tablaClases;
    tablaVariables = global.tablaVariables;
    tablaMetodos = global.tablaMetodos;
    listaHistorial.push(temporal);
    return this;
}

function metodo(nombre,tipo,ctx,parametros) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.parametros = parametros;
    this.contexto = ctx;
    this.cPara = this.parametros.length;
}

function buscarInterno(nombre) {
    for (var i = 0;i<temporal.parametros.length;i++){
        if(temporal.parametros[i].nombre == nombre){
            return temporal.parametros[i];
        }
    }
    return null;
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
    var algo = ctx.PCDER();
    if (algo != null)
        id.valor = [];


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
    variabletrabajoLista.push(nombre);



    //toDo: falta saber que hacer si viene "objeto.atributo"


    //listas
    if(ctx.asigClass(0) != null) {
        posicion = this.visit(ctx.asigClass(0));


        var algo = this.visit(ctx.asignation());

        tipoAsig = null;
        posicion = null;

    }
    else{
        var algo = this.visit(ctx.asignation());
    }

    variabletrabajo = null

    return null;
};



ejecucionVisitor.prototype.visitAsignarClase = function (ctx) {
    tipoAsig = 'clase';
    return ctx.IDENTIFIER().getSymbol().text;
}

ejecucionVisitor.prototype.visitAsignarLista = function (ctx) {
    tipoAsig = 'lista';
    return this.visit(ctx.expr());
}


// Visit a parse tree produced by CParser#asignacion.
ejecucionVisitor.prototype.visitAsignacion = function(ctx) {
    return this.visit(ctx.expr());
};

// Visit a parse tree produced by CParser#menosmenos.
ejecucionVisitor.prototype.visitMenosmenos = function(ctx) {
    var temp = tablaVariables.buscar(variabletrabajo);
    if (temp == null){
        temp = buscarInterno(variabletrabajo);
    }
    if (temp.valor == null){
        temp.valor = 0;
    }
    temp.valor++;
    return null;
};

// Visit a parse tree produced by CParser#masmas.
ejecucionVisitor.prototype.visitMasmas = function(ctx) {
    var temp = tablaVariables.buscar(variabletrabajo);
    if (temp == null){
        temp = buscarInterno(variabletrabajo);
    }
    if (temp.valor == null){
        temp.valor = 0;
    }
    temp.valor--;
    return null;
};

// Visit a parse tree produced by CParser#bloque.
ejecucionVisitor.prototype.visitBloque = function(ctx) {
    var retorno;
    var visita;
    for(var i = 0; i<ctx.statement().length;i++){
        visita = this.visit(ctx.statement(i))
        if( visita != null ){
            retorno = visita;
        }
    }
    return visita;
};

// Visit a parse tree produced by CParser#parteLista.
ejecucionVisitor.prototype.visitParteLista = function(ctx) {
    var lista = [];

    for (var i = 0; i<ctx.expr().length;i++){
        lista.push(this.visit(ctx.expr(i)));
    }

    return lista;
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
    retorno=tablaVariables.modificar(variabletrabajo,dato);
    if (retorno == null){
        var temp = buscarInterno(variabletrabajo);
        if (temp != null) {

            if (typeof temp.valor == "object" && temp.valor != null){
                if (tipoAsig == 'lista') {
                    var tamaño = temp.valor.length
                    if (tamaño > posicion)
                        temp.valor[posicion] = dato;
                    else {
                        var textArea = document.getElementById('consola');
                        textArea.value += 'lista fuera de sus limites \n';
                    }
                }
                else if (tipoAsig == 'clase'){
                    for(var i = 0;i<temp.valor.length;i++){
                        if(temp.valor[i].nombre == posicion){
                            temp.valor[i].valor = dato;
                        }
                    }
                }

            }else {
                temp.valor = dato;
            }
            tipoAsig = null;
        }
    }

    return dato;
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
    var name = ctx.IDENTIFIER().getSymbol().text;

    try {
        var lista = this.visit(ctx.actPars());
    }
    catch (e){}
    var textArea = document.getElementById('consola');
    if (name == 'len'){
        try {
            return lista[0].length
        }
        catch (e){
            textArea.value += lista[0]+' no tiene atributo len \n';
            return null;
        }
    }
    else if(name == 'ord'){
        try {
            return parseInt(lista[0]);
        }
        catch (e){
            textArea.value += lista[0]+' convercion invalida \n';
            return null;
        }
    }
    else if(name=='chr'){
        try{
            return lista[0].toString();
        }
        catch (e){
            textArea.value += lista[0]+' convercion invalida \n';
            return null;
        }
    }


    var temp=tablaVariables.buscar(name);
    if (temp == null){
        temp = buscarInterno(name);
    }


    if(temp == null){
        temporal = tablaMetodos.buscar(name);
        listaHistorial.push(temporal);
        temp = temporal;
        for(var i=0; i<temp.parametros.length; i++){
            temp.parametros[i].valor = lista[i];
        }

        for (var i=0;i<temp.contexto.varDecl().length;i++) {
            this.visit(temp.contexto.varDecl(i));
        }

        var algo = this.visit(temp.contexto.block());

        listaHistorial.pop();
        var i = 0;
        while(i<temporal.parametros.length) {
            variabletrabajoLista.pop();
            i++;
        }
        temporal = listaHistorial[listaHistorial.length-1];
        variabletrabajo = variabletrabajoLista[variabletrabajoLista.length-1];

        return algo;

    }
    if (ctx.asigClass(0) != null) {
        var retorno = this.visit(ctx.asigClass(0));
        if (tipoAsig == 'clase') {
            for (var i = 0; i < temp.valor.length; i++) {
                if (temp.valor[i].nombre == retorno) {
                    return temp.valor[i].valor;
                }
            }
        }
        else if (tipoAsig == 'lista') {
            return temp.valor[retorno];
        }
    }



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

ejecucionVisitor.prototype.visitIfelseDef = function (ctx) {
    var condicion = this.visit(ctx.condition());
    if (condicion == 1){
        this.visit(ctx.statement(0));
    }
    else{
        try{
            this.visit(ctx.statement(1));
        }
        catch (e){};
    }
    return null;
}


ejecucionVisitor.prototype.visitForDef = function (ctx) {

    while (this.visit(ctx.condition())==1){
        this.visit(ctx.statement(1));
        if (breakVsitado){
            breakVsitado = false;
            break
        }
        try {
            this.visit(ctx.statement(0));
        }
        catch (e){}
    }
    return null;
}

ejecucionVisitor.prototype.visitWhileDef = function (ctx) {
    while(this.visit(ctx.condition())==1){
        var retorno = this.visit(ctx.statement());
        if (breakVsitado){
            breakVsitado = false;
            break
        }
    }
}
//todo: hasta que hagamos las listas podemos hace este
ejecucionVisitor.prototype.visitForeachDef = function (ctx) {
    return null;
}

ejecucionVisitor.prototype.visitLista = function (ctx) {
    var temp =  tablaMetodos.buscar(variabletrabajo);
    var param = this.visit(ctx.actPars());

    if (variabletrabajo == 'add'){
        param[0].push(param[1]);
        return null;
    }
    else {
        temp.parametros = param;
        var retorno = this.visit(temp.contexto);
        return retorno;
    }
}

ejecucionVisitor.prototype.visitBreak = function (ctx) {
    breakVsitado = true;
    return null;
}



ejecucionVisitor.prototype.visitCondicion = function (ctx) {
    var condiciones = [];
    for (var i = 0;i<ctx.condTerm().length;i++) {
        condiciones.push(this.visit(ctx.condTerm(i)))
    }
    if(condiciones.length != 1) {
        for (var i = 0; i < condiciones.length; i++) {
            if (condiciones[i] == 1)
                return 1;
        }
    }
    else{
        if(condiciones[0] == 1){
            return 1;
        }
    }
    return 2;
}

ejecucionVisitor.prototype.visitCTerm = function (ctx) {
    var condiciones = []
    for (var i = 0;i<ctx.condFact().length;i++) {
        condiciones.push(this.visit(ctx.condFact(i)))
    }

    if(condiciones.length != 1) {
        for (var i = 0; i < condiciones.length; i++) {
            if (condiciones[i] == 2)
                return 2;
        }
    }
    else {
        if(condiciones[0] == 2){
            return 2;
        }
    }
    return 1;
}

ejecucionVisitor.prototype.visitCFact = function (ctx) {
    var primeraExp = this.visit(ctx.expr(0));
    var segundaExp = this.visit(ctx.expr(1));
    var relop = this.visit(ctx.relop());

    if (relop == '==') {
        if (primeraExp == segundaExp) {
            return 1;
        }
        else {
            return 2;
        }
    }

    if (relop == '!=') {
        if (primeraExp != segundaExp) {
            return 1;
        }
        else {
            return 2;
        }
    }

    if (relop == '>') {
        if (primeraExp > segundaExp) {
            return 1;
        }
        else {
            return 2;
        }
    }

    if (relop == '>=') {
        if (primeraExp >= segundaExp) {
            return 1;
        }
        else {
            return 2;
        }
    }

    if (relop == '<') {
        if (primeraExp < segundaExp) {
            return 1;
        }
        else {
            return 2;
        }
    }

    if (relop == '<=') {
        if (primeraExp <= segundaExp) {
            return 1;
        }
        else {
            return 2;
        }
    }
}

ejecucionVisitor.prototype.visitIgualIgual = function (ctx) {
    return ctx.COMPARACION().getSymbol().text;
}

ejecucionVisitor.prototype.visitDifereteDe = function (ctx) {
    return '!=';
}

ejecucionVisitor.prototype.visitMayorQue = function (ctx) {
    return '>';
}

ejecucionVisitor.prototype.visitMayorIgualQue = function (ctx) {
    return '>=';
}

ejecucionVisitor.prototype.visitMenorQue = function (ctx) {
    return '<';
}

ejecucionVisitor.prototype.visitMenorIgualQue = function (ctx) {
    return '<=';
}

ejecucionVisitor.prototype.visitReturnDef = function (ctx) {
    return this.visit(ctx.expr());
}

ejecucionVisitor.prototype.visitFactorNuevo = function (ctx) {
    //NEW IDENTIFIER

    var nombre = ctx.IDENTIFIER().getSymbol().text;

    var temp = tablaClases.buscarClase(nombre);

    retorno=tablaVariables.modificar(variabletrabajo,temp.tablaAtributos);
    if (retorno == null){
        var temporalito = buscarInterno(variabletrabajo);
        if (temporalito != null) {
            temporalito.valor = temp.tablaAtributos;
        }
    }

    return null;

}

ejecucionVisitor.prototype.visitWriteDef = function (ctx) {
    //WRITE PIZQ expr (COMA NUMBER)? PDER PUNTOCOMA

    var expresion = this.visit(ctx.expr());
    var valor = 0;
    try {
        valor = parseInt(ctx.NUMBER().getSymbol().text);
    }
    catch (e){}
    var textArea = document.getElementById('consola');
    var i = 0;
    do {
        i++;
        textArea.value += '\n' + expresion;
    }while (i<valor);
    return null;
}



//READ PIZQ IDENTIFIER (asigClass)* PDER PUNTOCOMA                              readDef
ejecucionVisitor.prototype.visitReadDef = function (ctx) {
    var name = ctx.IDENTIFIER().getSymbol().text;
    var retorno = this.visit(ctx.asigClass(0));
    var temp;
    temp = tablaVariables.buscar(name);
    if (temp == null){
        temp = buscarInterno(name);
    }
    if(tipoAsig == 'clase'){
        for (var i = 0;i<temp.valor.length;i++){
            if (temp.valor[i].nombre == retorno){
                return temp.valor[i].valor;
            }
        }
    }
    else if(tipoAsig == 'lista'){
        return temp.valor[retorno];
    }

}

exports.ejecucionVisitor = ejecucionVisitor;