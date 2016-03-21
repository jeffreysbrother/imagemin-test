module.exports = function(grunt) {

  // additional plugin
  var mozjpeg = require('imagemin-mozjpeg');

  //project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    imagemin: {
      jpg: {
        options: {
          progressive: true,
          use: [mozjpeg()],
          // optimizationLevel: 7,
          quality: 9,
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['*.{jpg, jpeg, JPG, JPEG}'],
          dest: 'dist/'
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask('default', ['newer:imagemin:jpg']);
};
