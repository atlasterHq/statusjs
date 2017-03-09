module.exports = function(grunt){
    grunt.initConfig({
      pkg: grunt.file.readJSON('../package.json'),
      browserify: {
        'dist/app.js': ['app/app.js']
      },
      jade :{
        compile: {
          options: {
            client: false,
            pretty : false
          },
          files: [{
            cwd: "app",
            src: "**/*.jade",
            dest: "dist",
            expand: "true",
            ext: ".html"
          }]
        }
      },
      watch: {
        all: {
          options: {livereload: true},
          files: ['app/**'],
          tasks: ['jade','sass','browserify']
        }
      },
      sass:{
        dist: {
          files:{
            'dist/main.css':'app/style/main.scss'
          }
        }
      },
      copy: {
        main: {
          expand: true,
          cwd: 'static',
          src: '**',
          dest: 'dist/static',
        },
      }
    });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy','jade','sass','browserify','watch']);
};
