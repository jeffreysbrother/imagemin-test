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
          'dist/style.min.css': ['src/style.css', 'src/bootstrap.css']
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
      files: ['src/*'],
      tasks: ['default'],
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['newer:imagemin', 'processhtml', 'uglify', 'cssmin']);
};
