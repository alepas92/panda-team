module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: [
                    {cwd: 'dev/', src: 'index.html', dest: 'build/', expand: true},
                    {cwd: 'dev/lib/jasmine-2.0.0', src: '*', dest: 'build/lib/jasmine-2.0.0', expand: true},
                    {cwd: 'dev/lib/pandastrap', src: '*', dest: 'build/lib/pandastrap', expand: true},
                    {cwd: 'dev/img/main', src: '*', dest: 'build/img/main', expand: true},
                    {cwd: 'dev/js/vendor', src: '*', dest: 'build/js/vendor', expand: true},                   
                	{cwd: 'dev/lib/pandastrap/svg', src: '*', dest: 'build/lib/pandastrap/svg', expand: true}
                ]
            },
        },

        concat: {
            options: {
                separator: ';',
            },

            apps: {
                src: ['dev/js/app/controllers/*.js', 'dev/js/app/models/*.js', 'dev/js/app/views/*.js'],
                dest: 'build/js/script.js',
            },

        },

        sass: {
            dist: {
                files: [
                    {outputstyle: 'compressed',expand: true,cwd: 'dev/scss/',src: ['*.scss'],dest: 'build/css',ext: '.css'},
                ]
            }
        },

        insert: {
            options: {},
            main: {
                files: [
                    {src: "dev/header.html", dest: "build/index.html", match: " <!--Stuff header here-->"},
                    {src: "dev/calendar.html", dest: "build/index.html", match: "<!--Stuff calendar here-->"},
                    {src: "dev/outlays-section.html", dest: "build/index.html", match: "<!--Stuff outlays section here-->"},
                    {src: "dev/incomes-section.html", dest: "build/index.html", match: "<!--Stuff incomes section here-->"},
                    {src: "dev/manage-forecast.html", dest: "build/index.html", match: "<!--Stuff manage forecast section here-->"},
                    {src: "dev/manage-balance.html", dest: "build/index.html", match: "<!--Stuff manage balance section here-->"},
                    {src: "dev/statistics.html", dest: "build/index.html", match: "<!--Stuff statistics section here-->"},
                    {src: "dev/footer.html", dest: "build/index.html", match: "<!--Stuff footer here-->"},
                    {src: "dev/manage-layer.html", dest: "build/index.html", match: "<!--Stuff manage-layer here-->"},
                ],
            },
        },

        watch: {
            html: {
                files: ['dev/*.html','dev/lib/pandastrap/*','dev/img/main/*','dev/lib/pandastrap/svg/*'],
                tasks: ['copy', 'insert'],
            },

            js: {
                files: ['dev/js/app/models/*.js','dev/js/app/controllers/*.js','dev/js/app/views/*.js'],
                tasks: ['concat'],
            },

            sass: {
                files: ['dev/scss/*.scss', 'dev/scss/desktop/*.scss'],
                tasks: ['sass'],
            },
        }

      });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-insert');

    grunt.registerTask('default', ['copy', 'concat', 'sass', 'insert']);
    
};

