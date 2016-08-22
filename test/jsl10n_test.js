'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.jsl10n = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  simple_test: function(test) {
    test.expect(5);

    var actual = grunt.file.read('tmp/jquery-1.11.3.l10n.js');
    var expected = grunt.file.read('test/fixtures/jquery-1.11.3.js');
    test.equal(actual, expected, 'The jQuery 1.11 library was not left unchanged.');

    actual = grunt.file.read('tmp/jquery-2.1.4.l10n.js');
    expected = grunt.file.read('test/fixtures/jquery-2.1.4.js');
    test.equal(actual, expected, 'The jQuery 2.1 library was not left unchanged.');

    actual = grunt.file.read('tmp/prototype.l10n.js');
    expected = grunt.file.read('test/fixtures/prototype.js');
    test.equal(actual, expected, 'The Prototype library was not left unchanged.');

    actual = grunt.file.read('tmp/smallscript.l10n.js');
    expected = grunt.file.read('test/expected/smallscript.expected.js');
    test.equal(actual, expected, 'The smallscript file was not processed correctly.');

    actual = grunt.file.read('tmp/regex.js');
    expected = grunt.file.read('test/expected/regex.js');
    test.equal(actual, expected, 'The smallscript file was not processed correctly.');

    test.done();
  },
  testCtx: function(test) {
		var actual, expected;
    test.expect(3);

    actual = grunt.file.read('tmp/testctxscript.1.l10n.js');
    expected = grunt.file.read('test/expected/testctxscript.expected.1.js');
    test.equal(actual, expected, 'The testctxscript1 file was not processed correctly.');

		actual = grunt.file.read('tmp/testctxscript.2.l10n.js');
    expected = grunt.file.read('test/expected/testctxscript.expected.2.js');
    test.equal(actual, expected, 'The testctxscript2 file was not processed correctly.');

		actual = grunt.file.readJSON('tmp/resources2.json');
		test.deepEqual(actual, {
			first: ["Tasty\"", "Test"],
			second: ["Tasty\"", "Test"]
		}, 'The extracted resources are not equal!');
		
    test.done();
  },
};
