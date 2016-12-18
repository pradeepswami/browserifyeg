'use strict';

var gulp = require('gulp'),
browserify = require('browserify'),
source = require('vinyl-source-stream'),
templateCache = require('gulp-angular-templatecache'),
conf = require('./conf');

var packageJSON = require('../package.json');
var dependencies = Object.keys(packageJSON && packageJSON.dependencies || {});


gulp.task('app', function(){
   
    return browserify([conf.paths.src + '/app/js/app.js'],{debug: true})
        .external(dependencies)
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('app.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest(conf.paths.tmp + '/serve/js'));
});

gulp.task('vendor', function(){
   
    return browserify({debug: true})
        .require(dependencies)
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('vendor.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest(conf.paths.tmp + '/serve/js'));
});

gulp.task('script',['vendor','app']);
