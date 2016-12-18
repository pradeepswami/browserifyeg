'use strict';

var gulp = require('gulp'),
inject = require('gulp-inject'),
source = require('vinyl-source-stream'),
templateCache = require('gulp-angular-templatecache'),
conf = require('./conf'),
path = require('path');
var debug = require('gulp-debug-streams');



gulp.task('inject', function(){
    
    var injectScripts = gulp.src([
        path.join(conf.paths.tmp, '/serve/js/vendor.js'),
        path.join(conf.paths.tmp, '/serve/js/app.js')
    ], { read: false});
    
    var injectStyles = gulp.src([
        path.join(conf.paths.tmp, '/serve/css/main.css'),
    ], { read: false});


    var injectOptions = {
      ignorePath: [path.join(conf.paths.tmp, '/serve/')],        
      addRootSlash: false
    };
    
    return gulp.src(path.join(conf.paths.src, '*.html'))
    .pipe(debug('in Inject'))
    .pipe(inject(injectScripts, injectOptions))
    .pipe(inject(injectStyles, injectOptions))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/')));
});
