/**
 * The Processor class is responsible for the elaboration of the content of
 * js files. The script will be tokenized, and every string literal matching
 * a specific prefix will be transformed into a Function call.
 */

'use strict';

var ESLexer = require('./EcmaScriptLexer'),
	antlr4 = require('./antlr4/index'),
	_ = require('lodash');

var Processor = function(options) {
	var me = this;
	
	if (!options) {
		throw new Error('options parameter is mandatory');
	}
	
	me.prefix = options.prefix;
	me.locFn = options.locFn;
	me._doubleQuotedPrefix = '\"' + options.prefix;
	me._singleQuotedPrefix = '\'' + options.prefix;
};

Processor.prototype.process = function(script) {
	var res = '', me = this,
		chars = new antlr4.InputStream(script),
		lexer = new ESLexer.EcmaScriptLexer(chars),
		tokens = new antlr4.CommonTokenStream(lexer);
	
	me.exportResources = {};
	
	while(tokens.LT().type >= 0) {
		res += me.processTokenText(tokens.LT());
		tokens.consume();
	}

	return res;
};

// jshint evil:true
Processor.prototype.escapeResource = function(res) {
	this.exportResources[eval(res)] = true;
	return this.locFn + '(' + res + ')';
};

Processor.prototype.processTokenText = function(token) {
	var me = this,
		prefixLen = me._doubleQuotedPrefix.length,
		tokenText = token.text,
		prefix = tokenText.substr(0, prefixLen);

	if (prefix === me._doubleQuotedPrefix) {
		return me.escapeResource('\"' + tokenText.substr(prefixLen));
	} else if (prefix === me._singleQuotedPrefix) {
		return me.escapeResource('\'' + tokenText.substr(prefixLen));
	}

	return tokenText;
};

Processor.prototype.getResources = function() {
	return _.keys(this.exportResources).sort();
}

module.exports = Processor;
