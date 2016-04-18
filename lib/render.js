
import varse from 'varse';
import fs from 'fs';

/**
 * Expose `render`
 */

export default render;

/**
 * View path
 */

let views = __dirname + '/../views';

/**
 * HTML cache
 */

let store = {};

/**
 * Render view
 *
 * @param {String} view
 * @param {Object} locals
 * @return {String}
 * @api public
 */

function render(view, locals={}) {
  let path = `${views}/${view}.html`;
  let html = '';

  if('undefined' == typeof store[path]) {
    html = fs.readFileSync(path, 'utf8');
    store[path] = html;
  } else {
    html = store[path];
  }

  if(Object.keys(locals).length) {
    return varse(html, locals);
  }

  return html;
}

