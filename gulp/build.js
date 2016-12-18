'use strict';

var gulp = require('gulp'),
    path = require('path'),
    minifyHtml = require('gulp-minify-html');

gulp.task('partials', function () {
  return gulp.src([
    path.join(conf.paths.src, '/app/**/*.html'),
    path.join(conf.paths.tmp, '/serve/app/**/*.html')
  ])
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe($.angularTemplatecache('templateCacheHtml.js', {
      module: 'angbootyo',
      root: 'app'
    }))
    .pipe(gulp.dest(conf.paths.tmp + '/partials/'));
});