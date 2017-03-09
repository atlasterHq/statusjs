module.exports = function(grunt){
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      browserify: {
        'dist/app.js': ['webapp/app/app.js']
      },
      jade :{
        compile: {
          options: {
            client: false,
            pretty : false
          },
          files: [{
            cwd: "webapp/app",
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
          files: ['webapp/app/**'],
          tasks: ['jade','sass','browserify']
        }
      },
      sass:{
        dist: {
          files:{
            'dist/main.css':'webapp/app/style/main.scss'
          }
        }
      },
      copy: {
        main: {
          expand: true,
          cwd: 'webapp/static',
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
