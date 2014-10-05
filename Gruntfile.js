module.exports = function (grunt) {
    var files = [
        'terminalcolors/terminalcolors.ts',
        'test/progressbar.ts',
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
            options: {
                mangle: false
            },
            simple: {
                files: {
                    'terminalcolors/terminalcolors.js': ['terminalcolors/terminalcolors.js'],
                    'simple-progress-bar.js': ['progress.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['shell','typescript', 'uglify:simple']);
};