/**
 * The Processor class is responsible for the elaboration of the content of
 * js files. The script will be tokenied, and every string literal matching
 * a specific prefix will be transformed into a Function call.
 */

'use strict'

var ESLexer = require('./EcmaScriptLexer'),
	antlr4 = require('./antlr4/index');

var Processor = function(options) {
	var me = this;
	
	if (!options) throw new Error('options parameter is mandatory');
	
	me.prefix = options.prefix;
	me.locFn = options.locFn;
	me._doubleQuotedPrefix = '\"' + options.prefix;
	me._singleQuotedPrefix = '\'' + options.prefix;
}

Processor.prototype.process = function(script) {
	var res = [], me = this,
		chars = new antlr4.InputStream(script),
		lexer = new ESLexer.EcmaScriptLexer(chars),
		tokens = new antlr4.CommonTokenStream(lexer);
	
	me.exportResources = {};
	
	while(tokens.LT().type >= 0) {
		res.push(me.processTokenText(tokens.LT()));
		tokens.consume();
	}

	return res.join('');
};

Processor.prototype.processTokenText = function(token) {
	var me = this,
		tokenText = token.text, prefix;

	if (token.type !== ESLexer.EcmaScriptLexer.StringLiteral)
		return tokenText;

	prefix = tokenText.substr(0, me._doubleQuotedPrefix.length);
	
	if (prefix === me._doubleQuotedPrefix)
	{
		me.exportResources['\"' + tokenText.substr(me._doubleQuotedPrefix.length)] = true;
		tokenText = me.locFn + '(\"' + tokenText.substr(me._doubleQuotedPrefix.length) + ')';
	}
	else if (prefix === me._singleQuotedPrefix)
	{
		me.exportResources['\'' + tokenText.substr(me._doubleQuotedPrefix.length)] = true;
		tokenText = me.locFn + '(\'' + tokenText.substr(me._doubleQuotedPrefix.length) + ')';
	}

	return tokenText;
}

module.exports = Processor;
