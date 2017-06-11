module.exports = function(grunt) {

  // подключаем плагин load-grunt-tasks, чтобы не перечислять все прочие плагины
  require('load-grunt-tasks')(grunt);

  // описываем задачи, которые планируем использовать (их запуск - см. низ этого файла)
  grunt.initConfig({

    // очищаем папку build перед новой записью
    clean: {
      build: ['build']
    },
	
	// компилируем scss
    sass: {
      source: {
        files: [{
          expand: true,
          cwd: 'source/scss',
          src: ['*.scss'],
          dest: 'source/css',
          ext: '.css'
        }]
      }
    },
	

	// копируем файлы из папки source в папку build и дальше работаем с этой папкой
    copy: {
      build: {
		files: [{
			expand: true,
			cwd: "source",
			src: [
			'img/**',             
            'js/**',
            'css/*.css',
            'font/**',
            'includes/**',
            '*.html'
			],
			dest: "build"
		}]
	  }
	},
	
    // обрабатываем разметку
    includereplace: {
      html: {
        expand: true,
        // откуда брать исходные файлы
        cwd: 'source/',
        // какие файлы обрабатывать
        src: '*.html',
        // куда писать результат обработки
        dest: 'build/',
      }
    },
    
    // autoprefixer
    autoprefixer: {
      options: {
	    browsers: ["last 4 version", "ie 10"]
	  },
	  style: {
		src: "build/css/style.css"
      }
	},
    
    // объединяем медиавыражения
    cmq: {
      style: {
        files: {
          // в какой файл, из какого файла (тут это один и тот же файл)
          'build/css/style.css': ['build/css/style.css']
        }
      }
    },

    // Сжимаем css
    cssmin: {
      style: {
        options: {
          keepSpecialComments: 0
        },
        files: [{
          expand: true,
          // в какой папке брать исходники
          cwd: 'build/css',
          // какие файлы (ЛЮБОЕ_ИМЯ.css, но не ЛЮБОЕ_ИМЯ.min.css)
          src: ['*.css', '!*.min.css'],
          // в какую папку писать результат
          dest: 'build/css',
          // какое расширение дать результатам обработки
          ext: '.min.css'
        }]
      }
    },
	
	// Сжимаем js
    uglify: {
      build: {
          src: 'build/js/script.js',
          dest: 'build/js/script.min.js'
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

    // Заменяем пути в файлх *.html
    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: /\"js\/*.js/g, 
              replacement: '"js/*.min.js'
            },
            {
              match: /\"css\/*.css/g, 
              replacement: '"css/*.min.css'
            }
          ]
        },
        files: [
          {
			expand: true, 
		    src: ['build/*.html']
		  }
        ]
      }
    },
	
    // публикация на GitHub Pages (будет доступен в сети по адресу http://tamtamlg.github.io/НАЗВАНИЕ-РЕПОЗИТОРИЯ/)
    'gh-pages': {
      options: {
        // какую папку считать результатом работы
        base: 'build'
      },
      src: '**/*'
    },
    
	//Отслеживаем изменения
    watch: {
      // перезагрузка
      livereload: {
        options: { livereload: true },
        files: ['build/**/*'],
      },
      // следить за стилями
      style: {
        // за фактом с сохранения каких файлов следить
        files: ['source/scss/**/*.scss'],
        // какую задачу при этом запускать
        tasks: ['style'],
        options: {
          spawn: false,
        },
      },
      // следить за картинками
      images: {
        // за фактом с сохранения каких файлов следить
        files: ['source/img/**/*.{png,jpg,gif,svg}'],
        // какую задачу при этом запускать
        tasks: ['img'],
        options: {
          spawn: false
        },
      },
      // следить за файлами разметки
      html: {
        // за фактом с сохранения каких файлов следить
        files: ['source/*.html'],
        // какую задачу при этом запускать
        tasks: ['includereplace:html'],
        options: {
          spawn: false
        },
      },
    },
	
	// локальный сервер, автообновление
    browserSync: {
      dev: {
        bsFiles: {
          // за изменением каких файлов следить для автообновления открытой в браузере страницы с локального сервера
          src : [
            'build/css/*.css',
            'build/js/*.js',
            'build/img/*.{png,jpg,gif,svg}',
            'build/*.html',
          ]
        },
        options: {
          watchTask: true,
          server: {
            // корень сервера
            baseDir: "build/",
          },
          // синхронизация между браузерами и устройствами (если одна и та же страница открыта в нескольких браузерах)
          ghostMode: {
            clicks: true,
            forms: true,
            scroll: true
          }
        }
      }
    }

  });

  // задача по умолчанию
  grunt.registerTask('default', [
  	'sass',
    'clean',
    'copy',
    'includereplace:html',
    'autoprefixer',
    'cmq',
    'cssmin',
    'uglify',
    'imagemin',
    'replace',
    'gh-pages',
	'watch',
    'browserSync'
  ]);
  
  // только компиляция стилей
  grunt.registerTask('style', [
    'sass',
    'cmq',
    'cssmin'
  ]);
  
  // только обработка картинок
  grunt.registerTask('img', [
    'copy:img',
    'imagemin'
  ]);

};