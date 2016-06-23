module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		cssmin: {
			my_target: {
				// files: [{	
				// 	expand: true,
				// 	cwd: 'public/stylesheets',
				// 	src: ['*.css', '!*.min.css'],
				// 	dest: 'public/stylesheets',
				// 	ext: '.min.css'
				// }]
				src: 'public/stylesheets/style.css',
				dest: 'public/stylesheets/style.min.css',
			}
		},
		sass: {
    		dist: {
        		src: 'public/stylesheets/main.scss',
        		dest:'public/stylesheets/style.css',
    		}
  		},
		uglify: {
			my_target: {
				src: 'public/javascripts/script.js',
				dest: 'public/javascripts/script.min.js',
			}
		},
		watch: {
		  sass_stylesheets: {
		    files: ['public/stylesheets/main.scss'],
		    tasks: ['sass'],
		    options: {
		      spawn: false, //faster, but prone to errors
		      debounceDelay: 250 //delay for automated tasks
		    }
		  },
		  stylesheets: {
		    files: ['public/stylesheets/style.css'],
		    tasks: ['cssmin'],
		    options: {
		      spawn: false, //faster, but prone to errors
		      debounceDelay: 250 //delay for automated tasks
		    }
		  },
		  scripts: {
		    files: ['public/javascripts/script.js'],
		    tasks: ['uglify'],
		    options: {
		      spawn: false, //faster, but prone to errors
		      debounceDelay: 250 //delay for automated tasks
		    }
		  },
		  livereload: {
		    options: { livereload: true },
		    files: ['views/**/*', '/public/**/*']
		  }
		}
	
	});
	
	grunt.registerTask('default', ['sass', 'cssmin', 'uglify', 'watch']);
	//grunt.registerTask('watchStylesheets', ['watch:stylesheets']);
	//grunt.registerTask('watchScripts', ['watch:scripts']);

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
};