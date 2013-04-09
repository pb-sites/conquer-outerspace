
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      dist: {
        options: {
          paths: ["site/assets/css/less"],
          yuicompress: true
        },
        files: {
          "site/assets/css/app.css": "site/assets/css/less/main.less"
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', ['less']);
};