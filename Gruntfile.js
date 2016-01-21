module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    //package configuration file
    pkg: grunt.file.readJSON('package.json'),

    // chicke.js module compile
    requirejs: {
      compile: {
        options: {
          appDir: "sources/",
          baseUrl: ".",
          dir: "release/chicken/",
          optimize: 'uglify',
          mainConfigFile:'chicken.config',
          modules:[
            {
              name:'chicken'
            }
          ],
          logLevel: 0,
          findNestedDependencies: true,
          fileExclusionRegExp: /^jquery/,
          inlineText: true
        }
      }
    },

    // copy result file
    copy : {
      chicken : {
        files:[{
          expand: true,
          dot: true,
          cwd: 'release',
          dest: 'examples/lib/',
          src:'**'
        }]
      },
      dependencies : {
        files:[{
          expand: true,
          dot: true,
          cwd: 'bower_components',
          dest: 'examples/lib/',
          src:'**'
        }]
      },
    }
  });

  // Load the plugin 
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Define Tasks.
  grunt.registerTask('build', [
    'requirejs',         // compile require.js modules
    'copy:chicken',      // copy reaease file
    'copy:dependencies'  // copy reaease file
  ]);

  // Default task.
  grunt.registerTask('default', ['requirejs']);

};