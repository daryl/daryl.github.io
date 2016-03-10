
var fs = require('fs');

/**
 * Babel hook
 */

require('babel-core/register');

/**
 * Fetch tasks
 */

var tasks = fs.readdirSync('./tasks');

/**
 * Bootstrap tasks
 */

tasks.forEach(function(f) {
  if(!/\.js/.test(f)) return;
  require('./tasks/' + f);
});

