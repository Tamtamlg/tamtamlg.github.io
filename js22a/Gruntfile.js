
module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);
  
  
  grunt.initConfig({
    
    babel: {
      options: {
        sourceMap: false,
        presets:['es2015']
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src/js',
          src: ['main.js'],
          dest: 'build/js',
          ext: '.js',
          extDot: 'first'
          
        }]
      }
    }
  });
  
  grunt.loadNpmTasks('load-grunt-tasks');
  
  
  grunt.registerTask('default', ['babel']);
};