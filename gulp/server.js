'use script';

var browserSync = require('browser-sync'),
    gulp = require('gulp'),
    conf = require('./conf');

function browserSyncInit(baseDir, routes) {
  var browser = 'google chrome';

  var server = {
    baseDir: baseDir,
    routes: routes
  };

  /*
   * You can add a proxy to your backend by uncommenting the line below.
   * You just have to configure a context which will we redirected and the target url.
   * Example: $http.get('/users') requests will be automatically proxified.
   *
   * For more details and option, https://github.com/chimurai/http-proxy-middleware/blob/v0.0.5/README.md
   */
  // server.middleware = proxyMiddleware('/users', {target: 'http://jsonplaceholder.typicode.com', proxyHost: 'jsonplaceholder.typicode.com'});

  browserSync.instance = browserSync.init({
    startPath: '/',
    server: server,
    browser: browser
  });
}


gulp.task('serve', function () {
    var routes = {
        '/views' : 'src/app/views'
    }
    browserSyncInit(conf.paths.tmp + '/serve', routes);
});
