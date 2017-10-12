lexer grammar CScanner;

//https://github.com/yshavot/antlr-denter


tokens{ INDENT, DEDENT}



/* tokens palabras reservadas */

IF      : 'if';
ELSE    : 'else';
WHILE   : 'while';
RETURN  : 'return';
BRAKE   : 'break';
CLASS   : 'class';
CONST   : 'const';
NEW     : 'new';
READ    : 'read';
VOID    : 'void';
WRITE   : 'write';
FOR     : 'for';
FOREACH : 'foreach';
IN      : 'in';

CHARR   : 'char';
INT     : 'int';
FLOAT   : 'float';
BOOL    : 'bool';
STRINGR : 'string';


 /*Tokens para simbolos*/
COMA	:	',' ;
ASIGN	:	'=' ;
PIZQ	:	'(' ;
PDER	:	')' ;
SUMA	:	'+' ;
MUL		:	'*' ;
PCIZQ	:	'[' ;
PCDER	:	']' ;
MENOR   :   '<';
MAYOR   :   '>';
MENORIGUAL : '<=';
MAYORIGUAL : '>=';
COMPARACION : '==';
DIFERENTE : '!=';
DIV    :   '/';
RESTA   :   '-';
MODULO  : '%';
AND     : '&&';
OR      : '||';
AUMENTO : '++';
DISMINUCION : '--';
PUNTOCOMA   :';';
CORCHETEIZQ   : '{';
CORCHETEDER   : '}';
PUNTO : '.';
TRUE : 'true';
FALSE : 'false';



/* Tokens para expresiones regulares*/
IDENTIFIER  :
    CharInicial CharContenido*;

NUMBER
	:	'0'
	| '1'..'9' ('0'..'9')*
	;




STRING : '"' ('""'|~'"')* '"' ;

CHAR : '\'' CharContenido'\'';

fragment
CharInicial
    : 'A'..'Z' | 'a'..'z'
    | '\u00C0'..'\u00D6'
    | '\u00D8'..'\u00F6'
    | '\u00F8'..'\u02FF'
    | '\u0370'..'\u037D'
    | '\u037F'..'\u1FFF'
    | '\u200C'..'\u200D'
    | '\u2070'..'\u218F'
    | '\u2C00'..'\u2FEF'
    | '\u3001'..'\uD7FF'
    | '\uF900'..'\uFDCF'
    | '\uFDF0'..'\uFFFD'
    ;
fragment
CharContenido
   : CharInicial
   | '0'..'9'
   | '_'
   | '\u00B7'
   | '\u0300'..'\u036F'
   | '\u203F'..'\u2040'
   ;



//OTROS ELEMENTOS


COMENTARIO_LINEA: '//'.*?'\r'?'\n' -> skip;


SPECIAL_COMMENT
 : '/*'( SPECIAL_COMMENT | . )*?'*/' -> skip
 ;


WS:   [ \t\n\r] -> skip ;