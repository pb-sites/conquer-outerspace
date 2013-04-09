
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      dist: {
        options: {
          paths: ["assets/css/less"],
          yuicompress: true
        },
        files: {
          "assets/css/app.css": "assets/css/less/main.less"
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', ['less']);
};