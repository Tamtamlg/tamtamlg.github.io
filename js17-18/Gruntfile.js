// Обязательная обёртка
module.exports = function (grunt) {

  // Задачи
  grunt.initConfig({
    // Склеиваем
    concat: {
      js: {
        src: [
          'js/template.js', 'js/main.js'
        ],
        dest: 'build/js/main.js'
      },
      css: {
        src: [
          'css/normalize.css', 'css/style.css'
        ],
        dest: 'build/css/style.css'
      }
    },
    // Сжимаем js
    uglify: {
      build: {
          src: '<%= concat.js.src %>',
          dest: 'build/js/main.min.js'
      }
    },
    cssmin: { //описываем работу плагина минификации и конкатенации css.
      target: {
        files: {
            'build/css/style.min.css' : ['<%= concat.css.src %>']   // первая строка - output файл. массив из строк, какие файлы конкатенировать и минифицировать.
        }
      }
    },
    watch: {
      concat: {
        files: ['<%= concat.js.src %>', '<%= concat.css.src %>'],
        tasks: ['concat', 'uglify', 'cssmin']
      }
    }
  });

  // Загрузка плагинов, установленных с помощью npm install
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Задача по умолчанию
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};