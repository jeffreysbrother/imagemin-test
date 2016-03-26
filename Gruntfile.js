module.exports = function(grunt) {

  //project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 7
        },
        files: [{
          expand: true,
          cwd: 'src/img/',
          src: ['*.{jpg, jpeg, JPG, JPEG, png, PNG}'],
          dest: 'dist/img/'
        }]
      },
    }
    
  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['imagemin']);
};
