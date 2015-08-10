var ESLexer = require('./EcmaScriptLexer'),
	antlr4 = require('./antlr4/index');


var program =
	'var rx = /test[[\]]/;\n' +
	'var rx = /test[[\]]/i;\r\n' +
	'var a = \'res:Test\', b = \"res:Tasty\\\"\", c = \"Do not escape\";\r\n' +
	'var a = 10;\r\nfor(a = 0; a < 100; a++) {\r\n\ti = 10 / 10;\r\n}\r\n'
	;

function processTokenText(token, options) {
	var tokenText = token.text, prefix;

	if (token.type !== ESLexer.EcmaScriptLexer.StringLiteral)
			return tokenText;

	prefix = tokenText.substr(0, options._doubleQuotedPrefix.length);
	
	if (prefix === options._doubleQuotedPrefix)
	{
			//AddLocalizableResource(tokenText, '\"');
			tokenText = options.locFn + '(\"' + tokenText.substr(options._doubleQuotedPrefix.length) + ')';
	}
	else if (prefix === options._singleQuotedPrefix)
	{
			//AddLocalizableResource(tokenText, "'");
			tokenText = options.locFn + '(\'' + tokenText.substr(options._doubleQuotedPrefix.length) + ')';
	}

	return tokenText;
}

function process(script, options) {
	var res=[],
		chars = new antlr4.InputStream(script),
		lexer = new ESLexer.EcmaScriptLexer(chars),
		tokens = new antlr4.CommonTokenStream(lexer),
		token;
	
	tokens.consume();
	while(tokens.LT().type >= 0) {
		res.push(processTokenText(tokens.LT(), options));
		tokens.consume();
	}

	return res.join('');
}

var options = {
	prefix: 'res:',
	locFn: 'Gianos.T'
};

options._doubleQuotedPrefix = '\"' + options.prefix;
options._singleQuotedPrefix = '\'' + options.prefix;

var result = process(program, options);

console.log(result);
