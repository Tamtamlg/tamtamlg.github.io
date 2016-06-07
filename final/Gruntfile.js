// Обязательная обёртка
module.exports = function (grunt) {

  // Задачи
  grunt.initConfig({
    
    
    
    
    htmlbuild: {
        dist: {
            src: 'index.html',
            dest: 'build/',
            options: {
                sections: {
                header: 'header/**/*.html',
                footer: 'footer/**/*.html'
                }
            }
        }
    }
    
    
  });
  
  // Загрузка плагинов, установленных с помощью npm install
  grunt.loadNpmTasks('grunt-html-build');
  

  // Задача по умолчанию
  grunt.registerTask('default', ['htmlbuild']);
};


