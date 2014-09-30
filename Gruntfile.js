module.exports = function (grunt) {
    var files = [
        'progress.ts'
    ];

    grunt.initConfig({
        typescript: {
            options: {
                module: 'commonjs',
                target: 'es5'
            },
            compile: {
                src: files
            }
        }
    });

    grunt.loadNpmTasks('grunt-typescript');

    grunt.registerTask('default', ['typescript']);
};