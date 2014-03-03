/*jshint scripturl: true*/

module.exports = function(grunt) {

    'use strict';

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'), // the package file to use

        jshint: {
            files: ['public/js/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        less: {
            dev: {
                options: {
                    paths: ['public/less']
                },
                files: {
                    'public/assets/styles.css': 'public/less/style.less'
                }
            },
            prod: {
                options: {
                    compress: true,
                    report: 'min',
                    sourceMap: true,
                    sourceMapFilename: 'public/assets/styles.map'
                },
                files: {
                    'public/assets/styles.css': 'public/less/style.less'
                }
            }
        },

        uglify: {
            options: {
                // banner: '/*\n<%= pkg.name %> v<%= pkg.version %> \n \nLast update: <%= grunt.template.date() %> \nAuthor: <%= pkg.author.name %> (<%= pkg.author.url %>)\n<%= pkg.repository.url %>\n*/\n',
                sourceMap: 'public/assets/<%= pkg.name %>-<%= pkg.version %>.min.map',
                report: 'min'
            },
            dist: {
                files: {
                    'public/assets/<%= pkg.name %>-<%= pkg.version %>.min.js': [
                        // vendor
                        'public/libs/modernizr.custom.js',
                        'public/libs/jquery-1.10.1.min.js',
                        'public/libs/response-0.7.8.min.js',
                        'public/libs/bootstrap.min.js',
                        'public/libs/jquery.slides.min.js',
                        // scripts
                        'public/js/main.js',
                    ]
                }
            }
        },

        watch: {
            files: ['public/js/*.js', 'public/less/*.less'],
            tasks: ['jshint', 'less:dev'],
        },
    });

    grunt.registerTask('default', [
        'jshint'
    ]);
    grunt.registerTask('build', [
        'jshint',
        'less:prod',
        'uglify'
    ]);
};