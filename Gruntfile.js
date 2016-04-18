module.exports = function(grunt) {

  //project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // this task handles image compression and resizing
    // required: GraphicsMagick installed
    responsive_images: {
        myTask: {
          options: {
            sizes: [{
              width: 2100,
              quality: 61
            // },{
            //   width: 300,
            //   quality: 40
            // },{
            //   width: 700,
            //   quality: 40
            }]
          },
          files: [{
            expand: true,
            src: ['src/img/**.{jpg,gif,png}'],
            custom_dest: 'dist/img{%= width %}/'
          }]
        }
      }

  });

  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.registerTask('default', ['responsive_images']);
};
