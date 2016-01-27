module.exports = function(grunt) {

  // set the base path so we can fide the package.json
  // package.json is in the parent directory
  grunt.file.setBase('../');

  // Configure Tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass : {
      dev: {
        options : {
          outputStyle: 'nested'
        },
        files : {
          'css/styles.css' : 'scss/styles.scss'
        }
      },
      build: {
        options : {
          outputStyle: 'compressed'
        },
        files : {
          'css/styles.css' : 'scss/styles.scss'
        }
      }
    },
    inlinecss: {
      main: {
        options: {
        },
        files: {
          'build/email.html': 'email.html'
        }
      }
    },
    csslint: {
      options: {
        csslintrc: '../.csslintrc'
      },
      src: ['css/*.css']
    },
    htmllint: {
     options: {
       format: "underscore",
       htmllintrc: '../.htmllintrc'
     },
     src: [ 'email.html' ]
    },
    watch : {
      options: {
        // Use browser extension when working on MAMP
        // grunt watch must be running for the browser extention to connect to the live reload server
        // You can specify a port in the options or include the livereload script on the site
        livereload: true
      },
      css: {
        files: ['scss/**/*.scss'],
        tasks: ['sass:dev']
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks( 'grunt-contrib-csslint');
  grunt.loadNpmTasks( 'grunt-htmllint' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-sass' );
  grunt.loadNpmTasks( 'grunt-inline-css');

  // reset the base path to allow us to reference files relative to the app directory
  // This way we can keep the gruntfile.js and the node_modules/package.json in the parent directory
  // Must come after loading the npm dependencies
  grunt.file.setBase('email/');

  // Register tasks
  grunt.registerTask( 'default', [ 'sass:dev' ]);
  grunt.registerTask( 'build:html', [ 'inlinecss:main' ]);
  grunt.registerTask( 'build:css', [ 'sass:build' ]);
  grunt.registerTask( 'lint:css', [ 'csslint' ]);
  grunt.registerTask( 'lint:html', [ 'htmllint' ]);

};
