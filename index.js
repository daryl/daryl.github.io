
var logger = require('koa-logger');
var send = require('koa-send');
var gzip = require('koa-gzip');
var app = require('koa')();

/**
 * Expose `app`
 */

module.exports = app;

/**
 * Middleware
 */

app.use(logger());
app.use(gzip());

/**
 * Static `dist`
 *
 * If the request path is a static
 * file, just serve the file, yo
 */

app.use(function*(next) {
  var f = yield send(this, this.path, {
    root: 'dist'
  });

  if(!f) yield next;
});

/**
 * Serve all
 *
 * If the request path is `/` it will
 * serve index.html otherwise it will
 * redirect to `/`
 */

app.use(function*(next) {
  if('/' != this.path) {
    this.redirect('/');
    return
  }

  yield send(this, 'index.html', {
    root: 'views'
  });
});

