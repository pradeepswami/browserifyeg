'use strict';
var gutil = require('gulp-util');

module.exports.paths = {
    src: 'src',
    dist: 'dist',
    tmp: 'tmp'
};

module.exports.errorHandler = function(title) {
  'use strict';

  return function(err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};
