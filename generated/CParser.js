// Generated from J:/tec/compi/Nueva carpeta\CParser.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CParserVisitor = require('./CParserVisitor').CParserVisitor;

var grammarFileName = "CParser.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00039\u0149\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002:\n\u0002\f\u0002",
    "\u000e\u0002=\u000b\u0002\u0003\u0002\u0003\u0002\u0007\u0002A\n\u0002",
    "\f\u0002\u000e\u0002D\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003L\n\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0005\u0005W\n\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0007\u0006]\n\u0006\f\u0006\u000e\u0006`\u000b",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0007\u0007h\n\u0007\f\u0007\u000e\u0007k\u000b\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bs\n\b\u0003\b\u0003",
    "\b\u0007\bw\n\b\f\b\u000e\bz\u000b\b\u0003\b\u0003\b\u0003\t\u0003\t",
    "\u0005\t\u0080\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007",
    "\n\u0088\n\n\f\n\u000e\n\u008b\u000b\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u0093\n\u000b",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0005\f\u00a0\n\f\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0005\f\u00a7\n\f\u0003\f\u0003\f\u0005\f\u00ab\n\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0005\f\u00c2\n\f\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005",
    "\f\u00d0\n\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00d7\n",
    "\f\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u00dd\n\r\u0003\r\u0003\r",
    "\u0003\r\u0005\r\u00e2\n\r\u0003\u000e\u0003\u000e\u0005\u000e\u00e6",
    "\n\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0005\u000f\u00ed\n\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0005",
    "\u0010\u00f2\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011",
    "\u00f7\n\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0013\u0005\u0013\u00fe\n\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0007\u0013\u0104\n\u0013\f\u0013\u000e\u0013\u0107\u000b",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0007\u0014\u010d",
    "\n\u0014\f\u0014\u000e\u0014\u0110\u000b\u0014\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0005\u0015\u0115\n\u0015\u0003\u0015\u0005\u0015\u0118",
    "\n\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0123\n",
    "\u0015\u0003\u0016\u0003\u0016\u0005\u0016\u0127\n\u0016\u0003\u0017",
    "\u0003\u0017\u0007\u0017\u012b\n\u0017\f\u0017\u000e\u0017\u012e\u000b",
    "\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0005\u0018\u0136\n\u0018\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u013e\n\u0019\u0003",
    "\u001a\u0003\u001a\u0005\u001a\u0142\n\u001a\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0005\u001b\u0147\n\u001b\u0003\u001b\u0002\u0002\u001c",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c",
    "\u001e \"$&(*,.024\u0002\u0002\u0002\u016a\u00026\u0003\u0002\u0002",
    "\u0002\u0004K\u0003\u0002\u0002\u0002\u0006M\u0003\u0002\u0002\u0002",
    "\bV\u0003\u0002\u0002\u0002\nX\u0003\u0002\u0002\u0002\fc\u0003\u0002",
    "\u0002\u0002\u000en\u0003\u0002\u0002\u0002\u0010\u007f\u0003\u0002",
    "\u0002\u0002\u0012\u0081\u0003\u0002\u0002\u0002\u0014\u0092\u0003\u0002",
    "\u0002\u0002\u0016\u00d6\u0003\u0002\u0002\u0002\u0018\u00e1\u0003\u0002",
    "\u0002\u0002\u001a\u00e3\u0003\u0002\u0002\u0002\u001c\u00e9\u0003\u0002",
    "\u0002\u0002\u001e\u00ee\u0003\u0002\u0002\u0002 \u00f3\u0003\u0002",
    "\u0002\u0002\"\u00f8\u0003\u0002\u0002\u0002$\u00fd\u0003\u0002\u0002",
    "\u0002&\u0108\u0003\u0002\u0002\u0002(\u0122\u0003\u0002\u0002\u0002",
    "*\u0126\u0003\u0002\u0002\u0002,\u0128\u0003\u0002\u0002\u0002.\u0135",
    "\u0003\u0002\u0002\u00020\u013d\u0003\u0002\u0002\u00022\u0141\u0003",
    "\u0002\u0002\u00024\u0146\u0003\u0002\u0002\u000267\u0007\n\u0002\u0002",
    "7;\u00073\u0002\u00028:\u0005\u0004\u0003\u000298\u0003\u0002\u0002",
    "\u0002:=\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002\u0002;<\u0003\u0002",
    "\u0002\u0002<>\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002\u0002>B\u0007",
    ".\u0002\u0002?A\u0005\u000e\b\u0002@?\u0003\u0002\u0002\u0002AD\u0003",
    "\u0002\u0002\u0002B@\u0003\u0002\u0002\u0002BC\u0003\u0002\u0002\u0002",
    "CE\u0003\u0002\u0002\u0002DB\u0003\u0002\u0002\u0002EF\u0007/\u0002",
    "\u0002FG\u0007\u0002\u0002\u0003G\u0003\u0003\u0002\u0002\u0002HL\u0005",
    "\u0006\u0004\u0002IL\u0005\n\u0006\u0002JL\u0005\f\u0007\u0002KH\u0003",
    "\u0002\u0002\u0002KI\u0003\u0002\u0002\u0002KJ\u0003\u0002\u0002\u0002",
    "L\u0005\u0003\u0002\u0002\u0002MN\u0007\u000b\u0002\u0002NO\u0005\u0014",
    "\u000b\u0002OP\u00073\u0002\u0002PQ\u0007\u0019\u0002\u0002QR\u0005",
    "\b\u0005\u0002RS\u0007-\u0002\u0002S\u0007\u0003\u0002\u0002\u0002T",
    "W\u00074\u0002\u0002UW\u00076\u0002\u0002VT\u0003\u0002\u0002\u0002",
    "VU\u0003\u0002\u0002\u0002W\t\u0003\u0002\u0002\u0002XY\u0005\u0014",
    "\u000b\u0002Y^\u00073\u0002\u0002Z[\u0007\u0018\u0002\u0002[]\u0007",
    "3\u0002\u0002\\Z\u0003\u0002\u0002\u0002]`\u0003\u0002\u0002\u0002^",
    "\\\u0003\u0002\u0002\u0002^_\u0003\u0002\u0002\u0002_a\u0003\u0002\u0002",
    "\u0002`^\u0003\u0002\u0002\u0002ab\u0007-\u0002\u0002b\u000b\u0003\u0002",
    "\u0002\u0002cd\u0007\n\u0002\u0002de\u00073\u0002\u0002ei\u0007.\u0002",
    "\u0002fh\u0005\n\u0006\u0002gf\u0003\u0002\u0002\u0002hk\u0003\u0002",
    "\u0002\u0002ig\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002jl\u0003",
    "\u0002\u0002\u0002ki\u0003\u0002\u0002\u0002lm\u0007/\u0002\u0002m\r",
    "\u0003\u0002\u0002\u0002no\u0005\u0010\t\u0002op\u00073\u0002\u0002",
    "pr\u0007\u001a\u0002\u0002qs\u0005\u0012\n\u0002rq\u0003\u0002\u0002",
    "\u0002rs\u0003\u0002\u0002\u0002st\u0003\u0002\u0002\u0002tx\u0007\u001b",
    "\u0002\u0002uw\u0005\n\u0006\u0002vu\u0003\u0002\u0002\u0002wz\u0003",
    "\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002",
    "y{\u0003\u0002\u0002\u0002zx\u0003\u0002\u0002\u0002{|\u0005\u001a\u000e",
    "\u0002|\u000f\u0003\u0002\u0002\u0002}\u0080\u0005\u0014\u000b\u0002",
    "~\u0080\u0007\u000e\u0002\u0002\u007f}\u0003\u0002\u0002\u0002\u007f",
    "~\u0003\u0002\u0002\u0002\u0080\u0011\u0003\u0002\u0002\u0002\u0081",
    "\u0082\u0005\u0014\u000b\u0002\u0082\u0089\u00073\u0002\u0002\u0083",
    "\u0084\u0007\u0018\u0002\u0002\u0084\u0085\u0005\u0014\u000b\u0002\u0085",
    "\u0086\u00073\u0002\u0002\u0086\u0088\u0003\u0002\u0002\u0002\u0087",
    "\u0083\u0003\u0002\u0002\u0002\u0088\u008b\u0003\u0002\u0002\u0002\u0089",
    "\u0087\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002\u008a",
    "\u0013\u0003\u0002\u0002\u0002\u008b\u0089\u0003\u0002\u0002\u0002\u008c",
    "\u0093\u0007\u0014\u0002\u0002\u008d\u0093\u0007\u0013\u0002\u0002\u008e",
    "\u0093\u0007\u0015\u0002\u0002\u008f\u0093\u0007\u0016\u0002\u0002\u0090",
    "\u0093\u0007\u0017\u0002\u0002\u0091\u0093\u00073\u0002\u0002\u0092",
    "\u008c\u0003\u0002\u0002\u0002\u0092\u008d\u0003\u0002\u0002\u0002\u0092",
    "\u008e\u0003\u0002\u0002\u0002\u0092\u008f\u0003\u0002\u0002\u0002\u0092",
    "\u0090\u0003\u0002\u0002\u0002\u0092\u0091\u0003\u0002\u0002\u0002\u0093",
    "\u0015\u0003\u0002\u0002\u0002\u0094\u0095\u0005,\u0017\u0002\u0095",
    "\u0096\u0005\u0018\r\u0002\u0096\u0097\u0007-\u0002\u0002\u0097\u00d7",
    "\u0003\u0002\u0002\u0002\u0098\u0099\u0007\u0005\u0002\u0002\u0099\u009a",
    "\u0007\u001a\u0002\u0002\u009a\u009b\u0005\u001e\u0010\u0002\u009b\u009c",
    "\u0007\u001b\u0002\u0002\u009c\u009f\u0005\u0016\f\u0002\u009d\u009e",
    "\u0007\u0006\u0002\u0002\u009e\u00a0\u0005\u0016\f\u0002\u009f\u009d",
    "\u0003\u0002\u0002\u0002\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0\u00d7",
    "\u0003\u0002\u0002\u0002\u00a1\u00a2\u0007\u0010\u0002\u0002\u00a2\u00a3",
    "\u0007\u001a\u0002\u0002\u00a3\u00a4\u0005$\u0013\u0002\u00a4\u00a6",
    "\u0007-\u0002\u0002\u00a5\u00a7\u0005\u001e\u0010\u0002\u00a6\u00a5",
    "\u0003\u0002\u0002\u0002\u00a6\u00a7\u0003\u0002\u0002\u0002\u00a7\u00a8",
    "\u0003\u0002\u0002\u0002\u00a8\u00aa\u0007-\u0002\u0002\u00a9\u00ab",
    "\u0005\u0016\f\u0002\u00aa\u00a9\u0003\u0002\u0002\u0002\u00aa\u00ab",
    "\u0003\u0002\u0002\u0002\u00ab\u00ac\u0003\u0002\u0002\u0002\u00ac\u00ad",
    "\u0007\u001b\u0002\u0002\u00ad\u00ae\u0005\u0016\f\u0002\u00ae\u00d7",
    "\u0003\u0002\u0002\u0002\u00af\u00b0\u0007\u0007\u0002\u0002\u00b0\u00b1",
    "\u0007\u001a\u0002\u0002\u00b1\u00b2\u0005\u001e\u0010\u0002\u00b2\u00b3",
    "\u0007\u001b\u0002\u0002\u00b3\u00b4\u0005\u0016\f\u0002\u00b4\u00d7",
    "\u0003\u0002\u0002\u0002\u00b5\u00b6\u0007\u0011\u0002\u0002\u00b6\u00b7",
    "\u0007\u001a\u0002\u0002\u00b7\u00b8\u00073\u0002\u0002\u00b8\u00b9",
    "\u00073\u0002\u0002\u00b9\u00ba\u0007\u0012\u0002\u0002\u00ba\u00bb",
    "\u00073\u0002\u0002\u00bb\u00bc\u0007\u001b\u0002\u0002\u00bc\u00d7",
    "\u0005\u0016\f\u0002\u00bd\u00be\u0007\t\u0002\u0002\u00be\u00d7\u0007",
    "-\u0002\u0002\u00bf\u00c1\u0007\b\u0002\u0002\u00c0\u00c2\u0005$\u0013",
    "\u0002\u00c1\u00c0\u0003\u0002\u0002\u0002\u00c1\u00c2\u0003\u0002\u0002",
    "\u0002\u00c2\u00c3\u0003\u0002\u0002\u0002\u00c3\u00d7\u0007-\u0002",
    "\u0002\u00c4\u00c5\u0007\r\u0002\u0002\u00c5\u00c6\u0007\u001a\u0002",
    "\u0002\u00c6\u00c7\u0005,\u0017\u0002\u00c7\u00c8\u0007\u001b\u0002",
    "\u0002\u00c8\u00c9\u0007-\u0002\u0002\u00c9\u00d7\u0003\u0002\u0002",
    "\u0002\u00ca\u00cb\u0007\u000f\u0002\u0002\u00cb\u00cc\u0007\u001a\u0002",
    "\u0002\u00cc\u00cf\u0005$\u0013\u0002\u00cd\u00ce\u0007\u0018\u0002",
    "\u0002\u00ce\u00d0\u00074\u0002\u0002\u00cf\u00cd\u0003\u0002\u0002",
    "\u0002\u00cf\u00d0\u0003\u0002\u0002\u0002\u00d0\u00d1\u0003\u0002\u0002",
    "\u0002\u00d1\u00d2\u0007\u001b\u0002\u0002\u00d2\u00d3\u0007-\u0002",
    "\u0002\u00d3\u00d7\u0003\u0002\u0002\u0002\u00d4\u00d7\u0005\u001a\u000e",
    "\u0002\u00d5\u00d7\u0007-\u0002\u0002\u00d6\u0094\u0003\u0002\u0002",
    "\u0002\u00d6\u0098\u0003\u0002\u0002\u0002\u00d6\u00a1\u0003\u0002\u0002",
    "\u0002\u00d6\u00af\u0003\u0002\u0002\u0002\u00d6\u00b5\u0003\u0002\u0002",
    "\u0002\u00d6\u00bd\u0003\u0002\u0002\u0002\u00d6\u00bf\u0003\u0002\u0002",
    "\u0002\u00d6\u00c4\u0003\u0002\u0002\u0002\u00d6\u00ca\u0003\u0002\u0002",
    "\u0002\u00d6\u00d4\u0003\u0002\u0002\u0002\u00d6\u00d5\u0003\u0002\u0002",
    "\u0002\u00d7\u0017\u0003\u0002\u0002\u0002\u00d8\u00d9\u0007\u0019\u0002",
    "\u0002\u00d9\u00e2\u0005$\u0013\u0002\u00da\u00dc\u0007\u001a\u0002",
    "\u0002\u00db\u00dd\u0005\u001c\u000f\u0002\u00dc\u00db\u0003\u0002\u0002",
    "\u0002\u00dc\u00dd\u0003\u0002\u0002\u0002\u00dd\u00de\u0003\u0002\u0002",
    "\u0002\u00de\u00e2\u0007\u001b\u0002\u0002\u00df\u00e2\u0007+\u0002",
    "\u0002\u00e0\u00e2\u0007,\u0002\u0002\u00e1\u00d8\u0003\u0002\u0002",
    "\u0002\u00e1\u00da\u0003\u0002\u0002\u0002\u00e1\u00df\u0003\u0002\u0002",
    "\u0002\u00e1\u00e0\u0003\u0002\u0002\u0002\u00e2\u0019\u0003\u0002\u0002",
    "\u0002\u00e3\u00e5\u0007.\u0002\u0002\u00e4\u00e6\u0005\u0016\f\u0002",
    "\u00e5\u00e4\u0003\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002",
    "\u00e6\u00e7\u0003\u0002\u0002\u0002\u00e7\u00e8\u0007/\u0002\u0002",
    "\u00e8\u001b\u0003\u0002\u0002\u0002\u00e9\u00ec\u0005$\u0013\u0002",
    "\u00ea\u00eb\u0007\u0018\u0002\u0002\u00eb\u00ed\u0005$\u0013\u0002",
    "\u00ec\u00ea\u0003\u0002\u0002\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002",
    "\u00ed\u001d\u0003\u0002\u0002\u0002\u00ee\u00f1\u0005 \u0011\u0002",
    "\u00ef\u00f0\u0007*\u0002\u0002\u00f0\u00f2\u0005 \u0011\u0002\u00f1",
    "\u00ef\u0003\u0002\u0002\u0002\u00f1\u00f2\u0003\u0002\u0002\u0002\u00f2",
    "\u001f\u0003\u0002\u0002\u0002\u00f3\u00f6\u0005\"\u0012\u0002\u00f4",
    "\u00f5\u0007)\u0002\u0002\u00f5\u00f7\u0005\"\u0012\u0002\u00f6\u00f4",
    "\u0003\u0002\u0002\u0002\u00f6\u00f7\u0003\u0002\u0002\u0002\u00f7!",
    "\u0003\u0002\u0002\u0002\u00f8\u00f9\u0005$\u0013\u0002\u00f9\u00fa",
    "\u00050\u0019\u0002\u00fa\u00fb\u0005$\u0013\u0002\u00fb#\u0003\u0002",
    "\u0002\u0002\u00fc\u00fe\u0007\'\u0002\u0002\u00fd\u00fc\u0003\u0002",
    "\u0002\u0002\u00fd\u00fe\u0003\u0002\u0002\u0002\u00fe\u00ff\u0003\u0002",
    "\u0002\u0002\u00ff\u0105\u0005&\u0014\u0002\u0100\u0101\u00052\u001a",
    "\u0002\u0101\u0102\u0005&\u0014\u0002\u0102\u0104\u0003\u0002\u0002",
    "\u0002\u0103\u0100\u0003\u0002\u0002\u0002\u0104\u0107\u0003\u0002\u0002",
    "\u0002\u0105\u0103\u0003\u0002\u0002\u0002\u0105\u0106\u0003\u0002\u0002",
    "\u0002\u0106%\u0003\u0002\u0002\u0002\u0107\u0105\u0003\u0002\u0002",
    "\u0002\u0108\u010e\u0005(\u0015\u0002\u0109\u010a\u00054\u001b\u0002",
    "\u010a\u010b\u0005(\u0015\u0002\u010b\u010d\u0003\u0002\u0002\u0002",
    "\u010c\u0109\u0003\u0002\u0002\u0002\u010d\u0110\u0003\u0002\u0002\u0002",
    "\u010e\u010c\u0003\u0002\u0002\u0002\u010e\u010f\u0003\u0002\u0002\u0002",
    "\u010f\'\u0003\u0002\u0002\u0002\u0110\u010e\u0003\u0002\u0002\u0002",
    "\u0111\u0117\u0005,\u0017\u0002\u0112\u0114\u0007\u001a\u0002\u0002",
    "\u0113\u0115\u0005\u001c\u000f\u0002\u0114\u0113\u0003\u0002\u0002\u0002",
    "\u0114\u0115\u0003\u0002\u0002\u0002\u0115\u0116\u0003\u0002\u0002\u0002",
    "\u0116\u0118\u0007\u001b\u0002\u0002\u0117\u0112\u0003\u0002\u0002\u0002",
    "\u0117\u0118\u0003\u0002\u0002\u0002\u0118\u0123\u0003\u0002\u0002\u0002",
    "\u0119\u0123\u00074\u0002\u0002\u011a\u0123\u00076\u0002\u0002\u011b",
    "\u0123\u0005*\u0016\u0002\u011c\u011d\u0007\f\u0002\u0002\u011d\u0123",
    "\u00073\u0002\u0002\u011e\u011f\u0007\u001a\u0002\u0002\u011f\u0120",
    "\u0005$\u0013\u0002\u0120\u0121\u0007\u001b\u0002\u0002\u0121\u0123",
    "\u0003\u0002\u0002\u0002\u0122\u0111\u0003\u0002\u0002\u0002\u0122\u0119",
    "\u0003\u0002\u0002\u0002\u0122\u011a\u0003\u0002\u0002\u0002\u0122\u011b",
    "\u0003\u0002\u0002\u0002\u0122\u011c\u0003\u0002\u0002\u0002\u0122\u011e",
    "\u0003\u0002\u0002\u0002\u0123)\u0003\u0002\u0002\u0002\u0124\u0127",
    "\u00071\u0002\u0002\u0125\u0127\u00072\u0002\u0002\u0126\u0124\u0003",
    "\u0002\u0002\u0002\u0126\u0125\u0003\u0002\u0002\u0002\u0127+\u0003",
    "\u0002\u0002\u0002\u0128\u012c\u00073\u0002\u0002\u0129\u012b\u0005",
    ".\u0018\u0002\u012a\u0129\u0003\u0002\u0002\u0002\u012b\u012e\u0003",
    "\u0002\u0002\u0002\u012c\u012a\u0003\u0002\u0002\u0002\u012c\u012d\u0003",
    "\u0002\u0002\u0002\u012d-\u0003\u0002\u0002\u0002\u012e\u012c\u0003",
    "\u0002\u0002\u0002\u012f\u0130\u00070\u0002\u0002\u0130\u0136\u0007",
    "3\u0002\u0002\u0131\u0132\u0007\u001e\u0002\u0002\u0132\u0133\u0005",
    "$\u0013\u0002\u0133\u0134\u0007\u001f\u0002\u0002\u0134\u0136\u0003",
    "\u0002\u0002\u0002\u0135\u012f\u0003\u0002\u0002\u0002\u0135\u0131\u0003",
    "\u0002\u0002\u0002\u0136/\u0003\u0002\u0002\u0002\u0137\u013e\u0007",
    "$\u0002\u0002\u0138\u013e\u0007%\u0002\u0002\u0139\u013e\u0007!\u0002",
    "\u0002\u013a\u013e\u0007#\u0002\u0002\u013b\u013e\u0007 \u0002\u0002",
    "\u013c\u013e\u0007\"\u0002\u0002\u013d\u0137\u0003\u0002\u0002\u0002",
    "\u013d\u0138\u0003\u0002\u0002\u0002\u013d\u0139\u0003\u0002\u0002\u0002",
    "\u013d\u013a\u0003\u0002\u0002\u0002\u013d\u013b\u0003\u0002\u0002\u0002",
    "\u013d\u013c\u0003\u0002\u0002\u0002\u013e1\u0003\u0002\u0002\u0002",
    "\u013f\u0142\u0007\u001c\u0002\u0002\u0140\u0142\u0007\'\u0002\u0002",
    "\u0141\u013f\u0003\u0002\u0002\u0002\u0141\u0140\u0003\u0002\u0002\u0002",
    "\u01423\u0003\u0002\u0002\u0002\u0143\u0147\u0007\u001d\u0002\u0002",
    "\u0144\u0147\u0007&\u0002\u0002\u0145\u0147\u0007(\u0002\u0002\u0146",
    "\u0143\u0003\u0002\u0002\u0002\u0146\u0144\u0003\u0002\u0002\u0002\u0146",
    "\u0145\u0003\u0002\u0002\u0002\u01475\u0003\u0002\u0002\u0002%;BKV^",
    "irx\u007f\u0089\u0092\u009f\u00a6\u00aa\u00c1\u00cf\u00d6\u00dc\u00e1",
    "\u00e5\u00ec\u00f1\u00f6\u00fd\u0105\u010e\u0114\u0117\u0122\u0126\u012c",
    "\u0135\u013d\u0141\u0146"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, "'if'", "'else'", "'while'", "'return'", 
                     "'break'", "'class'", "'const'", "'new'", "'read'", 
                     "'void'", "'write'", "'for'", "'foreach'", "'in'", 
                     "'char'", "'int'", "'float'", "'bool'", "'string'", 
                     "','", "'='", "'('", "')'", "'+'", "'*'", "'['", "']'", 
                     "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", "'/'", 
                     "'-'", "'%'", "'&&'", "'||'", "'++'", "'--'", "';'", 
                     "'{'", "'}'", "'.'", "'true'", "'false'" ];

var symbolicNames = [ null, "INDENT", "DEDENT", "IF", "ELSE", "WHILE", "RETURN", 
                      "BRAKE", "CLASS", "CONST", "NEW", "READ", "VOID", 
                      "WRITE", "FOR", "FOREACH", "IN", "CHARR", "INT", "FLOAT", 
                      "BOOL", "STRINGR", "COMA", "ASIGN", "PIZQ", "PDER", 
                      "SUMA", "MUL", "PCIZQ", "PCDER", "MENOR", "MAYOR", 
                      "MENORIGUAL", "MAYORIGUAL", "COMPARACION", "DIFERENTE", 
                      "DIV", "RESTA", "MODULO", "AND", "OR", "AUMENTO", 
                      "DISMINUCION", "PUNTOCOMA", "CORCHETEIZQ", "CORCHETEDER", 
                      "PUNTO", "TRUE", "FALSE", "IDENTIFIER", "NUMBER", 
                      "STRING", "CHAR", "COMENTARIO_LINEA", "SPECIAL_COMMENT", 
                      "WS" ];

var ruleNames =  [ "program", "declarations", "constDecl", "numStr", "varDecl", 
                   "classDecl", "methodDecl", "tipoMet", "formPars", "type", 
                   "statement", "asignation", "block", "actPars", "condition", 
                   "condTerm", "condFact", "expr", "term", "factor", "booleano", 
                   "designator", "asigClass", "relop", "addop", "mulop" ];

function CParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

CParser.prototype = Object.create(antlr4.Parser.prototype);
CParser.prototype.constructor = CParser;

Object.defineProperty(CParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

CParser.EOF = antlr4.Token.EOF;
CParser.INDENT = 1;
CParser.DEDENT = 2;
CParser.IF = 3;
CParser.ELSE = 4;
CParser.WHILE = 5;
CParser.RETURN = 6;
CParser.BRAKE = 7;
CParser.CLASS = 8;
CParser.CONST = 9;
CParser.NEW = 10;
CParser.READ = 11;
CParser.VOID = 12;
CParser.WRITE = 13;
CParser.FOR = 14;
CParser.FOREACH = 15;
CParser.IN = 16;
CParser.CHARR = 17;
CParser.INT = 18;
CParser.FLOAT = 19;
CParser.BOOL = 20;
CParser.STRINGR = 21;
CParser.COMA = 22;
CParser.ASIGN = 23;
CParser.PIZQ = 24;
CParser.PDER = 25;
CParser.SUMA = 26;
CParser.MUL = 27;
CParser.PCIZQ = 28;
CParser.PCDER = 29;
CParser.MENOR = 30;
CParser.MAYOR = 31;
CParser.MENORIGUAL = 32;
CParser.MAYORIGUAL = 33;
CParser.COMPARACION = 34;
CParser.DIFERENTE = 35;
CParser.DIV = 36;
CParser.RESTA = 37;
CParser.MODULO = 38;
CParser.AND = 39;
CParser.OR = 40;
CParser.AUMENTO = 41;
CParser.DISMINUCION = 42;
CParser.PUNTOCOMA = 43;
CParser.CORCHETEIZQ = 44;
CParser.CORCHETEDER = 45;
CParser.PUNTO = 46;
CParser.TRUE = 47;
CParser.FALSE = 48;
CParser.IDENTIFIER = 49;
CParser.NUMBER = 50;
CParser.STRING = 51;
CParser.CHAR = 52;
CParser.COMENTARIO_LINEA = 53;
CParser.SPECIAL_COMMENT = 54;
CParser.WS = 55;

CParser.RULE_program = 0;
CParser.RULE_declarations = 1;
CParser.RULE_constDecl = 2;
CParser.RULE_numStr = 3;
CParser.RULE_varDecl = 4;
CParser.RULE_classDecl = 5;
CParser.RULE_methodDecl = 6;
CParser.RULE_tipoMet = 7;
CParser.RULE_formPars = 8;
CParser.RULE_type = 9;
CParser.RULE_statement = 10;
CParser.RULE_asignation = 11;
CParser.RULE_block = 12;
CParser.RULE_actPars = 13;
CParser.RULE_condition = 14;
CParser.RULE_condTerm = 15;
CParser.RULE_condFact = 16;
CParser.RULE_expr = 17;
CParser.RULE_term = 18;
CParser.RULE_factor = 19;
CParser.RULE_booleano = 20;
CParser.RULE_designator = 21;
CParser.RULE_asigClass = 22;
CParser.RULE_relop = 23;
CParser.RULE_addop = 24;
CParser.RULE_mulop = 25;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;


 
ProgramContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ProgramDefContext(parser, ctx) {
	ProgramContext.call(this, parser);
    ProgramContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ProgramDefContext.prototype = Object.create(ProgramContext.prototype);
ProgramDefContext.prototype.constructor = ProgramDefContext;

CParser.ProgramDefContext = ProgramDefContext;

ProgramDefContext.prototype.CLASS = function() {
    return this.getToken(CParser.CLASS, 0);
};

ProgramDefContext.prototype.IDENTIFIER = function() {
    return this.getToken(CParser.IDENTIFIER, 0);
};

ProgramDefContext.prototype.CORCHETEIZQ = function() {
    return this.getToken(CParser.CORCHETEIZQ, 0);
};

ProgramDefContext.prototype.CORCHETEDER = function() {
    return this.getToken(CParser.CORCHETEDER, 0);
};

ProgramDefContext.prototype.EOF = function() {
    return this.getToken(CParser.EOF, 0);
};

ProgramDefContext.prototype.declarations = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DeclarationsContext);
    } else {
        return this.getTypedRuleContext(DeclarationsContext,i);
    }
};

ProgramDefContext.prototype.methodDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MethodDeclContext);
    } else {
        return this.getTypedRuleContext(MethodDeclContext,i);
    }
};
ProgramDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitProgramDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CParser.ProgramContext = ProgramContext;

CParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CParser.RULE_program);
    var _la = 0; // Token type
    try {
        localctx = new ProgramDefContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 52;
        this.match(CParser.CLASS);
        this.state = 53;
        this.match(CParser.IDENTIFIER);
        this.state = 57;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CParser.CLASS) | (1 << CParser.CONST) | (1 << CParser.CHARR) | (1 << CParser.INT) | (1 << CParser.FLOAT) | (1 << CParser.BOOL) | (1 << CParser.STRINGR))) !== 0) || _la===CParser.IDENTIFIER) {
            this.state = 54;
            this.declarations();
            this.state = 59;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 60;
        this.match(CParser.CORCHETEIZQ);
        this.state = 64;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CParser.VOID) | (1 << CParser.CHARR) | (1 << CParser.INT) | (1 << CParser.FLOAT) | (1 << CParser.BOOL) | (1 << CParser.STRINGR))) !== 0) || _la===CParser.IDENTIFIER) {
            this.state = 61;
            this.methodDecl();
            this.state = 66;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 67;
        this.match(CParser.CORCHETEDER);
        this.state = 68;
        this.match(CParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DeclarationsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_declarations;
    return this;
}

DeclarationsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarationsContext.prototype.constructor = DeclarationsContext;


 
DeclarationsContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function DeclaracionVariableContext(parser, ctx) {
	DeclarationsContext.call(this, parser);
    DeclarationsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DeclaracionVariableContext.prototype = Object.create(DeclarationsContext.prototype);
DeclaracionVariableContext.prototype.constructor = DeclaracionVariableContext;

CParser.DeclaracionVariableContext = DeclaracionVariableContext;

DeclaracionVariableContext.prototype.varDecl = function() {
    return this.getTypedRuleContext(VarDeclContext,0);
};
DeclaracionVariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitDeclaracionVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DeclaracionConstContext(parser, ctx) {
	DeclarationsContext.call(this, parser);
    DeclarationsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DeclaracionConstContext.prototype = Object.create(DeclarationsContext.prototype);
DeclaracionConstContext.prototype.constructor = DeclaracionConstContext;

CParser.DeclaracionConstContext = DeclaracionConstContext;

DeclaracionConstContext.prototype.constDecl = function() {
    return this.getTypedRuleContext(ConstDeclContext,0);
};
DeclaracionConstContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitDeclaracionConst(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DeclaracionClaseContext(parser, ctx) {
	DeclarationsContext.call(this, parser);
    DeclarationsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DeclaracionClaseContext.prototype = Object.create(DeclarationsContext.prototype);
DeclaracionClaseContext.prototype.constructor = DeclaracionClaseContext;

CParser.DeclaracionClaseContext = DeclaracionClaseContext;

DeclaracionClaseContext.prototype.classDecl = function() {
    return this.getTypedRuleContext(ClassDeclContext,0);
};
DeclaracionClaseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitDeclaracionClase(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CParser.DeclarationsContext = DeclarationsContext;

CParser.prototype.declarations = function() {

    var localctx = new DeclarationsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CParser.RULE_declarations);
    try {
        this.state = 73;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CParser.CONST:
            localctx = new DeclaracionConstContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 70;
            this.constDecl();
            break;
        case CParser.CHARR:
        case CParser.INT:
        case CParser.FLOAT:
        case CParser.BOOL:
        case CParser.STRINGR:
        case CParser.IDENTIFIER:
            localctx = new DeclaracionVariableContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 71;
            this.varDecl();
            break;
        case CParser.CLASS:
            localctx = new DeclaracionClaseContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 72;
            this.classDecl();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConstDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_constDecl;
    return this;
}

ConstDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstDeclContext.prototype.constructor = ConstDeclContext;


 
ConstDeclContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ConstanteContext(parser, ctx) {
	ConstDeclContext.call(this, parser);
    ConstDeclContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConstanteContext.prototype = Object.create(ConstDeclContext.prototype);
ConstanteContext.prototype.constructor = ConstanteContext;

CParser.ConstanteContext = ConstanteContext;

ConstanteContext.prototype.CONST = function() {
    return this.getToken(CParser.CONST, 0);
};

ConstanteContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

ConstanteContext.prototype.IDENTIFIER = function() {
    return this.getToken(CParser.IDENTIFIER, 0);
};

ConstanteContext.prototype.ASIGN = function() {
    return this.getToken(CParser.ASIGN, 0);
};

ConstanteContext.prototype.numStr = function() {
    return this.getTypedRuleContext(NumStrContext,0);
};

ConstanteContext.prototype.PUNTOCOMA = function() {
    return this.getToken(CParser.PUNTOCOMA, 0);
};
ConstanteContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitConstante(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CParser.ConstDeclContext = ConstDeclContext;

CParser.prototype.constDecl = function() {

    var localctx = new ConstDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CParser.RULE_constDecl);
    try {
        localctx = new ConstanteContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        this.match(CParser.CONST);
        this.state = 76;
        this.type();
        this.state = 77;
        this.match(CParser.IDENTIFIER);
        this.state = 78;
        this.match(CParser.ASIGN);
        this.state = 79;
        this.numStr();
        this.state = 80;
        this.match(CParser.PUNTOCOMA);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumStrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_numStr;
    return this;
}

NumStrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumStrContext.prototype.constructor = NumStrContext;


 
NumStrContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function NumeroContext(parser, ctx) {
	NumStrContext.call(this, parser);
    NumStrContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumeroContext.prototype = Object.create(NumStrContext.prototype);
NumeroContext.prototype.constructor = NumeroContext;

CParser.NumeroContext = NumeroContext;

NumeroContext.prototype.NUMBER = function() {
    return this.getToken(CParser.NUMBER, 0);
};
NumeroContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitNumero(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CharContext(parser, ctx) {
	NumStrContext.call(this, parser);
    NumStrContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CharContext.prototype = Object.create(NumStrContext.prototype);
CharContext.prototype.constructor = CharContext;

CParser.CharContext = CharContext;

CharContext.prototype.CHAR = function() {
    return this.getToken(CParser.CHAR, 0);
};
CharContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitChar(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CParser.NumStrContext = NumStrContext;

CParser.prototype.numStr = function() {

    var localctx = new NumStrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CParser.RULE_numStr);
    try {
        this.state = 84;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CParser.NUMBER:
            localctx = new NumeroContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 82;
            this.match(CParser.NUMBER);
            break;
        case CParser.CHAR:
            localctx = new CharContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 83;
            this.match(CParser.CHAR);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_varDecl;
    return this;
}

VarDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarDeclContext.prototype.constructor = VarDeclContext;


 
VarDeclContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function VariableContext(parser, ctx) {
	VarDeclContext.call(this, parser);
    VarDeclContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VariableContext.prototype = Object.create(VarDeclContext.prototype);
VariableContext.prototype.constructor = VariableContext;

CParser.VariableContext = VariableContext;

VariableContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

VariableContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CParser.IDENTIFIER);
    } else {
        return this.getToken(CParser.IDENTIFIER, i);
    }
};


VariableContext.prototype.PUNTOCOMA = function() {
    return this.getToken(CParser.PUNTOCOMA, 0);
};

VariableContext.prototype.COMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CParser.COMA);
    } else {
        return this.getToken(CParser.COMA, i);
    }
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CParser.VarDeclContext = VarDeclContext;

CParser.prototype.varDecl = function() {

    var localctx = new VarDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, CParser.RULE_varDecl);
    var _la = 0; // Token type
    try {
        localctx = new VariableContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        this.type();
        this.state = 87;
        this.match(CParser.IDENTIFIER);
        this.state = 92;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CParser.COMA) {
            this.state = 88;
            this.match(CParser.COMA);
            this.state = 89;
            this.match(CParser.IDENTIFIER);
            this.state = 94;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 95;
        this.match(CParser.PUNTOCOMA);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ClassDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_classDecl;
    return this;
}

ClassDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassDeclContext.prototype.constructor = ClassDeclContext;


 
ClassDeclContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ClaseContext(parser, ctx) {
	ClassDeclContext.call(this, parser);
    ClassDeclContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ClaseContext.prototype = Object.create(ClassDeclContext.prototype);
ClaseContext.prototype.constructor = ClaseContext;

CParser.ClaseContext = ClaseContext;

ClaseContext.prototype.CLASS = function() {
    return this.getToken(CParser.CLASS, 0);
};

ClaseContext.prototype.IDENTIFIER = function() {
    return this.getToken(CParser.IDENTIFIER, 0);
};

ClaseContext.prototype.CORCHETEIZQ = function() {
    return this.getToken(CParser.CORCHETEIZQ, 0);
};

ClaseContext.prototype.CORCHETEDER = function() {
    return this.getToken(CParser.CORCHETEDER, 0);
};

ClaseContext.prototype.varDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarDeclContext);
    } else {
        return this.getTypedRuleContext(VarDeclContext,i);
    }
};
ClaseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitClase(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CParser.ClassDeclContext = ClassDeclContext;

CParser.prototype.classDecl = function() {

    var localctx = new ClassDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, CParser.RULE_classDecl);
    var _la = 0; // Token type
    try {
        localctx = new ClaseContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        this.match(CParser.CLASS);
        this.state = 98;
        this.match(CParser.IDENTIFIER);
        this.state = 99;
        this.match(CParser.CORCHETEIZQ);
        this.state = 103;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CParser.CHARR) | (1 << CParser.INT) | (1 << CParser.FLOAT) | (1 << CParser.BOOL) | (1 << CParser.STRINGR))) !== 0) || _la===CParser.IDENTIFIER) {
            this.state = 100;
            this.varDecl();
            this.state = 105;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 106;
        this.match(CParser.CORCHETEDER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MethodDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_methodDecl;
    return this;
}

MethodDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodDeclContext.prototype.constructor = MethodDeclContext;


 
MethodDeclContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function MetodoContext(parser, ctx) {
	MethodDeclContext.call(this, parser);
    MethodDeclContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MetodoContext.prototype = Object.create(MethodDeclContext.prototype);
MetodoContext.prototype.constructor = MetodoContext;

CParser.MetodoContext = MetodoContext;

MetodoContext.prototype.tipoMet = function() {
    return this.getTypedRuleContext(TipoMetContext,0);
};

MetodoContext.prototype.IDENTIFIER = function() {
    return this.getToken(CParser.IDENTIFIER, 0);
};

MetodoContext.prototype.PIZQ = function() {
    return this.getToken(CParser.PIZQ, 0);
};

MetodoContext.prototype.PDER = function() {
    return this.getToken(CParser.PDER, 0);
};

MetodoContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

MetodoContext.prototype.formPars = function() {
    return this.getTypedRuleContext(FormParsContext,0);
};

MetodoContext.prototype.varDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarDeclContext);
    } else {
        return this.getTypedRuleContext(VarDeclContext,i);
    }
};
MetodoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitMetodo(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CParser.MethodDeclContext = MethodDeclContext;

CParser.prototype.methodDecl = function() {

    var localctx = new MethodDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, CParser.RULE_methodDecl);
    var _la = 0; // Token type
    try {
        localctx = new MetodoContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
        this.tipoMet();
        this.state = 109;
        this.match(CParser.IDENTIFIER);
        this.state = 110;
        this.match(CParser.PIZQ);
        this.state = 112;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CParser.CHARR) | (1 << CParser.INT) | (1 << CParser.FLOAT) | (1 << CParser.BOOL) | (1 << CParser.STRINGR))) !== 0) || _la===CParser.IDENTIFIER) {
            this.state = 111;
            this.formPars();
        }

        this.state = 114;
        this.match(CParser.PDER);
        this.state = 118;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CParser.CHARR) | (1 << CParser.INT) | (1 << CParser.FLOAT) | (1 << CParser.BOOL) | (1 << CParser.STRINGR))) !== 0) || _la===CParser.IDENTIFIER) {
            this.state = 115;
            this.varDecl();
            this.state = 120;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 121;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TipoMetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_tipoMet;
    return this;
}

TipoMetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TipoMetContext.prototype.constructor = TipoMetContext;


 
TipoMetContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function VoidContext(parser, ctx) {
	TipoMetContext.call(this, parser);
    TipoMetContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VoidContext.prototype = Object.create(TipoMetContext.prototype);
VoidContext.prototype.constructor = VoidContext;

CParser.VoidContext = VoidContext;

VoidContext.prototype.VOID = function() {
    return this.getToken(CParser.VOID, 0);
};
VoidContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitVoid(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TipoDeclaContext(parser, ctx) {
	TipoMetContext.call(this, parser);
    TipoMetContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TipoDeclaContext.prototype = Object.create(TipoMetContext.prototype);
TipoDeclaContext.prototype.constructor = TipoDeclaContext;

CParser.TipoDeclaContext = TipoDeclaContext;

TipoDeclaContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};
TipoDeclaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitTipoDecla(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CParser.TipoMetContext = TipoMetContext;

CParser.prototype.tipoMet = function() {

    var localctx = new TipoMetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, CParser.RULE_tipoMet);
    try {
        this.state = 125;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CParser.CHARR:
        case CParser.INT:
        case CParser.FLOAT:
        case CParser.BOOL:
        case CParser.STRINGR:
        case CParser.IDENTIFIER:
            localctx = new TipoDeclaContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 123;
            this.type();
            break;
        case CParser.VOID:
            localctx = new VoidContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 124;
            this.match(CParser.VOID);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FormParsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_formPars;
    return this;
}

FormParsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormParsContext.prototype.constructor = FormParsContext;


 
FormParsContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function DefVarMulContext(parser, ctx) {
	FormParsContext.call(this, parser);
    FormParsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DefVarMulContext.prototype = Object.create(FormParsContext.prototype);
DefVarMulContext.prototype.constructor = DefVarMulContext;

CParser.DefVarMulContext = DefVarMulContext;

DefVarMulContext.prototype.type = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TypeContext);
    } else {
        return this.getTypedRuleContext(TypeContext,i);
    }
};

DefVarMulContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CParser.IDENTIFIER);
    } else {
        return this.getToken(CParser.IDENTIFIER, i);
    }
};


DefVarMulContext.prototype.COMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CParser.COMA);
    } else {
        return this.getToken(CParser.COMA, i);
    }
};

DefVarMulContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitDefVarMul(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CParser.FormParsContext = FormParsContext;

CParser.prototype.formPars = function() {

    var localctx = new FormParsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, CParser.RULE_formPars);
    var _la = 0; // Token type
    try {
        localctx = new DefVarMulContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 127;
        this.type();
        this.state = 128;
        this.match(CParser.IDENTIFIER);
        this.state = 135;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CParser.COMA) {
            this.state = 129;
            this.match(CParser.COMA);
            this.state = 130;
            this.type();
            this.state = 131;
            this.match(CParser.IDENTIFIER);
            this.state = 137;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;


 
TypeContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function BoolTContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BoolTContext.prototype = Object.create(TypeContext.prototype);
BoolTContext.prototype.constructor = BoolTContext;

CParser.BoolTContext = BoolTContext;

BoolTContext.prototype.BOOL = function() {
    return this.getToken(CParser.BOOL, 0);
};
BoolTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitBoolT(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IntTContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntTContext.prototype = Object.create(TypeContext.prototype);
IntTContext.prototype.constructor = IntTContext;

CParser.IntTContext = IntTContext;

IntTContext.prototype.INT = function() {
    return this.getToken(CParser.INT, 0);
};
IntTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitIntT(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StringTContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringTContext.prototype = Object.create(TypeContext.prototype);
StringTContext.prototype.constructor = StringTContext;

CParser.StringTContext = StringTContext;

StringTContext.prototype.STRINGR = function() {
    return this.getToken(CParser.STRINGR, 0);
};
StringTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitStringT(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdTContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdTContext.prototype = Object.create(TypeContext.prototype);
IdTContext.prototype.constructor = IdTContext;

CParser.IdTContext = IdTContext;

IdTContext.prototype.IDENTIFIER = function() {
    return this.getToken(CParser.IDENTIFIER, 0);
};
IdTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitIdT(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FloatTContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FloatTContext.prototype = Object.create(TypeContext.prototype);
FloatTContext.prototype.constructor = FloatTContext;

CParser.FloatTContext = FloatTContext;

FloatTContext.prototype.FLOAT = function() {
    return this.getToken(CParser.FLOAT, 0);
};
FloatTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitFloatT(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CharTContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CharTContext.prototype = Object.create(TypeContext.prototype);
CharTContext.prototype.constructor = CharTContext;

CParser.CharTContext = CharTContext;

CharTContext.prototype.CHARR = function() {
    return this.getToken(CParser.CHARR, 0);
};
CharTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitCharT(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CParser.TypeContext = TypeContext;

CParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, CParser.RULE_type);
    try {
        this.state = 144;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CParser.INT:
            localctx = new IntTContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 138;
            this.match(CParser.INT);
            break;
        case CParser.CHARR:
            localctx = new CharTContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 139;
            this.match(CParser.CHARR);
            break;
        case CParser.FLOAT:
            localctx = new FloatTContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 140;
            this.match(CParser.FLOAT);
            break;
        case CParser.BOOL:
            localctx = new BoolTContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 141;
            this.match(CParser.BOOL);
            break;
        case CParser.STRINGR:
            localctx = new StringTContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 142;
            this.match(CParser.STRINGR);
            break;
        case CParser.IDENTIFIER:
            localctx = new IdTContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 143;
            this.match(CParser.IDENTIFIER);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;


 
StatementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function IfelseDefContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IfelseDefContext.prototype = Object.create(StatementContext.prototype);
IfelseDefContext.prototype.constructor = IfelseDefContext;

CParser.IfelseDefContext = IfelseDefContext;

IfelseDefContext.prototype.IF = function() {
    return this.getToken(CParser.IF, 0);
};

IfelseDefContext.prototype.PIZQ = function() {
    return this.getToken(CParser.PIZQ, 0);
};

IfelseDefContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

IfelseDefContext.prototype.PDER = function() {
    return this.getToken(CParser.PDER, 0);
};

IfelseDefContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

IfelseDefContext.prototype.ELSE = function() {
    return this.getToken(CParser.ELSE, 0);
};
IfelseDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitIfelseDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PuntoComaContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PuntoComaContext.prototype = Object.create(StatementContext.prototype);
PuntoComaContext.prototype.constructor = PuntoComaContext;

CParser.PuntoComaContext = PuntoComaContext;

PuntoComaContext.prototype.PUNTOCOMA = function() {
    return this.getToken(CParser.PUNTOCOMA, 0);
};
PuntoComaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitPuntoComa(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ForDefContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ForDefContext.prototype = Object.create(StatementContext.prototype);
ForDefContext.prototype.constructor = ForDefContext;

CParser.ForDefContext = ForDefContext;

ForDefContext.prototype.FOR = function() {
    return this.getToken(CParser.FOR, 0);
};

ForDefContext.prototype.PIZQ = function() {
    return this.getToken(CParser.PIZQ, 0);
};

ForDefContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ForDefContext.prototype.PUNTOCOMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CParser.PUNTOCOMA);
    } else {
        return this.getToken(CParser.PUNTOCOMA, i);
    }
};


ForDefContext.prototype.PDER = function() {
    return this.getToken(CParser.PDER, 0);
};

ForDefContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ForDefContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};
ForDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitForDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DesigClassdefContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DesigClassdefContext.prototype = Object.create(StatementContext.prototype);
DesigClassdefContext.prototype.constructor = DesigClassdefContext;

CParser.DesigClassdefContext = DesigClassdefContext;

DesigClassdefContext.prototype.designator = function() {
    return this.getTypedRuleContext(DesignatorContext,0);
};

DesigClassdefContext.prototype.asignation = function() {
    return this.getTypedRuleContext(AsignationContext,0);
};

DesigClassdefContext.prototype.PUNTOCOMA = function() {
    return this.getToken(CParser.PUNTOCOMA, 0);
};
DesigClassdefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitDesigClassdef(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function WhileDefContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

WhileDefContext.prototype = Object.create(StatementContext.prototype);
WhileDefContext.prototype.constructor = WhileDefContext;

CParser.WhileDefContext = WhileDefContext;

WhileDefContext.prototype.WHILE = function() {
    return this.getToken(CParser.WHILE, 0);
};

WhileDefContext.prototype.PIZQ = function() {
    return this.getToken(CParser.PIZQ, 0);
};

WhileDefContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

WhileDefContext.prototype.PDER = function() {
    return this.getToken(CParser.PDER, 0);
};

WhileDefContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};
WhileDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitWhileDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BreakContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BreakContext.prototype = Object.create(StatementContext.prototype);
BreakContext.prototype.constructor = BreakContext;

CParser.BreakContext = BreakContext;

BreakContext.prototype.BRAKE = function() {
    return this.getToken(CParser.BRAKE, 0);
};

BreakContext.prototype.PUNTOCOMA = function() {
    return this.getToken(CParser.PUNTOCOMA, 0);
};
BreakContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitBreak(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ReturnDefContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ReturnDefContext.prototype = Object.create(StatementContext.prototype);
ReturnDefContext.prototype.constructor = ReturnDefContext;

CParser.ReturnDefContext = ReturnDefContext;

ReturnDefContext.prototype.RETURN = function() {
    return this.getToken(CParser.RETURN, 0);
};

ReturnDefContext.prototype.PUNTOCOMA = function() {
    return this.getToken(CParser.PUNTOCOMA, 0);
};

ReturnDefContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ReturnDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitReturnDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function WriteDefContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

WriteDefContext.prototype = Object.create(StatementContext.prototype);
WriteDefContext.prototype.constructor = WriteDefContext;

CParser.WriteDefContext = WriteDefContext;

WriteDefContext.prototype.WRITE = function() {
    return this.getToken(CParser.WRITE, 0);
};

WriteDefContext.prototype.PIZQ = function() {
    return this.getToken(CParser.PIZQ, 0);
};

WriteDefContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

WriteDefContext.prototype.PDER = function() {
    return this.getToken(CParser.PDER, 0);
};

WriteDefContext.prototype.PUNTOCOMA = function() {
    return this.getToken(CParser.PUNTOCOMA, 0);
};

WriteDefContext.prototype.COMA = function() {
    return this.getToken(CParser.COMA, 0);
};

WriteDefContext.prototype.NUMBER = function() {
    return this.getToken(CParser.NUMBER, 0);
};
WriteDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitWriteDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ReadDefContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ReadDefContext.prototype = Object.create(StatementContext.prototype);
ReadDefContext.prototype.constructor = ReadDefContext;

CParser.ReadDefContext = ReadDefContext;

ReadDefContext.prototype.READ = function() {
    return this.getToken(CParser.READ, 0);
};

ReadDefContext.prototype.PIZQ = function() {
    return this.getToken(CParser.PIZQ, 0);
};

ReadDefContext.prototype.designator = function() {
    return this.getTypedRuleContext(DesignatorContext,0);
};

ReadDefContext.prototype.PDER = function() {
    return this.getToken(CParser.PDER, 0);
};

ReadDefContext.prototype.PUNTOCOMA = function() {
    return this.getToken(CParser.PUNTOCOMA, 0);
};
ReadDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitReadDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BlockDefContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BlockDefContext.prototype = Object.create(StatementContext.prototype);
BlockDefContext.prototype.constructor = BlockDefContext;

CParser.BlockDefContext = BlockDefContext;

BlockDefContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};
BlockDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitBlockDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ForeachDefContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ForeachDefContext.prototype = Object.create(StatementContext.prototype);
ForeachDefContext.prototype.constructor = ForeachDefContext;

CParser.ForeachDefContext = ForeachDefContext;

ForeachDefContext.prototype.FOREACH = function() {
    return this.getToken(CParser.FOREACH, 0);
};

ForeachDefContext.prototype.PIZQ = function() {
    return this.getToken(CParser.PIZQ, 0);
};

ForeachDefContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CParser.IDENTIFIER);
    } else {
        return this.getToken(CParser.IDENTIFIER, i);
    }
};


ForeachDefContext.prototype.IN = function() {
    return this.getToken(CParser.IN, 0);
};

ForeachDefContext.prototype.PDER = function() {
    return this.getToken(CParser.PDER, 0);
};

ForeachDefContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};
ForeachDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitForeachDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CParser.StatementContext = StatementContext;

CParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, CParser.RULE_statement);
    var _la = 0; // Token type
    try {
        this.state = 212;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CParser.IDENTIFIER:
            localctx = new DesigClassdefContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 146;
            this.designator();
            this.state = 147;
            this.asignation();
            this.state = 148;
            this.match(CParser.PUNTOCOMA);
            break;
        case CParser.IF:
            localctx = new IfelseDefContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 150;
            this.match(CParser.IF);
            this.state = 151;
            this.match(CParser.PIZQ);
            this.state = 152;
            this.condition();
            this.state = 153;
            this.match(CParser.PDER);
            this.state = 154;
            this.statement();
            this.state = 157;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
            if(la_===1) {
                this.state = 155;
                this.match(CParser.ELSE);
                this.state = 156;
                this.statement();

            }
            break;
        case CParser.FOR:
            localctx = new ForDefContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 159;
            this.match(CParser.FOR);
            this.state = 160;
            this.match(CParser.PIZQ);
            this.state = 161;
            this.expr();
            this.state = 162;
            this.match(CParser.PUNTOCOMA);
            this.state = 164;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===CParser.NEW || _la===CParser.PIZQ || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (CParser.RESTA - 37)) | (1 << (CParser.TRUE - 37)) | (1 << (CParser.FALSE - 37)) | (1 << (CParser.IDENTIFIER - 37)) | (1 << (CParser.NUMBER - 37)) | (1 << (CParser.CHAR - 37)))) !== 0)) {
                this.state = 163;
                this.condition();
            }

            this.state = 166;
            this.match(CParser.PUNTOCOMA);
            this.state = 168;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CParser.IF) | (1 << CParser.WHILE) | (1 << CParser.RETURN) | (1 << CParser.BRAKE) | (1 << CParser.READ) | (1 << CParser.WRITE) | (1 << CParser.FOR) | (1 << CParser.FOREACH))) !== 0) || ((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (CParser.PUNTOCOMA - 43)) | (1 << (CParser.CORCHETEIZQ - 43)) | (1 << (CParser.IDENTIFIER - 43)))) !== 0)) {
                this.state = 167;
                this.statement();
            }

            this.state = 170;
            this.match(CParser.PDER);
            this.state = 171;
            this.statement();
            break;
        case CParser.WHILE:
            localctx = new WhileDefContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 173;
            this.match(CParser.WHILE);
            this.state = 174;
            this.match(CParser.PIZQ);
            this.state = 175;
            this.condition();
            this.state = 176;
            this.match(CParser.PDER);
            this.state = 177;
            this.statement();
            break;
        case CParser.FOREACH:
            localctx = new ForeachDefContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 179;
            this.match(CParser.FOREACH);
            this.state = 180;
            this.match(CParser.PIZQ);
            this.state = 181;
            this.match(CParser.IDENTIFIER);
            this.state = 182;
            this.match(CParser.IDENTIFIER);
            this.state = 183;
            this.match(CParser.IN);
            this.state = 184;
            this.match(CParser.IDENTIFIER);
            this.state = 185;
            this.match(CParser.PDER);
            this.state = 186;
            this.statement();
            break;
        case CParser.BRAKE:
            localctx = new BreakContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 187;
            this.match(CParser.BRAKE);
            this.state = 188;
            this.match(CParser.PUNTOCOMA);
            break;
        case CParser.RETURN:
            localctx = new ReturnDefContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 189;
            this.match(CParser.RETURN);
            this.state = 191;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===CParser.NEW || _la===CParser.PIZQ || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (CParser.RESTA - 37)) | (1 << (CParser.TRUE - 37)) | (1 << (CParser.FALSE - 37)) | (1 << (CParser.IDENTIFIER - 37)) | (1 << (CParser.NUMBER - 37)) | (1 << (CParser.CHAR - 37)))) !== 0)) {
                this.state = 190;
                this.expr();
            }

            this.state = 193;
            this.match(CParser.PUNTOCOMA);
            break;
        case CParser.READ:
            localctx = new ReadDefContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 194;
            this.match(CParser.READ);
            this.state = 195;
            this.match(CParser.PIZQ);
            this.state = 196;
            this.designator();
            this.state = 197;
            this.match(CParser.PDER);
            this.state = 198;
            this.match(CParser.PUNTOCOMA);
            break;
        case CParser.WRITE:
            localctx = new WriteDefContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 200;
            this.match(CParser.WRITE);
            this.state = 201;
            this.match(CParser.PIZQ);
            this.state = 202;
            this.expr();
            this.state = 205;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===CParser.COMA) {
                this.state = 203;
                this.match(CParser.COMA);
                this.state = 204;
                this.match(CParser.NUMBER);
            }

            this.state = 207;
            this.match(CParser.PDER);
            this.state = 208;
            this.match(CParser.PUNTOCOMA);
            break;
        case CParser.CORCHETEIZQ:
            localctx = new BlockDefContext(this, localctx);
            this.enterOuterAlt(localctx, 10);
            this.state = 210;
            this.block();
            break;
        case CParser.PUNTOCOMA:
            localctx = new PuntoComaContext(this, localctx);
            this.enterOuterAlt(localctx, 11);
            this.state = 211;
            this.match(CParser.PUNTOCOMA);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AsignationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_asignation;
    return this;
}

AsignationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AsignationContext.prototype.constructor = AsignationContext;


 
AsignationContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ListaContext(parser, ctx) {
	AsignationContext.call(this, parser);
    AsignationContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ListaContext.prototype = Object.create(AsignationContext.prototype);
ListaContext.prototype.constructor = ListaContext;

CParser.ListaContext = ListaContext;

ListaContext.prototype.PIZQ = function() {
    return this.getToken(CParser.PIZQ, 0);
};

ListaContext.prototype.PDER = function() {
    return this.getToken(CParser.PDER, 0);
};

ListaContext.prototype.actPars = function() {
    return this.getTypedRuleContext(ActParsContext,0);
};
ListaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitLista(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AsignacionContext(parser, ctx) {
	AsignationContext.call(this, parser);
    AsignationContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AsignacionContext.prototype = Object.create(AsignationContext.prototype);
AsignacionContext.prototype.constructor = AsignacionContext;

CParser.AsignacionContext = AsignacionContext;

AsignacionContext.prototype.ASIGN = function() {
    return this.getToken(CParser.ASIGN, 0);
};

AsignacionContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
AsignacionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitAsignacion(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MenosmenosContext(parser, ctx) {
	AsignationContext.call(this, parser);
    AsignationContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MenosmenosContext.prototype = Object.create(AsignationContext.prototype);
MenosmenosContext.prototype.constructor = MenosmenosContext;

CParser.MenosmenosContext = MenosmenosContext;

MenosmenosContext.prototype.AUMENTO = function() {
    return this.getToken(CParser.AUMENTO, 0);
};
MenosmenosContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitMenosmenos(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MasmasContext(parser, ctx) {
	AsignationContext.call(this, parser);
    AsignationContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MasmasContext.prototype = Object.create(AsignationContext.prototype);
MasmasContext.prototype.constructor = MasmasContext;

CParser.MasmasContext = MasmasContext;

MasmasContext.prototype.DISMINUCION = function() {
    return this.getToken(CParser.DISMINUCION, 0);
};
MasmasContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitMasmas(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CParser.AsignationContext = AsignationContext;

CParser.prototype.asignation = function() {

    var localctx = new AsignationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, CParser.RULE_asignation);
    var _la = 0; // Token type
    try {
        this.state = 223;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CParser.ASIGN:
            localctx = new AsignacionContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 214;
            this.match(CParser.ASIGN);
            this.state = 215;
            this.expr();
            break;
        case CParser.PIZQ:
            localctx = new ListaContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 216;
            this.match(CParser.PIZQ);
            this.state = 218;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===CParser.NEW || _la===CParser.PIZQ || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (CParser.RESTA - 37)) | (1 << (CParser.TRUE - 37)) | (1 << (CParser.FALSE - 37)) | (1 << (CParser.IDENTIFIER - 37)) | (1 << (CParser.NUMBER - 37)) | (1 << (CParser.CHAR - 37)))) !== 0)) {
                this.state = 217;
                this.actPars();
            }

            this.state = 220;
            this.match(CParser.PDER);
            break;
        case CParser.AUMENTO:
            localctx = new MenosmenosContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 221;
            this.match(CParser.AUMENTO);
            break;
        case CParser.DISMINUCION:
            localctx = new MasmasContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 222;
            this.match(CParser.DISMINUCION);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;


 
BlockContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function BloqueContext(parser, ctx) {
	BlockContext.call(this, parser);
    BlockContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BloqueContext.prototype = Object.create(BlockContext.prototype);
BloqueContext.prototype.constructor = BloqueContext;

CParser.BloqueContext = BloqueContext;

BloqueContext.prototype.CORCHETEIZQ = function() {
    return this.getToken(CParser.CORCHETEIZQ, 0);
};

BloqueContext.prototype.CORCHETEDER = function() {
    return this.getToken(CParser.CORCHETEDER, 0);
};

BloqueContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};
BloqueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitBloque(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CParser.BlockContext = BlockContext;

CParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, CParser.RULE_block);
    var _la = 0; // Token type
    try {
        localctx = new BloqueContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 225;
        this.match(CParser.CORCHETEIZQ);
        this.state = 227;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CParser.IF) | (1 << CParser.WHILE) | (1 << CParser.RETURN) | (1 << CParser.BRAKE) | (1 << CParser.READ) | (1 << CParser.WRITE) | (1 << CParser.FOR) | (1 << CParser.FOREACH))) !== 0) || ((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (CParser.PUNTOCOMA - 43)) | (1 << (CParser.CORCHETEIZQ - 43)) | (1 << (CParser.IDENTIFIER - 43)))) !== 0)) {
            this.state = 226;
            this.statement();
        }

        this.state = 229;
        this.match(CParser.CORCHETEDER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ActParsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_actPars;
    return this;
}

ActParsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ActParsContext.prototype.constructor = ActParsContext;


 
ActParsContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ParteListaContext(parser, ctx) {
	ActParsContext.call(this, parser);
    ActParsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParteListaContext.prototype = Object.create(ActParsContext.prototype);
ParteListaContext.prototype.constructor = ParteListaContext;

CParser.ParteListaContext = ParteListaContext;

ParteListaContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ParteListaContext.prototype.COMA = function() {
    return this.getToken(CParser.COMA, 0);
};
ParteListaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitParteLista(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CParser.ActParsContext = ActParsContext;

CParser.prototype.actPars = function() {

    var localctx = new ActParsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, CParser.RULE_actPars);
    var _la = 0; // Token type
    try {
        localctx = new ParteListaContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 231;
        this.expr();
        this.state = 234;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CParser.COMA) {
            this.state = 232;
            this.match(CParser.COMA);
            this.state = 233;
            this.expr();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_condition;
    return this;
}

ConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionContext.prototype.constructor = ConditionContext;


 
ConditionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function CondicionContext(parser, ctx) {
	ConditionContext.call(this, parser);
    ConditionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CondicionContext.prototype = Object.create(ConditionContext.prototype);
CondicionContext.prototype.constructor = CondicionContext;

CParser.CondicionContext = CondicionContext;

CondicionContext.prototype.condTerm = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CondTermContext);
    } else {
        return this.getTypedRuleContext(CondTermContext,i);
    }
};

CondicionContext.prototype.OR = function() {
    return this.getToken(CParser.OR, 0);
};
CondicionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitCondicion(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CParser.ConditionContext = ConditionContext;

CParser.prototype.condition = function() {

    var localctx = new ConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, CParser.RULE_condition);
    var _la = 0; // Token type
    try {
        localctx = new CondicionContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 236;
        this.condTerm();
        this.state = 239;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CParser.OR) {
            this.state = 237;
            this.match(CParser.OR);
            this.state = 238;
            this.condTerm();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CondTermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_condTerm;
    return this;
}

CondTermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CondTermContext.prototype.constructor = CondTermContext;


 
CondTermContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function CTermContext(parser, ctx) {
	CondTermContext.call(this, parser);
    CondTermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CTermContext.prototype = Object.create(CondTermContext.prototype);
CTermContext.prototype.constructor = CTermContext;

CParser.CTermContext = CTermContext;

CTermContext.prototype.condFact = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CondFactContext);
    } else {
        return this.getTypedRuleContext(CondFactContext,i);
    }
};

CTermContext.prototype.AND = function() {
    return this.getToken(CParser.AND, 0);
};
CTermContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitCTerm(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CParser.CondTermContext = CondTermContext;

CParser.prototype.condTerm = function() {

    var localctx = new CondTermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, CParser.RULE_condTerm);
    var _la = 0; // Token type
    try {
        localctx = new CTermContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 241;
        this.condFact();
        this.state = 244;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CParser.AND) {
            this.state = 242;
            this.match(CParser.AND);
            this.state = 243;
            this.condFact();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CondFactContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_condFact;
    return this;
}

CondFactContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CondFactContext.prototype.constructor = CondFactContext;


 
CondFactContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function CFactContext(parser, ctx) {
	CondFactContext.call(this, parser);
    CondFactContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CFactContext.prototype = Object.create(CondFactContext.prototype);
CFactContext.prototype.constructor = CFactContext;

CParser.CFactContext = CFactContext;

CFactContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

CFactContext.prototype.relop = function() {
    return this.getTypedRuleContext(RelopContext,0);
};
CFactContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitCFact(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CParser.CondFactContext = CondFactContext;

CParser.prototype.condFact = function() {

    var localctx = new CondFactContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, CParser.RULE_condFact);
    try {
        localctx = new CFactContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 246;
        this.expr();
        this.state = 247;
        this.relop();
        this.state = 248;
        this.expr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ExpresionContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpresionContext.prototype = Object.create(ExprContext.prototype);
ExpresionContext.prototype.constructor = ExpresionContext;

CParser.ExpresionContext = ExpresionContext;

ExpresionContext.prototype.term = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TermContext);
    } else {
        return this.getTypedRuleContext(TermContext,i);
    }
};

ExpresionContext.prototype.RESTA = function() {
    return this.getToken(CParser.RESTA, 0);
};

ExpresionContext.prototype.addop = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AddopContext);
    } else {
        return this.getTypedRuleContext(AddopContext,i);
    }
};
ExpresionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitExpresion(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CParser.ExprContext = ExprContext;

CParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, CParser.RULE_expr);
    var _la = 0; // Token type
    try {
        localctx = new ExpresionContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 251;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===CParser.RESTA) {
            this.state = 250;
            this.match(CParser.RESTA);
        }

        this.state = 253;
        this.term();
        this.state = 259;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CParser.SUMA || _la===CParser.RESTA) {
            this.state = 254;
            this.addop();
            this.state = 255;
            this.term();
            this.state = 261;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;


 
TermContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function TerminoContext(parser, ctx) {
	TermContext.call(this, parser);
    TermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TerminoContext.prototype = Object.create(TermContext.prototype);
TerminoContext.prototype.constructor = TerminoContext;

CParser.TerminoContext = TerminoContext;

TerminoContext.prototype.factor = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FactorContext);
    } else {
        return this.getTypedRuleContext(FactorContext,i);
    }
};

TerminoContext.prototype.mulop = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MulopContext);
    } else {
        return this.getTypedRuleContext(MulopContext,i);
    }
};
TerminoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitTermino(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CParser.TermContext = TermContext;

CParser.prototype.term = function() {

    var localctx = new TermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, CParser.RULE_term);
    var _la = 0; // Token type
    try {
        localctx = new TerminoContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 262;
        this.factor();
        this.state = 268;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (CParser.MUL - 27)) | (1 << (CParser.DIV - 27)) | (1 << (CParser.MODULO - 27)))) !== 0)) {
            this.state = 263;
            this.mulop();
            this.state = 264;
            this.factor();
            this.state = 270;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FactorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_factor;
    return this;
}

FactorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FactorContext.prototype.constructor = FactorContext;


 
FactorContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function FactorBoolContext(parser, ctx) {
	FactorContext.call(this, parser);
    FactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FactorBoolContext.prototype = Object.create(FactorContext.prototype);
FactorBoolContext.prototype.constructor = FactorBoolContext;

CParser.FactorBoolContext = FactorBoolContext;

FactorBoolContext.prototype.booleano = function() {
    return this.getTypedRuleContext(BooleanoContext,0);
};
FactorBoolContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitFactorBool(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FactorExpresionContext(parser, ctx) {
	FactorContext.call(this, parser);
    FactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FactorExpresionContext.prototype = Object.create(FactorContext.prototype);
FactorExpresionContext.prototype.constructor = FactorExpresionContext;

CParser.FactorExpresionContext = FactorExpresionContext;

FactorExpresionContext.prototype.PIZQ = function() {
    return this.getToken(CParser.PIZQ, 0);
};

FactorExpresionContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

FactorExpresionContext.prototype.PDER = function() {
    return this.getToken(CParser.PDER, 0);
};
FactorExpresionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitFactorExpresion(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FactorNumeroContext(parser, ctx) {
	FactorContext.call(this, parser);
    FactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FactorNumeroContext.prototype = Object.create(FactorContext.prototype);
FactorNumeroContext.prototype.constructor = FactorNumeroContext;

CParser.FactorNumeroContext = FactorNumeroContext;

FactorNumeroContext.prototype.NUMBER = function() {
    return this.getToken(CParser.NUMBER, 0);
};
FactorNumeroContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitFactorNumero(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AsignadorContext(parser, ctx) {
	FactorContext.call(this, parser);
    FactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AsignadorContext.prototype = Object.create(FactorContext.prototype);
AsignadorContext.prototype.constructor = AsignadorContext;

CParser.AsignadorContext = AsignadorContext;

AsignadorContext.prototype.designator = function() {
    return this.getTypedRuleContext(DesignatorContext,0);
};

AsignadorContext.prototype.PIZQ = function() {
    return this.getToken(CParser.PIZQ, 0);
};

AsignadorContext.prototype.PDER = function() {
    return this.getToken(CParser.PDER, 0);
};

AsignadorContext.prototype.actPars = function() {
    return this.getTypedRuleContext(ActParsContext,0);
};
AsignadorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitAsignador(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FactorCaracterContext(parser, ctx) {
	FactorContext.call(this, parser);
    FactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FactorCaracterContext.prototype = Object.create(FactorContext.prototype);
FactorCaracterContext.prototype.constructor = FactorCaracterContext;

CParser.FactorCaracterContext = FactorCaracterContext;

FactorCaracterContext.prototype.CHAR = function() {
    return this.getToken(CParser.CHAR, 0);
};
FactorCaracterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitFactorCaracter(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FactorNuevoContext(parser, ctx) {
	FactorContext.call(this, parser);
    FactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FactorNuevoContext.prototype = Object.create(FactorContext.prototype);
FactorNuevoContext.prototype.constructor = FactorNuevoContext;

CParser.FactorNuevoContext = FactorNuevoContext;

FactorNuevoContext.prototype.NEW = function() {
    return this.getToken(CParser.NEW, 0);
};

FactorNuevoContext.prototype.IDENTIFIER = function() {
    return this.getToken(CParser.IDENTIFIER, 0);
};
FactorNuevoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitFactorNuevo(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CParser.FactorContext = FactorContext;

CParser.prototype.factor = function() {

    var localctx = new FactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, CParser.RULE_factor);
    var _la = 0; // Token type
    try {
        this.state = 288;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CParser.IDENTIFIER:
            localctx = new AsignadorContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 271;
            this.designator();
            this.state = 277;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===CParser.PIZQ) {
                this.state = 272;
                this.match(CParser.PIZQ);
                this.state = 274;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===CParser.NEW || _la===CParser.PIZQ || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (CParser.RESTA - 37)) | (1 << (CParser.TRUE - 37)) | (1 << (CParser.FALSE - 37)) | (1 << (CParser.IDENTIFIER - 37)) | (1 << (CParser.NUMBER - 37)) | (1 << (CParser.CHAR - 37)))) !== 0)) {
                    this.state = 273;
                    this.actPars();
                }

                this.state = 276;
                this.match(CParser.PDER);
            }

            break;
        case CParser.NUMBER:
            localctx = new FactorNumeroContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 279;
            this.match(CParser.NUMBER);
            break;
        case CParser.CHAR:
            localctx = new FactorCaracterContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 280;
            this.match(CParser.CHAR);
            break;
        case CParser.TRUE:
        case CParser.FALSE:
            localctx = new FactorBoolContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 281;
            this.booleano();
            break;
        case CParser.NEW:
            localctx = new FactorNuevoContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 282;
            this.match(CParser.NEW);
            this.state = 283;
            this.match(CParser.IDENTIFIER);
            break;
        case CParser.PIZQ:
            localctx = new FactorExpresionContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 284;
            this.match(CParser.PIZQ);
            this.state = 285;
            this.expr();
            this.state = 286;
            this.match(CParser.PDER);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BooleanoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_booleano;
    return this;
}

BooleanoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BooleanoContext.prototype.constructor = BooleanoContext;


 
BooleanoContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function VerdadContext(parser, ctx) {
	BooleanoContext.call(this, parser);
    BooleanoContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VerdadContext.prototype = Object.create(BooleanoContext.prototype);
VerdadContext.prototype.constructor = VerdadContext;

CParser.VerdadContext = VerdadContext;

VerdadContext.prototype.TRUE = function() {
    return this.getToken(CParser.TRUE, 0);
};
VerdadContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitVerdad(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FalsoContext(parser, ctx) {
	BooleanoContext.call(this, parser);
    BooleanoContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FalsoContext.prototype = Object.create(BooleanoContext.prototype);
FalsoContext.prototype.constructor = FalsoContext;

CParser.FalsoContext = FalsoContext;

FalsoContext.prototype.FALSE = function() {
    return this.getToken(CParser.FALSE, 0);
};
FalsoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitFalso(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CParser.BooleanoContext = BooleanoContext;

CParser.prototype.booleano = function() {

    var localctx = new BooleanoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, CParser.RULE_booleano);
    try {
        this.state = 292;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CParser.TRUE:
            localctx = new VerdadContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 290;
            this.match(CParser.TRUE);
            break;
        case CParser.FALSE:
            localctx = new FalsoContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 291;
            this.match(CParser.FALSE);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DesignatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_designator;
    return this;
}

DesignatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DesignatorContext.prototype.constructor = DesignatorContext;


 
DesignatorContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function DesignadorContext(parser, ctx) {
	DesignatorContext.call(this, parser);
    DesignatorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DesignadorContext.prototype = Object.create(DesignatorContext.prototype);
DesignadorContext.prototype.constructor = DesignadorContext;

CParser.DesignadorContext = DesignadorContext;

DesignadorContext.prototype.IDENTIFIER = function() {
    return this.getToken(CParser.IDENTIFIER, 0);
};

DesignadorContext.prototype.asigClass = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AsigClassContext);
    } else {
        return this.getTypedRuleContext(AsigClassContext,i);
    }
};
DesignadorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitDesignador(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CParser.DesignatorContext = DesignatorContext;

CParser.prototype.designator = function() {

    var localctx = new DesignatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, CParser.RULE_designator);
    var _la = 0; // Token type
    try {
        localctx = new DesignadorContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 294;
        this.match(CParser.IDENTIFIER);
        this.state = 298;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CParser.PCIZQ || _la===CParser.PUNTO) {
            this.state = 295;
            this.asigClass();
            this.state = 300;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AsigClassContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_asigClass;
    return this;
}

AsigClassContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AsigClassContext.prototype.constructor = AsigClassContext;


 
AsigClassContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function AsignarClaseContext(parser, ctx) {
	AsigClassContext.call(this, parser);
    AsigClassContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AsignarClaseContext.prototype = Object.create(AsigClassContext.prototype);
AsignarClaseContext.prototype.constructor = AsignarClaseContext;

CParser.AsignarClaseContext = AsignarClaseContext;

AsignarClaseContext.prototype.PUNTO = function() {
    return this.getToken(CParser.PUNTO, 0);
};

AsignarClaseContext.prototype.IDENTIFIER = function() {
    return this.getToken(CParser.IDENTIFIER, 0);
};
AsignarClaseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitAsignarClase(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AsignarListaContext(parser, ctx) {
	AsigClassContext.call(this, parser);
    AsigClassContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AsignarListaContext.prototype = Object.create(AsigClassContext.prototype);
AsignarListaContext.prototype.constructor = AsignarListaContext;

CParser.AsignarListaContext = AsignarListaContext;

AsignarListaContext.prototype.PCIZQ = function() {
    return this.getToken(CParser.PCIZQ, 0);
};

AsignarListaContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

AsignarListaContext.prototype.PCDER = function() {
    return this.getToken(CParser.PCDER, 0);
};
AsignarListaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitAsignarLista(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CParser.AsigClassContext = AsigClassContext;

CParser.prototype.asigClass = function() {

    var localctx = new AsigClassContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, CParser.RULE_asigClass);
    try {
        this.state = 307;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CParser.PUNTO:
            localctx = new AsignarClaseContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 301;
            this.match(CParser.PUNTO);
            this.state = 302;
            this.match(CParser.IDENTIFIER);
            break;
        case CParser.PCIZQ:
            localctx = new AsignarListaContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 303;
            this.match(CParser.PCIZQ);
            this.state = 304;
            this.expr();
            this.state = 305;
            this.match(CParser.PCDER);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RelopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_relop;
    return this;
}

RelopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelopContext.prototype.constructor = RelopContext;


 
RelopContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function MayorQueContext(parser, ctx) {
	RelopContext.call(this, parser);
    RelopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MayorQueContext.prototype = Object.create(RelopContext.prototype);
MayorQueContext.prototype.constructor = MayorQueContext;

CParser.MayorQueContext = MayorQueContext;

MayorQueContext.prototype.MAYOR = function() {
    return this.getToken(CParser.MAYOR, 0);
};
MayorQueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitMayorQue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MenorQueContext(parser, ctx) {
	RelopContext.call(this, parser);
    RelopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MenorQueContext.prototype = Object.create(RelopContext.prototype);
MenorQueContext.prototype.constructor = MenorQueContext;

CParser.MenorQueContext = MenorQueContext;

MenorQueContext.prototype.MENOR = function() {
    return this.getToken(CParser.MENOR, 0);
};
MenorQueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitMenorQue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DifereteDeContext(parser, ctx) {
	RelopContext.call(this, parser);
    RelopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DifereteDeContext.prototype = Object.create(RelopContext.prototype);
DifereteDeContext.prototype.constructor = DifereteDeContext;

CParser.DifereteDeContext = DifereteDeContext;

DifereteDeContext.prototype.DIFERENTE = function() {
    return this.getToken(CParser.DIFERENTE, 0);
};
DifereteDeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitDifereteDe(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MenorIgualQueContext(parser, ctx) {
	RelopContext.call(this, parser);
    RelopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MenorIgualQueContext.prototype = Object.create(RelopContext.prototype);
MenorIgualQueContext.prototype.constructor = MenorIgualQueContext;

CParser.MenorIgualQueContext = MenorIgualQueContext;

MenorIgualQueContext.prototype.MENORIGUAL = function() {
    return this.getToken(CParser.MENORIGUAL, 0);
};
MenorIgualQueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitMenorIgualQue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MayorIgualQueContext(parser, ctx) {
	RelopContext.call(this, parser);
    RelopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MayorIgualQueContext.prototype = Object.create(RelopContext.prototype);
MayorIgualQueContext.prototype.constructor = MayorIgualQueContext;

CParser.MayorIgualQueContext = MayorIgualQueContext;

MayorIgualQueContext.prototype.MAYORIGUAL = function() {
    return this.getToken(CParser.MAYORIGUAL, 0);
};
MayorIgualQueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitMayorIgualQue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IgualIgualContext(parser, ctx) {
	RelopContext.call(this, parser);
    RelopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IgualIgualContext.prototype = Object.create(RelopContext.prototype);
IgualIgualContext.prototype.constructor = IgualIgualContext;

CParser.IgualIgualContext = IgualIgualContext;

IgualIgualContext.prototype.COMPARACION = function() {
    return this.getToken(CParser.COMPARACION, 0);
};
IgualIgualContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitIgualIgual(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CParser.RelopContext = RelopContext;

CParser.prototype.relop = function() {

    var localctx = new RelopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, CParser.RULE_relop);
    try {
        this.state = 315;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CParser.COMPARACION:
            localctx = new IgualIgualContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 309;
            this.match(CParser.COMPARACION);
            break;
        case CParser.DIFERENTE:
            localctx = new DifereteDeContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 310;
            this.match(CParser.DIFERENTE);
            break;
        case CParser.MAYOR:
            localctx = new MayorQueContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 311;
            this.match(CParser.MAYOR);
            break;
        case CParser.MAYORIGUAL:
            localctx = new MayorIgualQueContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 312;
            this.match(CParser.MAYORIGUAL);
            break;
        case CParser.MENOR:
            localctx = new MenorQueContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 313;
            this.match(CParser.MENOR);
            break;
        case CParser.MENORIGUAL:
            localctx = new MenorIgualQueContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 314;
            this.match(CParser.MENORIGUAL);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AddopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_addop;
    return this;
}

AddopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddopContext.prototype.constructor = AddopContext;


 
AddopContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function SumarContext(parser, ctx) {
	AddopContext.call(this, parser);
    AddopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SumarContext.prototype = Object.create(AddopContext.prototype);
SumarContext.prototype.constructor = SumarContext;

CParser.SumarContext = SumarContext;

SumarContext.prototype.SUMA = function() {
    return this.getToken(CParser.SUMA, 0);
};
SumarContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitSumar(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RestarContext(parser, ctx) {
	AddopContext.call(this, parser);
    AddopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RestarContext.prototype = Object.create(AddopContext.prototype);
RestarContext.prototype.constructor = RestarContext;

CParser.RestarContext = RestarContext;

RestarContext.prototype.RESTA = function() {
    return this.getToken(CParser.RESTA, 0);
};
RestarContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitRestar(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CParser.AddopContext = AddopContext;

CParser.prototype.addop = function() {

    var localctx = new AddopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, CParser.RULE_addop);
    try {
        this.state = 319;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CParser.SUMA:
            localctx = new SumarContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 317;
            this.match(CParser.SUMA);
            break;
        case CParser.RESTA:
            localctx = new RestarContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 318;
            this.match(CParser.RESTA);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MulopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CParser.RULE_mulop;
    return this;
}

MulopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MulopContext.prototype.constructor = MulopContext;


 
MulopContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ModularContext(parser, ctx) {
	MulopContext.call(this, parser);
    MulopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ModularContext.prototype = Object.create(MulopContext.prototype);
ModularContext.prototype.constructor = ModularContext;

CParser.ModularContext = ModularContext;

ModularContext.prototype.MODULO = function() {
    return this.getToken(CParser.MODULO, 0);
};
ModularContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitModular(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MultiplicarContext(parser, ctx) {
	MulopContext.call(this, parser);
    MulopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplicarContext.prototype = Object.create(MulopContext.prototype);
MultiplicarContext.prototype.constructor = MultiplicarContext;

CParser.MultiplicarContext = MultiplicarContext;

MultiplicarContext.prototype.MUL = function() {
    return this.getToken(CParser.MUL, 0);
};
MultiplicarContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitMultiplicar(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DividirContext(parser, ctx) {
	MulopContext.call(this, parser);
    MulopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DividirContext.prototype = Object.create(MulopContext.prototype);
DividirContext.prototype.constructor = DividirContext;

CParser.DividirContext = DividirContext;

DividirContext.prototype.DIV = function() {
    return this.getToken(CParser.DIV, 0);
};
DividirContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CParserVisitor ) {
        return visitor.visitDividir(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CParser.MulopContext = MulopContext;

CParser.prototype.mulop = function() {

    var localctx = new MulopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, CParser.RULE_mulop);
    try {
        this.state = 324;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case CParser.MUL:
            localctx = new MultiplicarContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 321;
            this.match(CParser.MUL);
            break;
        case CParser.DIV:
            localctx = new DividirContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 322;
            this.match(CParser.DIV);
            break;
        case CParser.MODULO:
            localctx = new ModularContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 323;
            this.match(CParser.MODULO);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.CParser = CParser;
