lexer grammar EcmaScriptLexer;

tokens {
	// Reserved words
	NULL, TRUE, FALSE,

	// Keywords
	BREAK, CASE, CATCH, CONTINUE, DEFAULT, DELETE, DO, ELSE, FINALLY, FOR, FUNCTION, IF, IN, INSTANCEOF, NEW,
	RETURN, SWITCH, THIS, THROW, TRY, TYPEOF, VAR, VOID, WHILE, WITH,

	// Future reserved words
	ABSTRACT, BOOLEAN, BYTE, CHAR, CLASS, CONST, DEBUGGER, DOUBLE, ENUM, EXPORT, EXTENDS, FINAL, FLOAT, GOTO,
	IMPLEMENTS, IMPORT, INT, INTERFACE, LONG, NATIVE, PACKAGE, PRIVATE, PROTECTED, PUBLIC, SHORT, STATIC,
	SUPER, SYNCHRONIZED, THROWS, TRANSIENT, VOLATILE,

	// Punctuators
	LBRACE, RBRACE, LPAREN, RPAREN, LBRACK, RBRACK, DOT, SEMIC, COMMA, LT, GT, LTE, GTE, EQ, NEQ, SAME, NSAME,
	ADD, SUB, MUL, MOD, INC, DEC, SHL, SHR, SHU, AND, OR, XOR, NOT, INV, LAND, LOR, QUE, COLON, ASSIGN, ADDASS,
	SUBASS, MULASS, MODASS, SHLASS, SHRASS, SHUASS, ANDASS, ORASS, XORASS, DIV, DIVASS, 
	// Imaginary
	ARGS, ARRAY, BLOCK, BYFIELD, BYINDEX, CALL, CEXPR, EXPR, FORITER, FORSTEP, ITEM, LABELLED, NAMEDVALUE,
	NEG, OBJECT, PAREXPR, PDEC, PINC, POS
}


// Reserved words
NULL		
	: 'null'
	;

TRUE		
	: 'true'
	;

FALSE		
	: 'false'
	;


// Keywords
BREAK		
	: 'break'
	;

CASE		
	: 'case'
	;

CATCH 		
	: 'catch'
	;

CONTINUE 	
	: 'continue'
	;

DEFAULT		
	: 'default'
	;

DELETE		
	: 'delete'
	;

DO 		
	: 'do'
	;

ELSE 		
	: 'else'
	;

FINALLY 	
	: 'finally'
	;

FOR 		
	: 'for'
	;

FUNCTION 	
	: 'function'
	;

IF 		
	: 'if'
	;

IN 		
	: 'in'
	;

INSTANCEOF 	
	: 'instanceof'
	;

NEW 		
	: 'new'
	;

RETURN 		
	: 'return'
	;

SWITCH 		
	: 'switch'
	;

THIS 		
	: 'this'
	;

THROW 		
	: 'throw'
	;

TRY 		
	: 'try'
	;

TYPEOF 		
	: 'typeof'
	;

VAR 		
	: 'var'
	;

VOID 		
	: 'void'
	;

WHILE 		
	: 'while'
	;

WITH 		
	: 'with'
	;


// Future reserved words
ABSTRACT	
	: 'abstract'
	;

BOOLEAN 	
	: 'boolean'
	;

BYTE 		
	: 'byte'
	;

CHAR 		
	: 'char'
	;

CLASS 		
	: 'class'
	;

CONST 		
	: 'const'
	;

DEBUGGER 	
	: 'debugger'
	;

DOUBLE		
	: 'double'
	;

ENUM 		
	: 'enum'
	;

EXPORT 		
	: 'export'
	;

EXTENDS		
	: 'extends'
	;

FINAL 		
	: 'final'
	;

FLOAT 		
	: 'float'
	;

GOTO 		
	: 'goto'
	;

IMPLEMENTS 	
	: 'implements'
	;

IMPORT		
	: 'import'
	;

INT 		
	: 'int'
	;

INTERFACE 	
	: 'interface'
	;

LONG 		
	: 'long'
	;

NATIVE 		
	: 'native'
	;

PACKAGE 	
	: 'package'
	;

PRIVATE 	
	: 'private'
	;

PROTECTED 	
	: 'protected'
	;

PUBLIC		
	: 'public'
	;

SHORT 		
	: 'short'
	;

STATIC 		
	: 'static'
	;

SUPER 		
	: 'super'
	;

SYNCHRONIZED 	
	: 'synchronized'
	;

THROWS 		
	: 'throws'
	;

TRANSIENT 	
	: 'transient'
	;

VOLATILE 	
	: 'volatile'
	;


// Punctuators
LBRACE		
	: '{'
	;

RBRACE		
	: '}'
	;

LPAREN		
	: '('
	;

RPAREN		
	: ')'
	;

LBRACK		
	: '['
	;

RBRACK		
	: ']'
	;

DOT		
	: '.'
	;

SEMIC		
	: ';'
	;

COMMA		
	: ','
	;

LT		
	: '<'
	;

GT		
	: '>'
	;

LTE		
	: '<='
	;

GTE		
	: '>='
	;

EQ		
	: '=='
	;

NEQ		
	: '!='
	;

SAME		
	: '==='
	;

NSAME		
	: '!=='
	;

ADD		
	: '+'
	;

SUB		
	: '-'
	;

MUL		
	: '*'
	;

MOD		
	: '%'
	;

INC		
	: '++'
	;

DEC		
	: '--'
	;

SHL		
	: '<<'
	;

SHR		
	: '>>'
	;

SHU		
	: '>>>'
	;

AND		
	: '&'
	;

OR		
	: '|'
	;

XOR		
	: '^'
	;

NOT		
	: '!'
	;

INV		
	: '~'
	;

LAND		
	: '&&'
	;

LOR		
	: '||'
	;

QUE		
	: '?'
	;

COLON		
	: ':'
	;

ASSIGN		
	: '='
	;

ADDASS		
	: '+='
	;

SUBASS		
	: '-='
	;

MULASS		
	: '*='
	;

MODASS		
	: '%='
	;

SHLASS		
	: '<<='
	;

SHRASS		
	: '>>='
	;

SHUASS		
	: '>>>='
	;

ANDASS		
	: '&='
	;

ORASS		
	: '|='
	;

XORASS		
	: '^='
	;

DIV		
	: '/'
	;

DIVASS		
	: '/='
	;



//
// $<	A.1 Lexical Grammar (7)
//

fragment BSLASH
	: '\\'
	;
	
fragment DQUOTE
	: '"'
	;
	
fragment SQUOTE
	: '\''
	;

// $<	Whitespace (7.2)

fragment TAB
	: '\u0009'
	;

fragment VT // Vertical TAB
	: '\u000b'
	;

fragment FF // Form Feed
	: '\u000c'
	;

fragment SP // Space
	: '\u0020'
	;

fragment NBSP // Non-Breaking Space
	: '\u00a0'
	;

fragment USP // Unicode Space Separator (rest of Unicode category Zs)
	: '\u1680'  // OGHAM SPACE MARK
	| '\u180E'  // MONGOLIAN VOWEL SEPARATOR
	| '\u2000'  // EN QUAD
	| '\u2001'  // EM QUAD
	| '\u2002'  // EN SPACE
	| '\u2003'  // EM SPACE
	| '\u2004'  // THREE-PER-EM SPACE
	| '\u2005'  // FOUR-PER-EM SPACE
	| '\u2006'  // SIX-PER-EM SPACE
	| '\u2007'  // FIGURE SPACE
	| '\u2008'  // PUNCTUATION SPACE
	| '\u2009'  // THIN SPACE
	| '\u200A'  // HAIR SPACE
	| '\u202F'  // NARROW NO-BREAK SPACE
	| '\u205F'  // MEDIUM MATHEMATICAL SPACE
	| '\u3000'  // IDEOGRAPHIC SPACE
	;

WhiteSpace
	: ( TAB | VT | FF | SP | NBSP | USP )+   // { $channel = Hidden; }
	;

// $>

// $<	Line terminators (7.3)
		
EOL
	: ( ( '\r' '\n'? ) | '\n' | '\u2028' | '\u2029' ) // { $channel = Hidden; }
	;
// $>

// $<	Comments (7.4)

MultiLineComment
	: '/*' .*? '*/' // { $channel = Hidden; }
	;

SingleLineComment
	: '//' ( ~( '\r' | '\n' | '\u2028' | '\u2029' ) )* // { $channel = Hidden; }
	;

// $>

	
// $<	Identifiers (7.6)

fragment IdentifierStartASCII
	: 'a'..'z' | 'A'..'Z'
	| '$'
	| '_'
	| BSLASH 'u' HexDigit HexDigit HexDigit HexDigit // UnicodeEscapeSequence
	;

/*
The first two alternatives define how ANTLR can match ASCII characters which can be considered as part of an identifier.
The last alternative matches other characters in the unicode range that can be sonsidered as part of an identifier.
*/
fragment IdentifierPart
	: DecimalDigit
	| IdentifierStartASCII
//	| { IsIdentifierPartUnicode(input.LA(1)) }? { MatchAny(); }
	;

fragment IdentifierNameASCIIStart
	: IdentifierStartASCII IdentifierPart*
	;

/*
The second alternative acts as an action driven fallback to evaluate other characters in the unicode range than the ones in the ASCII subset.
Due to the first alternative this grammar defines enough so that ANTLR can generate a lexer that correctly predicts identifiers with characters in the ASCII range.
In that way keywords, other reserved words and ASCII identifiers are recognized with standard ANTLR driven logic. When the first character for an identifier fails to 
match this ASCII definition, the lexer calls ConsumeIdentifierUnicodeStart because of the action in the alternative. This method checks whether the character matches 
as first character in ranges other than ASCII and consumes further characters belonging to the identifier with help of mIdentifierPart generated out of the 
IdentifierPart rule above.
*/
Identifier
	: IdentifierNameASCIIStart
	// | { ConsumeIdentifierUnicodeStart(); }
	;

// $>


// $<	Numeric literals (7.8.3)

/*
Note: octal literals are described in the B Compatibility section.
These are removed from the standards but are here for backwards compatibility with earlier ECMAScript definitions.
*/

fragment DecimalDigit
	: '0'..'9'
	;

fragment HexDigit
	: DecimalDigit | 'a'..'f' | 'A'..'F'
	;

fragment OctalDigit
	: '0'..'7'
	;

fragment ExponentPart
	: ( 'e' | 'E' ) ( '+' | '-' )? DecimalDigit+
	;

fragment DecimalIntegerLiteral
	: '0'
	| '1'..'9' DecimalDigit*
	;

DecimalLiteral
	: DecimalIntegerLiteral '.' DecimalDigit* ExponentPart?
	| '.' DecimalDigit+ ExponentPart?
	| DecimalIntegerLiteral ExponentPart?
	;

OctalIntegerLiteral
	: '0' OctalDigit+
	;

HexIntegerLiteral
	: ( '0x' | '0X' ) HexDigit+
	;

// $>


// $<	String literals (7.8.4)

/*
Note: octal escape sequences are described in the B Compatibility section.
These are removed from the standards but are here for backwards compatibility with earlier ECMAScript definitions.
*/
	
fragment CharacterEscapeSequence
	: ~( [0..9xu\r\n\u2028\u2029] ) // Concatenation of SingleEscapeCharacter and NonEscapeCharacter
	;

fragment ZeroToThree
	: '0'..'3'
	;
	
fragment OctalEscapeSequence
	: OctalDigit
	| ZeroToThree OctalDigit
	| '4'..'7' OctalDigit
	| ZeroToThree OctalDigit OctalDigit
	;
	
fragment HexEscapeSequence
	: 'x' HexDigit HexDigit
	;
	
fragment UnicodeEscapeSequence
	: 'u' HexDigit HexDigit HexDigit HexDigit
	;

fragment EscapeSequence
	:
	BSLASH 
	(
		CharacterEscapeSequence 
		| OctalEscapeSequence
		| HexEscapeSequence
		| UnicodeEscapeSequence
	)
	;

SingleQuotedStringLiteral
	: '\'' ( ~( [\'\\\r\n\u2028\u2029] ) | EscapeSequence )* '\''
	;
	
DoubleQuotedStringLiteral
	: '"' ( ~( ["\\\r\n\u2028\u2029] ) | EscapeSequence )* '"'
	;

// $>


// $<	Regular expression literals (7.8.5)

fragment BackslashSequence
	: BSLASH ~( [\r\n\u2028\u2029] )
	;

fragment RegularExpressionCharSet
	: LBRACK
	  ( ( ~ ( [\r\n\u2028\u2029\\\]] ) ) | BackslashSequence )*
	  RBRACK
	;

fragment RegularExpressionFirstChar
	: ~ ( [\r\n\u2028\u2029*\\/[] )
	| BackslashSequence
	| RegularExpressionCharSet
	;

fragment RegularExpressionChar
	: ~ ( [\r\n\u2028\u2029\\/[])
	| BackslashSequence
	| RegularExpressionCharSet
	;
	
RegularExpressionLiteral
	: DIV RegularExpressionFirstChar RegularExpressionChar* DIV IdentifierPart*
	;

// $>
