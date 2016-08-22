// jshint evil:true
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
  me._prefixLength = me._doubleQuotedPrefix.length;
};

Processor.prototype = {
  process: function(script) {
    var res = '',
      chars = new antlr4.InputStream(script),
      lexer = new ESLexer.EcmaScriptLexer(chars),
      tokens = new antlr4.CommonTokenStream(lexer),
      i, lastI;

    this.exportResources = {};
    
    while(tokens.LT(1).type >= 0) {
      tokens.consume();
    }

    for(i = 0, lastI = tokens.tokens.length - 1; i < lastI; i++) {
      res += this.processTokenText(tokens.tokens[i]);
    }

    return res;
  },
  processTokenText: function(token) {
    var prefix = token.text.substr(0, this._prefixLength);
    
    if (prefix === this._doubleQuotedPrefix) {
      return this.escapeResource('\"' + token.text.substr(this._prefixLength));
    } else if (prefix === this._singleQuotedPrefix) {
      return this.escapeResource('\'' + token.text.substr(this._prefixLength));
    }

    return token.text;
  },
  escapeResource: function(res) {
    this.exportResources[eval(res)] = true;
    return this.locFn + '(' + res + ')';
  },
  getResources: function() {
    return _.keys(this.exportResources).sort();
  }
};

module.exports = Processor;
