/*
 * grunt-jsl10n
 * https://github.com/alberto-chiesa/grunt-jsl10n
 *
 * Copyright (c) 2015 Alberto Chiesa
 * Licensed under the MIT license.
 */

'use strict';

var Processor = require('./processor');

module.exports = function(grunt) {
  grunt.registerMultiTask('jsl10n', 'The best Grunt plugin ever.', function() {
    var options = this.options({
      prefix: 'res:',
      locFn: 'l10n.T'
    }), p = new Processor(options);

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
					// Warn on and remove invalid source files (if nonull was set).
					if (!grunt.file.exists(filepath)) {
						grunt.log.warn('Source file "' + filepath + '" not found.');
						return false;
					} else {
						return true;
					}
				}).map(function(filepath) {
					// Read file source.
					return grunt.file.read(filepath);
				}).join(grunt.util.normalizelf('\n')),
				dest = p.process(src);

			
      // Write the destination file.
      grunt.file.write(f.dest, dest);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
