var antlr4 = require('antlr4/index');
var CParser = require('generated/CParser');
var CScanner = require('generated/CScanner');
var interprete = require('JavaScripts/visitorInterprete');
var ejecucion = require('JavaScripts/ejecucionVisitor');
var almacenMetodos = require('JavaScripts/almacenMetodos');
var almacenVariables = require('JavaScripts/almacenVariables')
var almacenClases = require('JavaScripts/almacenClases');
var tablaMetodos;
var tablaVariables;
var temporal;
var tablaClases;

function Interprete() {

    editor = $('textarea').data('ace-editor');


    var textArea = document.getElementById('consola');
    textArea.innerHTML = null;
    var input = editor.getValue();//document.getElementById('contenidoarchivo').Value;
    var chars = new antlr4.InputStream(input);
    var lexer = new CScanner.CScanner(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new CParser.CParser(tokens);
    parser.buildParseTrees = true;

    tablaMetodos =  new almacenMetodos.almacenMetodos();
    tablaVariables = new almacenVariables.almacenVariables();
    tablaClases = new almacenClases.almacenClases();

    var tree = parser.program();
    var x = new interprete.visitorInterprete();
    x.visit(tree);


    document.getElementById("consola").addEventListener("change", cargarFuncion);
    document.getElementById('consola').readOnly = false;

}

function cargarFuncion() {
    var consola = document.getElementById("consola");
    var texto = consola.value;
    var x = texto.indexOf('(');
    var y = texto.indexOf(')');
    var nombre="";
    for (var i = 0;i<x;i++){
        nombre += texto[i];
    }
    var parametrosbrutos="";
    for (var i = x+1;i<y;i++){
        parametrosbrutos+=texto[i];
    }
    var parametros = parametrosbrutos.split(',');

    var temp = tablaMetodos.buscar(nombre);
    if (parametros[0]!="") {
        for (var i = 0; i < parametros.length; i++) {
            if (temp.parametros[i].tipo == "int") {
                parametros[i] = parseInt(parametros[i]);
            }
            else if (temp.parametros[i].tipo == "char") {
                parametros[i] = parametros.charAt(0);
            }
            else if (temp.parametros[i].tipo == "bool") {
                if (parametros[i] == 'true') {
                    parametros[i] = true;
                }
                else {
                    parametros[i] = false;
                }
            }
            else if (temp.parametros[i].tipo == 'float') {
                parametros[i] = parseFloat(parametros[i]);
            }
            temp.parametros[i].valor = parametros[i];
        }
    }
    else{
        temp.parametros = [];
    }
    temporal = temp;
    var y = new ejecucion.ejecucionVisitor();
    for (var i=0;i<temp.contexto.varDecl().length;i++) {
        y.visit(temp.contexto.varDecl(i));
    }
    var lista = temp.parametros;
    y.visit(temp.contexto.block());
    temp.parametros = lista;
    temporal = null;

}


function limpiar() {
    var consola = document.getElementById("consola");
    consola.value=null;
}
exports.temporal = temporal;
exports.tablaMetodos = tablaMetodos;
exports.tablaClases = tablaClases;