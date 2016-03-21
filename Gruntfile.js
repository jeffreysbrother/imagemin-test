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
          cwd: 'src/img/',
          src: ['*.{jpg, jpeg, JPG, JPEG}'],
          dest: 'dist/img/'
        }]
      },
      png: {
        options: {
          progressive: true,
          optimizationLevel: 5,
        },
        files: [{
          expand: true,
          cwd: 'src/img/',
          src: ['*.{png,PNG}'],
          dest: 'dist/img/'
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask('default', ['newer:imagemin']);
};
