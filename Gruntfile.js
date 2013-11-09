module.exports = function(grunt) {
	grunt.initConfig({
		lintspaces: {
			all: {
				src: ['*'],
				options: {
					newline: false,
					trailingspaces: true,
					indentation: 'tabs',
					spaces: 4
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-lintspaces');

	grunt.registerTask('default', ['lintspaces']);
};