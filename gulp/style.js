'use strict';

var less = require('gulp-less'),
    gulp = require('gulp'),
    path = require('path'),
    conf = require('./conf'),
    sourcemaps = require('gulp-sourcemaps');



gulp.task('style', function(){

    return gulp.src([
            path.join(conf.paths.src, '/app/css/main.less')
        ])
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/css/')));
});
    
