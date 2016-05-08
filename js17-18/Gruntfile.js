// Обязательная обёртка
module.exports = function (grunt) {

  // Задачи
  grunt.initConfig({
    
    // Очищаем папку build перед новой записью
    clean: {
      build: ['build']
    },

    // Копируем файлы из папки source в папку build и дальше работаем с этой папкой
    copy: { 
      build: {         
        files: [{           
          expand: true,
          cwd: 'source',           
          src: [             
            'img/**',             
            'js/**',
            'css/**',
            'font/**',
            'index.html'           
          ],           
          dest: 'build'
        }]       
      }
     },
    
    // Склеиваем
    concat: {
      js: {
        src: [
          'build/js/template.js', 'build/js/main.js'
        ],
        dest: 'build/js/main.js'
      },
      css: {
        src: [
          'build/css/normalize.css', 'build/css/style.css'
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
    
    // Сжимаем css
    cssmin: { //описываем работу плагина минификации и конкатенации css.
      target: {
        files: {
            'build/css/style.min.css' : ['<%= concat.css.src %>']   // первая строка - output файл. массив из строк, какие файлы конкатенировать и минифицировать.
        }
      }
    },
    
    //Сжимаем картинки
    imagemin: { 
      images: {         
        options: {           
          optimizationLevel: 3         
        },         
        files: [{           
          expand: true,           
          src: ["build/img/**/*.{png,jpg,gif,svg}"]         
        }]       
      } 
    },

    // Заменяем пути в файле index.html
    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: /\"js\/main.js/g, 
              replacement: '"js/main.min.js'
            },
            {
              match: /\"css\/style.css/g, 
              replacement: '"css/style.min.css'
            }
          ]
        },
        files: [
          {expand: true, src: ['build/index.html']}
        ]
      }
    },
    
    //Отслеживаем изменения
    watch: {
      concat: {
        files: ['<%= concat.js.src %>', '<%= concat.css.src %>'],
        tasks: ['concat', 'uglify', 'cssmin']
      }
    }
  });
  
  // Загрузка плагинов, установленных с помощью npm install
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-replace');

  // Задача по умолчанию
  grunt.registerTask('default', ['clean', 'copy', 'concat', 'uglify', 'cssmin', 'imagemin', 'replace']);
};