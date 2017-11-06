parser grammar CParser;

options{
    tokenVocab=CScanner;
}

program	                : CLASS IDENTIFIER (declarations)* CORCHETEIZQ  (methodDecl)* CORCHETEDER EOF   #programDef
                        ;
declarations            : constDecl                                                                     #declaracionConst
                        | varDecl                                                                       #declaracionVariable
                        | classDecl                                                                     #declaracionClase
                        ;

constDecl               : CONST type IDENTIFIER ASIGN  numStr PUNTOCOMA                                 #constante
                        ;

numStr                  : NUMBER                                                                        #numero
                        | CHAR                                                                          #char
                        ;


varDecl	                : type  (PCIZQ PCDER)? IDENTIFIER (COMA IDENTIFIER)* PUNTOCOMA                                  #variable
                        ;
classDecl               : CLASS IDENTIFIER CORCHETEIZQ (varDecl)* CORCHETEDER                           #clase
                        ;
methodDecl	            : tipoMet IDENTIFIER PIZQ (formPars)? PDER (varDecl)* block                     #metodo
                        ;
tipoMet                 : type                                                                          #tipoDecla
                        | VOID                                                                          #void
                        ;
formPars	            : type IDENTIFIER ( COMA type IDENTIFIER )*                                     #defVarMul
                        ;
type                    : INT                                                                           #intT
                        | CHARR                                                                         #charT
                        | FLOAT                                                                         #floatT
                        | BOOL                                                                          #boolT
                        | STRINGR                                                                       #stringT
                        | IDENTIFIER                                                                    #idT
                        ;

statement               : IDENTIFIER (asigClass)* asignation  PUNTOCOMA                                 #desigClassdef
		                | IF PIZQ condition PDER statement (ELSE statement )?                           #ifelseDef
		                | FOR PIZQ expr PUNTOCOMA (condition)? PUNTOCOMA (statement)? PDER statement    #forDef
		                | WHILE PIZQ condition PDER statement                                           #whileDef
		                | FOREACH PIZQ IDENTIFIER IDENTIFIER IN IDENTIFIER PDER statement               #foreachDef
		                | BRAKE PUNTOCOMA                                                               #break
		                | RETURN (expr)? PUNTOCOMA                                                      #returnDef
		                | READ PIZQ IDENTIFIER (asigClass)* PDER PUNTOCOMA                              #readDef
		                | WRITE PIZQ expr (COMA NUMBER)? PDER PUNTOCOMA                                 #writeDef
		                | block                                                                         #blockDef
		                | PUNTOCOMA                                                                     #puntoComa
		                ;

asignation              : ASIGN expr                                                                    #asignacion
                        | PIZQ (actPars)? PDER                                                          #lista
                        | AUMENTO                                                                       #menosmenos
                        | DISMINUCION                                                                   #masmas
                        ;

block		            : CORCHETEIZQ  (statement)* CORCHETEDER                                         #bloque
                        ;
actPars	                : expr (COMA expr)?                                                             #parteLista
                        ;

condition	            : condTerm (OR condTerm)?                                                       #condicion
                        ;
condTerm	            : condFact (AND condFact)?                                                      #cTerm
                        ;
condFact	            : expr relop expr                                                               #cFact
                        ;
expr		            :  RESTA?  term  (addop term)*                                                  #expresion
                        ;
term		            : factor (mulop factor)*                                                        #termino
                        ;
factor		            : IDENTIFIER (asigClass)* ( PIZQ  (actPars)?  PDER )?                                        #asignador
		                | NUMBER                                                                        #factorNumero
		                | CHAR                                                                          #factorCaracter
		                | booleano                                                                      #factorBool
		                | NEW IDENTIFIER                                                                #factorNuevo
		                | PIZQ expr PDER                                                                #factorExpresion
		                | STRING                                                                        #factorString
		                ;

booleano                : TRUE                                                                          #verdad
                        | FALSE                                                                         #falso
                        ;



asigClass               : PUNTO IDENTIFIER                                                              #asignarClase
                        | PCIZQ expr PCDER                                                              #asignarLista
                        ;

relop		            : COMPARACION                                                                   #igualIgual
                        | DIFERENTE                                                                     #difereteDe
                        | MAYOR                                                                         #mayorQue
                        | MAYORIGUAL                                                                    #mayorIgualQue
                        | MENOR                                                                         #menorQue
                        | MENORIGUAL                                                                    #menorIgualQue
                        ;

addop		            : SUMA                                                                          #sumar
                        | RESTA                                                                         #restar
                        ;

mulop		            : MUL                                                                           #multiplicar
                        | DIV                                                                           #dividir
                        | MODULO                                                                        #modular
                        ;
