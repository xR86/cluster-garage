module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		sass: {
    		dist: {
        		src: 'public/css/main.scss',
        		dest:'public/css/style.css',
    		}
  		},
		cssmin: {
			dist: {
				src: 'public/css/style.css',
				dest: 'public/css/style.min.css',
			}
		},
		uglify: {
			dist: {
				files : {
					'public/js/script.min.js': 'public/js/script.js'
					//'public/js/controllers/messageController.min.js': 'public/js/controllers/messageController.js',
				}
			}
		},
		bowercopy: {
			dist: {
				options: {
					destPrefix: 'public/vendor'
				},
				files: {
					'bootstrap/bootstrap.min.css': 'bootstrap/dist/css/bootstrap.min.css',
					'angular/angular.min.js': 'angular/angular.min.js',
					'angular-ui-router/angular-ui-router.min.js': 'angular-ui-router/release/angular-ui-router.min.js',
					'angular-bootstrap/ui-bootstrap.min.js': 'angular-bootstrap/ui-bootstrap.min.js',
					'font-awesome/': 'font-awesome/'
				}
			}
		},


		//code coverage
		coveralls: {
			// Options relevant to all targets
			options: {
				// When true, grunt-coveralls will only print a warning rather than
				// an error, to prevent CI builds from failing unnecessarily (e.g. if
				// coveralls.io is down). Optional, defaults to false.
				force: false
			},
			code_coverage: {
				src: 'coverage/lcov.info'
			},
		},


		watch: {
		  sass_stylesheets: {
		    files: ['public/css/main.scss'],
		    tasks: ['sass', 'cssmin'],
		    options: {
		      spawn: false, //faster, but prone to errors
		      debounceDelay: 250 //delay for automated tasks
		    }
		  },
		  scripts: {
		    files: ['public/js/script.js'],
		    tasks: ['uglify'],
		    options: {
		      spawn: false,
		      debounceDelay: 250
		    }
		  },
		  livereload: {
		    options: { livereload: true },
		    files: ['app.js', 'server/**/*', 'public/**/*']
		  }
		}
	
	});
	
	grunt.registerTask('default', ['sass', 'cssmin', 'uglify', 'bowercopy', 'watch']);
	//grunt.registerTask('watchStylesheets', ['watch:sass_stylesheets']);
	//grunt.registerTask('watchScripts', ['watch:scripts']);

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-bowercopy');

	grunt.loadNpmTasks('grunt-coveralls');
};