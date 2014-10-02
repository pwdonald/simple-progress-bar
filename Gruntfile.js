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
        },
        shell: {
            tsd: {
                command: 'node node_modules/tsd/build/cli update -so'
            }
        },
        uglify: {
            simple: {
                files: {
                    'progresbar.min.js': ['terminalcolors/terminalcolors.js', 'progress.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['shell','typescript', 'uglify:simple']);
};