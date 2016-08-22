/*
 * grunt-jsl10n
 * https://github.com/alberto-chiesa/grunt-jsl10n
 *
 * Copyright (c) 2015 Alberto Chiesa
 * Licensed under the MIT license.
 */

'use strict';

var Processor = require('./processor');


// Reads all the existing files and normalizes the newlines,
// then invokes the Processor to do it's "thing" with string
// literals.
function processFileGroupInClojure(grunt, p, options) {
  return function(f) {
    var fileCheck = function(filepath) {
        var flag = grunt.file.exists(filepath);
        if (!flag) { grunt.log.warn('Source file "' + filepath + '" not found.'); }
        return flag;
      },      
      contents = f.src.filter(fileCheck).map(grunt.file.read).join('\n');
    
    grunt.file.write(f.dest, p.process(contents), {encoding: 'utf8'});
    grunt.log.writeln('File "' + f.dest + '" created.');
  };
}

function writeResourcesFile(grunt, p, options) {
  var resources = grunt.file.exists(options.resourcesFile) ? grunt.file.readJSON(options.resourcesFile) : {};

  resources[options.resourcesContext || 'default'] = p.getResources();
  
  grunt.file.write(options.resourcesFile, JSON.stringify(resources, null, '  '), {encoding: 'utf8'});
}

module.exports = function(grunt) {
  grunt.registerMultiTask('jsl10n', 'The best Grunt plugin ever.', function() {
    var options = this.options({
        prefix: 'res:',
        locFn: 'l10n.T',
        resourcesContext: 'default',
        resourcesFile: null
      }),
      p = new Processor(options),
      processFileGroupFunction = processFileGroupInClojure(grunt, p, options);
      
    // Iterate over all specified file groups.
    this.files.forEach(processFileGroupFunction);
    
    if (options.resourcesFile) {
      writeResourcesFile(grunt, p, options);
    }
  });

};
