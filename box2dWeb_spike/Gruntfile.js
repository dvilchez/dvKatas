// Borrows heavily from: https://gist.github.com/jessefreeman/6280967

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-mkdir');
	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-version');
	grunt.loadNpmTasks('grunt-jsduck');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-file-creator');

	var pkg = grunt.file.readJSON('package.json');
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		karma: {
			unit:{
				configFile: "karma.conf.js"
			}
		},
		mkdir: {
			tmp: { options: { create: ['builds/tmp', 'builds/tmp/js'] } }
		},
		clean: {
			builds: ['builds/web/**/*'],
			lib: ['builds/tmp/lib'],
			tmp: ['builds/tmp']
		},
		copy: {
			tmp: {
				files: [
					{ expand: true, src: ['*', '.htaccess','!Gruntfile.js', '!karma.conf.js', '!package.json'], dest: 'builds/tmp/', filter: 'isFile' },
					{ expand: true, src: ['css/**', 'js/**', 'media/**', 'cms/**', 'lib/**'], dest: 'builds/tmp/' }
				]
			},
			web: {
				files: [
					{ expand: true, cwd: 'builds/tmp', src: ['**'], dest: 'builds/web/', dot: true }
				]
			},
		},
		jshint: {
			options: { trailing: true },
			target: { src: ['js/**/*.js'] }
		}
	});

	// Helper tasks, not intended to be run alone
	grunt.registerTask('build-tmp', ['clean:builds', 'mkdir:tmp', 'copy:tmp']);
	grunt.registerTask('build-platforms', ['copy:web']);

	grunt.registerTask('default', ['jshint', 'build-tmp', 'build-platforms','clean:tmp']);
	// Dev tasks
	grunt.registerTask('lint', ['jshint']);
	grunt.registerTask('clean-builds', ['clean:builds']);
	grunt.registerTask('test', ['default', 'karma:unit', 'clean:tmp']);
};
