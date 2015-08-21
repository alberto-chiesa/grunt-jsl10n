/*
 * grunt-jsl10n
 * https://github.com/alberto-chiesa/grunt-jsl10n
 *
 * Copyright (c) 2015 Alberto
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    jsl10n: {
      simpleTest: {
        options: {
					resourcesFile: 'tmp/resources.json'
        },
        files: {
          'tmp/jquery-1.11.3.l10n.js': 'test/fixtures/jquery-1.11.3.js',
					'tmp/jquery-2.1.4.l10n.js':  'test/fixtures/jquery-2.1.4.js',
					'tmp/prototype.l10n.js':  'test/fixtures/prototype.js',
					'tmp/smallscript.l10n.js':  'test/fixtures/smallscript.js',
        }
      },
      testCtx1: {
        options: {
					prefix: 't/',
					locFn: 'T',
					resourcesFile: 'tmp/resources2.json',
					resourcesContext: 'first'
        },
        files: {
					'tmp/testctxscript.1.l10n.js':  'test/fixtures/testctxscript.js'
        }
      },
      testCtx2: {
        options: {
					prefix: 't/',
					locFn: 'X',
					resourcesFile: 'tmp/resources2.json',
					resourcesContext: 'second'
        },
        files: {
					'tmp/testctxscript.2.l10n.js':  'test/fixtures/testctxscript.js'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'jsl10n', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
