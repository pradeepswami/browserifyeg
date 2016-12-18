'use strict';

var gulp = require('gulp'),
del = require('del'),
browserify = require('browserify'),
source = require('vinyl-source-stream'),
requiredir = require('require-dir');
requiredir('./gulp');




/**
gulp.task('html', function(){
    
    return  gulp.src(path.views)
        .pipe(templateCache())
        .pipe(gulp.dest(path.dist + 'public'));
   
    
});
**/
