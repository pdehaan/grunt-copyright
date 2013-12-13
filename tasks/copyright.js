#!/usr/bin/env node

module.exports = function (grunt) {
  'use strict';

  grunt.registerMultiTask('copyright', 'Checking for copyrights in files', function () {
    var pattern = this.options().pattern;
    var files = this.filesSrc.filter(function (file) {
      var txt;
      if (!grunt.file.isFile(file)) {
        return;
      }
      txt = grunt.file.read(file, 'utf8');
      return !txt.match(pattern);
    });

    if (files.length) {
      grunt.log.subhead('The following files don\'t match the specified pattern:\n> %s\n', pattern);
      files.forEach(function (file) {
        grunt.log.writeln('- ' + file);
      });
      return false;
    }
  });
};
