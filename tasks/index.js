var Processor = require('./Processor');

var program =
	'var rx = /test[[\]]/;\n' +
	'var rx = /test[[\]]/i;\r\n' +
	'var a = \'res:Test\', b = \"res:Tasty\\\"\", c = \"Do not escape\";\r\n' +
	'var a = 10;\r\nfor(a = 0; a < 100; a++) {\r\n\ti = 10 / 10;\r\n}\r\n',
	processor = new Processor({
		prefix: 'res:',
		locFn: 'Gianos.T'
	});

var result = processor.process(program);

console.log(result);
