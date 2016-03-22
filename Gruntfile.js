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
    },
    uglify: {
      target: {
        files: {
          'dist/app.min.js': ['src/app.js']
        }
      }
    },
    cssmin: {
      target: {
        files: {
          'dist/css/style.min.css': ['src/css/normalize.css', 'src/css/bootstrap.css', 'src/css/style.css']
        }
      }
    },
    processhtml: {
      dist: {
        files: {
          'dist/index.html': ['src/index.html']
        }
      }
    },
    watch: {
      files: ['src/**/*'],
      tasks: ['default']
    },
    uncss: {
      dist: {
        files: {
          'dist/css/style.min.css': ['dist/index.html']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-uncss');

  grunt.registerTask('default', ['newer:imagemin', 'processhtml', 'uglify', 'cssmin', 'uncss']);
};
