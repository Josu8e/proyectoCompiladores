var antlr4 = require('antlr4/index');
var CParser = require('generated/CParser');
var CScanner = require('generated/CScanner');
var interprete = require('JavaScripts/visitorInterprete');


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


    var tree = parser.program();
    var x = new interprete.visitorInterprete();
    x.visit(tree);


}
