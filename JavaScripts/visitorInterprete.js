var gramarVisitor = require('generated/CParserVisitor').CParserVisitor;
var tabla;


function visitorInterprete() {
    gramarVisitor.call(this);
    tabla = global.tablaAlmacen;
    return this;
}

visitorInterprete.prototype = Object.create(gramarVisitor.prototype);
visitorInterprete.prototype.constructor = visitorInterprete;



//your code here :)

exports.visitorInterprete = visitorInterprete();