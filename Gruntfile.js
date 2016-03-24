module.exports = function(grunt) {

  //project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // add stuff here

  });

  grunt.loadNpmTasks('grunt-x');

  grunt.registerTask('default', ['x']);
};
